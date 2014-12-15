//Remover todas as linhas da tabela

function zerarTabela(tabela)
{
	//Apagar itens da tabela
	$(tabela).find('tr').remove();

	//Adicionar o gif de Loading
	$(tabela).append($("<img src='/img/loader-tabela.gif' class='loader-tabela'/>"));
}

function preencheTabela(tabela, dados)
{
	//Remover a imagem de loading
	$(".loader-tabela").remove();

	//Inserir os dados
	for(var usuario in dados.data)
	{
		$(tabela).append( $( '<tr> <td> '+dados.data[usuario].id+' </td> <td> '+dados.data[usuario].nome+' </td> <td> '+dados.data[usuario].email+' </td> </tr>' ) );
	}
}

function obterPaginaDoLink(link)
{
	var url = $(link).attr('href');

	return url.split('=')[1];
}

function removerSpans(baseUrl)
{
	if( $('ul.pagination li:first-child span').length > 0 )
	{
		$('ul.pagination li:first-child span').remove();

		$('ul.pagination li:first-child').append( $( "<a href='"+baseUrl+"?page=1'>«</a>" ) )
	}

	if( $('ul.pagination li:last-child span').length > 0 )
	{
		$('ul.pagination li:last-child span').remove();

		$('ul.pagination li:last-child').append( $( "<a href='"+baseUrl+"?page=1'>»</a>" ) )
	}
}

function ajustarPaginacao(data, url)
{
	var resposta = JSON.parse(data);

	//Remover a classe Active
	$("ul.pagination li").removeClass('active');

	//Destacar o link da página atual
	$('ul.pagination li a:contains("'+resposta.current_page+'")').parent().addClass('active');

	//Habilitar ou desabilitar o link "Anterior"

	if(resposta.current_page == 1)
		$("ul.pagination li:first-child").addClass('disabled');
	else
		$('ul.pagination li:first-child').removeClass('disabled');


	//Habilitar ou desabilitar o link "Próximo"

	if(resposta.current_page == resposta.last_page)
		$("ul.pagination li:last-child").addClass('disabled');
	else
		$('ul.pagination li:last-child').removeClass('disabled');

	//Alterar os endereços

	if(resposta.current_page > 1)
		$("ul.pagination li:first-child a").attr('href', url+"?page=" + (resposta.current_page - 1));
	

	if(resposta.current_page < resposta.last_page)
		$("ul.pagination li:last-child").attr('href', url+"?page=" + (resposta.current_page + 1));

}

$(function(){

	var baseUrl = document.URL;

	//Chamada Ajax para a gravação do novo usuário

	$('form.cadastro-usuario').submit(function(event){

		//Evitar o submit
		event.preventDefault();

		console.log("Enviando dados...");

		//Enviar a requisição e avisar ao usuário do resultado
		$.post('/usuarios', $(this).serialize(), function(data){

			//Adicionar o alert e removê-lo após alguns segundos
			var alerta = '<div class="alert alert-info alert-dismissible item col-md-8 fadeInLeft animated" role="alert"><span><strong>Parabéns!</strong> Usuário cadastrado com sucesso.</span></div>';
			$(".wrapper-formulario").prepend($(alerta));

			window.setTimeout(function(){
				$(".alert").removeClass('animated fadeInLeft').addClass('animated fadeOutRight');

				window.setTimeout(function(){
					$(".alert").remove();
				}, 1000);

			}, 3000);

			//Limpar os campos
			$("form.cadastro-usuario").find('input[type=text]').val('');

		});

	});

	////////////////////////////////////////// Paginação

	//Retirar o "span" do link atual e transformar em um "a"

	var atual = $('ul.pagination li.active span').html();

	$('ul.pagination li.active span').remove();

	$('ul.pagination li.active').append('<a href="'+baseUrl+'?page='+atual+'">'+atual+'</a>');

	//Testando se o primeiro e o último link da paginação contém um "span". Caso positivo, substituir por um "a"

	removerSpans(baseUrl);

	//Fazer a chamada Ajax para obter os resultados

	$("ul.pagination").on('click', 'a', function(event){

		event.preventDefault();

		if( $(this).parent('li').hasClass('disabled') )
			return false;

		//Remover todas as linhas da tabela
		zerarTabela($(".table"));

		//Fazer a chamada Ajax para obter os dados
		var pagina = obterPaginaDoLink($(this));

		$.get('/usuarios/ajaxUsuarios?page='+pagina, function(data){
			
			//Repopular os dados da tabela
			preencheTabela($('.table'), JSON.parse(data));

			ajustarPaginacao(data, baseUrl);

		});

	});

});
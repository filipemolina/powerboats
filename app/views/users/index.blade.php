@extends('admin')

@section('titulo')
	Usuários:
@stop


@section('cabecalho')
	Usuários!
@stop

{{-- Lista de Usuários Cadastrados --}}

@section('usuarios')

	<table class="table table-striped">
		
		<thead>
			<tr>
				<th>Id</th>
				<th>Nome</th>
				<th>E-mail</th>
			</tr>
		</thead>

		<tbody>
			
			@foreach($usuarios as $usuario)
				<tr>
					<td>{{ $usuario->id }}</td>
					<td>{{ $usuario->nome }}</td>
					<td>{{ $usuario->email }}</td>
				</tr>
			@endforeach

		</tbody>
	</table>

	<div class="text-center">
	
		{{ $usuarios->links() }}
	
	</div>

@stop

{{-- Formulário de Cadastro de Usuários --}}

@section('cadastro')

	<div class="col-md-6 col-md-offset-3 wrapper-formulario">

		{{-- Alertas --}}
	
		{{ Form::open(array('url' => '/usuarios', 'class' => 'cadastro-usuario item')) }}

			{{-- Nome --}}

			<div class="form-group">
			    {{ Form::label('nome', 'Nome: ') }}
			    {{ Form::text('nome', '', array('class' => 'form-control', 'placeholder' => 'Nome')) }}
			</div>

			{{-- E-mail --}}
			
			<div class="form-group">
			    {{ Form::label('email', 'E-mail: ') }}
			    {{ Form::text('email', '', array('class' => 'form-control', 'placeholder' => 'E-mail')) }}
			</div>
			
			<div class="form-group">

				<div class="row">
				
					{{-- Senha --}}

					<div class="col-md-6">
					
						{{ Form::label('password', 'Senha: ') }}
					    {{ Form::text('password', '', array('class' => 'form-control', 'placeholder' => 'Senha')) }}
						
					</div>

					{{-- Repetir Senha --}}

					<div class="col-md-6">
					
						{{ Form::label('repetir', 'Repetir a Senha: ') }}
					    {{ Form::text('repetir', '', array('class' => 'form-control', 'placeholder' => 'Repetir a Senha')) }}
						
					</div>
				
				</div>
			    
			</div>
			
			<button type="submit" class="btn btn-primary">Enviar</button>

		{{ Form::close() }}
	
	</div>	

@stop
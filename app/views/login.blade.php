@extends('basico')

{{-- Classe à ser aplicada ao body --}}

@section('body-class') login @stop

{{-- Conteúdo da página de Login --}}

@section('content')

	<div class="container">

		<div class="row">

			<div class="wrapper-login">
			
				<form class="form-signin" role="form">
			        <h2 class="form-signin-heading">Login</h2>
			        <label for="inputEmail" class="sr-only">E-mail</label>
			        <input type="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus>
			        <label for="inputPassword" class="sr-only">Senha</label>
			        <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required>
			        <div class="checkbox">
			            <label>
			            	<input type="checkbox" value="remember-me"> Lembrar de Mim
			            </label>
			        </div>
			        <button class="btn btn-lg btn-primary btn-block col-md-6" type="submit">Entrar</button>
			    </form>
			
			</div>
		
		</div>

    </div> <!-- /container -->

@stop
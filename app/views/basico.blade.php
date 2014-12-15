<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title> @yield('titulo') </title>
  <meta name="description" content="Descrição">
  <meta name="author" content="Filipe Molina">

  <!-- Bootstrap -->
  <link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.min.css') }}">
  <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
  <link rel="stylesheet" type="text/css" href="{{ asset('css/animate.css') }}">

  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body class="@yield('body-class')">

	@yield('content')
	
	<!-- jQuery e Bootstrap.js -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script type="text/javascript" src="{{ asset('js/bootstrap.min.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/scripts.js') }}"></script>
</body>
</html>
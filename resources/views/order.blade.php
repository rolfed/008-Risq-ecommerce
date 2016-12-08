<!-- CSRF Token -->
<meta content="ie=edge" http-equiv="x-ua-compatible">
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</meta>

@extends('layout')
  
  @section('content')

  	<div ng-controller="EcomCtrl">
		<navigation></navigation>
      	<ordermobile data-csrf-token-mobile="{{ csrf_token() }}"></ordermobile>
		<ftr></ftr>
	</div>	

  @stop


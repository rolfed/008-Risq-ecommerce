

@extends('layout')
  
  @section('content')

  	<div ng-controller="EcomCtrl">
		<navigation></navigation>
      	<ordermobile data-csrf-token-mobile="{{ csrf_token() }}"></ordermobile>
		<ftr></ftr>
	</div>	

  @stop


@extends('layout')


@section('content')
	
	<navigation></navigation>

	<div class="space-lg"></div>

	<recipe></recipe>

	<div class="space-lg"></div>

	<instagram class="hidden-xs"></instagram>

	<div class="space-lg"></div> 

	<ecom data-csrf-token="{{ csrf_token() }}"></ecom>

	<div class="space-lg"></div>

	<uimap></uimap>

	<div class="space-lg"></div> 

	<address class="hidden-xs"></address>

	<div class="space-lg"></div>

	<ftr></ftr>

@stop
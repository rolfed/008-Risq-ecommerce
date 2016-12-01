<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('index');
});


Route::post('/submit-payment', 'BillingController@submitPayment');

//Route::get('order', ['as' => 'order', 'uses' => 'BillingController@getOrder']);
//Route::post('order', ['as' => 'order-post', 'uses' => 'BillingController@postOrder']);
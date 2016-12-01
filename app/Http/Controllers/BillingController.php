<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Charge;
use Stripe\Customer;
use Stripe\Stripe;



class BillingController extends Controller
{
  
	public function submitPayment(Request $request) {

		dd($request->all());

		// validating the order

		// creating the order with stripe

		// charge the order with stripe

		// get the stripe php library via composer

	}
     
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Charge;
use Stripe\Customer;
use Stripe\Stripe;



class BillingController extends Controller
{
  
	public function submitPayment(Request $request) {

		\Stripe\Stripe::setApiKey(env('STRIPE_API_SECRET'));

		$token = $request->_token;

		dd(
			json_decode($request);
		);

		$sum = $request->total["sum"] + $request->total['shipping'] + $request->total['tax'];

		try {
			$charge = \Stripe\Charge::create(array(
				"amount" => $sum,
				"currency" => "usd",
				"source" => $token,
				"description" => "Order"
			));

			return response("You order was succesful!", 200) ->header('Content-type', 'text/plain'); 

		} catch(\Stipe\Error\Card $e) {
			// The Card has been declined

			return response("The Card has been declined", 500) ->header('Content-type', 'text/plain'); 
		}
	}	
     
}

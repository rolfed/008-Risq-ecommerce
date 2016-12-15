<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Charge;
use Stripe\Customer;
use Stripe\Stripe;
use Stripe\Event;



class BillingController extends Controller
{
  
	public function submitPayment(Request $request) {


		Stripe::setApiKey(env('STRIPE_API_SECRET'));

		$token = $request->stripeToken;
		$total = json_decode($request->total, true);
		$products = json_decode($request->products, true);
		$timeStamp = date('d-m-Y');
		$description = "";
		$price = ($total["sum"] * 100);
		$sum = ($total["sum"] + $total["shipping"] + $total["tax"]) * 100; // Stripe accepts charge in cents, but we're mostly using doubles for our currency stores.
		$totalQty = 0;
		


		foreach ($products as $product) {
			/* 
			$product.title -- this returns the title
			$product.qty -- this returns the qty without the title
			$product.price -- this return the price of the individual product
			$product.sumTotal -- this return the qty * price
			*/
    		$description .= 
    		"ORDER: " .
    		$product["qty"] 	. " " .
    		$product["title"] 	. " Product ID: " . $product["productId"] ." ". " was ordered and the total payment was $" .
    		($product["sumTotal"]/1) . ".\r\n \r\n";
    	} 

		try {
			$charge = Charge::create(array(
				"amount" => $sum,
				"currency" => "usd",
				// "source" => $token,
				"description" => $description,
				"receipt_email" => $request->email

			));


			$data = array(
				"levels" => "levels",
			);
		

			return view('order-complete', compact($data));

			//return response('It worked!');

		} catch(\Stipe\Error\Card $e) {
			// The Card has been declined
			return response('The Card has been declined', 500) ->header('Content-type', 'text/plain'); 
		}
	}
}

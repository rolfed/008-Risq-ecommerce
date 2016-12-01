<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Authenticatable, CanResetPassword;

    /**
     *  The database table used by the model.
     *
     *  @var sting
     */

    protected $table = 'users';

    /**
     *  The attributes that are mass assignable.
     *
     *  @var array
     */

    protected $fillable = ['first_name', 'last_name', 'email', 'stripe_customer_id'];

    /**
     *  The attribute excluded from the model's JSON form.
     *  @var array
     */

    protected $hidden = [];
}

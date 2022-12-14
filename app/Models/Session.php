<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class Session extends Model
{
  // use SoftDeletes;

  protected $fillable = [
    'id',
    'user_id',
    'ip_address',
    'user_agent',
    'payload',
    'last_activity'
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
    'updated_at', 'created_at'
  ];
}

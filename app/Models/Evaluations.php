<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evaluations extends Model
{
    //
    protected $table = 'evaluations';
    protected $fillable = ['title','comment'];
}

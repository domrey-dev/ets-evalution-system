<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StaffEvaluation extends Model
{
    use HasFactory;
    protected $fillable = [
        'evaluation_title',
        'evaluation_description',
        'evaluation_status',
    ];
}

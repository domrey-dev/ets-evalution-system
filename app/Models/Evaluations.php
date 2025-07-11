<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Evaluations extends Model
{
    use HasFactory;
    protected $table = 'evaluations';
    protected $fillable = ['title', 'created_by', 'updated_by'];

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
    public function evaluationSelf(): HasMany
    {
        return $this->hasMany(EvaluationSelf::class);
    }

    public function evaluationResult()
    {
        return $this->hasMany(EvaluationResult::class, 'evaluation_id');
    }
}

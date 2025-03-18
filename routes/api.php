<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\EvaluationFormController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get("/evaluation-staff", [EvaluationFormController::class, "index"]);
Route::post("/evaluation-staff", [EvaluationFormController::class, "store"]);

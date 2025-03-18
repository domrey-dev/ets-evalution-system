<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\StaffEvaluation;
class EvaluationFormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = StaffEvaluation::all();
        return response()->json($data, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'evaluation_title' => 'required',
            'evaluation_description' => 'required',
            'evaluation_status' => 'required',

        ]);
        $data = StaffEvaluation::creat([
            "evaluation_title"=>request('evaluation_title'),
            "evaluation_description"=>request('evaluation_description'),
            "evaluation_status"=>request('evaluation_status'),
        ]);
        return response()->json([$data]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

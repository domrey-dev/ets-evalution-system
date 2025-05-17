<?php

namespace App\Http\Controllers\Evaluation;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Evaluations;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EvaluationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Evaluation/Index', [
            'evaluation' => Evaluations::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Evaluation/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'title' => 'required',
            'comment' => 'required',
        ]);
        Evaluations::create($validated);

        return redirect()->route('evaluation.index')->with('success', 'Task created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Evaluations $evaluations)
    {
        //
        return Inertia::render('Department/Edit', [
            'department' => $evaluations,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Evaluations $evaluations)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'comment' => 'nullable|string',

        ]);

        $evaluations->update($validated);

        return redirect()->route('department.index')->with('success', 'Task updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

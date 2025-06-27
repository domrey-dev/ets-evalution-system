<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Department\DepartmentController;
use App\Http\Controllers\Evaluation\EvaluationController;
use App\Http\Controllers\EvaluationRoom\EvaluationRoomController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    // Dashboard - accessible to all authenticated users
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');

    // Roles routes with permissions
    Route::prefix('roles')->group(function () {
        Route::middleware(['permission:role-list'])->group(function () {
            Route::get('/', [RoleController::class, 'index'])->name('roles.index');
            Route::get('/{role}', [RoleController::class, 'show'])->name('roles.show');
        });

        Route::middleware(['permission:role-create'])->group(function () {
            Route::get('/create', [RoleController::class, 'create'])->name('roles.create');
            Route::post('/', [RoleController::class, 'store'])->name('roles.store');
        });

        Route::middleware(['permission:role-edit'])->group(function () {
            Route::get('/{role}/edit', [RoleController::class, 'edit'])->name('roles.edit');
            Route::put('/{role}', [RoleController::class, 'update'])->name('roles.update');
        });

        Route::middleware(['permission:role-delete'])->group(function () {
            Route::delete('/{role}', [RoleController::class, 'destroy'])->name('roles.destroy');
        });
    });

    // Users routes with permissions
    Route::prefix('users')->group(function () {
        Route::middleware(['permission:user-list'])->group(function () {
            Route::get('/', [UserController::class, 'index'])->name('users.index');
            Route::get('/{user}', [UserController::class, 'show'])->name('users.show');
        });

        Route::middleware(['permission:user-create'])->group(function () {
            Route::get('/create', [UserController::class, 'create'])->name('users.create');
            Route::post('/', [UserController::class, 'store'])->name('users.store');
        });

        Route::middleware(['permission:user-edit'])->group(function () {
            Route::get('/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
            Route::put('/{user}', [UserController::class, 'update'])->name('users.update');
        });

        Route::middleware(['permission:user-delete'])->group(function () {
            Route::delete('/{user}', [UserController::class, 'destroy'])->name('users.destroy');
        });
    });

    // Evaluation routes (accessible to department and user roles)
    Route::prefix('evaluations')->group(function () {
        Route::middleware(['permission:evaluation'])->group(function () {
            Route::get('/', [EvaluationController::class, 'index'])->name('evaluations.index');
            Route::get('/{evaluation}', [EvaluationController::class, 'show'])->name('evaluations.show');
        });

        Route::middleware(['permission:evaluation-form'])->group(function () {
            Route::get('/create', [EvaluationController::class, 'create'])->name('evaluations.create');
            Route::post('/', [EvaluationController::class, 'store'])->name('evaluations.store');
            Route::get('/{evaluation}/edit', [EvaluationController::class, 'edit'])->name('evaluations.edit');
            Route::put('/{evaluation}', [EvaluationController::class, 'update'])->name('evaluations.update');
            Route::delete('/{evaluation}', [EvaluationController::class, 'destroy'])->name('evaluations.destroy');
        });
    });

    // Evaluation Room routes (example - adjust permissions as needed)
    Route::resource('evaluations_room', EvaluationRoomController::class)->middleware('permission:evaluation-room-list');

    // Department routes (example - adjust permissions as needed)
    Route::resource('department', DepartmentController::class)->middleware('permission:department-list');

    // Project routes (example - adjust permissions as needed)
    Route::resource('project', ProjectController::class)->middleware('permission:project-list');
});

// Profile routes - accessible to all authenticated users
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
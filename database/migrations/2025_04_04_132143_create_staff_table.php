<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('staff', function (Blueprint $table) {
            $table->id();
            $table->integer('staff_id')->unique();
            $table->string('en_name');
            $table->string('kh_name');
            $table->string('phone_number');
            $table->enum('work_contract', ['Permanent', 'Project-based', 'Internship', 'Subcontract'])->default('Permanent');
            $table->enum('sex', ['Male', 'Female'])->default('Male');
            $table->enum('role', ['admin', 'GM', 'Manager', 'HR', 'Site Manager', 'Site Supervisor', 'Site Team Leader', 'Staff'])->default('Staff');
            $table->date('hire_date');
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staff');
    }
};

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
        Schema::create('schema_migration', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
        Schema::create('departments', function (Blueprint $table) {
            $table->id('department_id')->autoIncrement()->primary();
            $table->string('name', 100)->unique();
            $table->text('description')->nullable();
            $table->text('manager_id', 10)->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();

            // $table->foreign('manager_id')->references('employee_id')->on('employee');
        });

        Schema::create('positions', function (Blueprint $table) {
            $table->id('position_id');
            $table->string('title', 100);
            $table->string('level', 50)->nullable();
            $table->text('description')->nullable();
            $table->unsignedBigInteger('department_id')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();

            // $table->foreign('department_id')->references('department_id')->on('departments');
            $table->unique(['title', 'level', 'department_id']);
        });

        Schema::create('projects_ets', function (Blueprint $table) {
            $table->id('project_id');
            $table->string('name', 100)->unique();
            $table->text('description')->nullable();
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->string('site_manager_id', 10)->nullable();
            $table->enum('status', ['planning', 'active', 'on-hold', 'completed', 'cancelled'])->default('planning');
            $table->timestamps();

            // $table->foreign('site_manager_id')->references('employee_id')->on('employee');
        });

        Schema::create('employee', function (Blueprint $table) {
            $table->id('employee_id', 10)->primary();
            $table->string('kh_name');
            $table->string('en_name');
            $table->string('password_hash');
            $table->string('phone_number', 20)->nullable();
            $table->enum('work_contract', ['Permanent', 'Project-based', 'Internship', 'Subcontract']);
            $table->enum('sex', ['Male', 'Female']);
            $table->unsignedBigInteger('position_id')->nullable();
            $table->unsignedBigInteger('department_id')->nullable();
            $table->unsignedBigInteger('project_id')->nullable();
            $table->enum('role', ['admin', 'GM', 'Manager', 'HR', 'Site Manager', 'Site Supervisor', 'Site Team Leader', 'Staff']);
            $table->date('hire_date');
            $table->date('end_date')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
            $table->timestamp('last_login')->nullable();

            // $table->foreign('position_id')->references('position_id')->on('positions');
            // $table->foreign('department_id')->references('department_id')->on('departments');
            // $table->foreign('project_id')->references('project_id')->on('projects');
        });

        Schema::create('grade_scales', function (Blueprint $table) {
            $table->id('grade_scale_id');
            $table->decimal('min_percentage', 5, 2);
            $table->decimal('max_percentage', 5, 2);
            $table->char('grade', 2);
            $table->string('meaning', 50);
            $table->timestamps();
            $table->unique(['min_percentage', 'max_percentage']);
        });

        Schema::create('evaluation_templates', function (Blueprint $table) {
            $table->id('evaluation_template_id');
            $table->string('name', 100);
            $table->text('description')->nullable();
            $table->string('version', 10);
            $table->integer('revision')->default(1);
            $table->date('effective_date');
            $table->date('expiration_date')->nullable();
            $table->unsignedBigInteger('position_id')->nullable();
            $table->unsignedBigInteger('department_id')->nullable();
            $table->boolean('is_active')->default(true);
            $table->string('created_by', 10);
            $table->timestamps();

            //$table->foreign('position_id')->references('position_id')->on('positions');
            //$table->foreign('department_id')->references('department_id')->on('departments');
            //$table->foreign('created_by')->references('employee_id')->on('employee');
            $table->unique(['name', 'version']);
        });

        Schema::create('evaluation_types', function (Blueprint $table) {
            $table->id('evaluation_type_id');
            $table->string('name', 50)->unique();
            $table->text('description')->nullable();
            $table->decimal('weight', 5, 2)->default(100.0);
            $table->integer('order_number');
            $table->timestamps();
        });

        Schema::create('evaluation_criteria_categories', function (Blueprint $table) {
            $table->id('category_id');
            $table->string('name', 100);
            $table->text('description')->nullable();
            $table->unsignedBigInteger('evaluation_template_id');
            $table->decimal('weight', 5, 2)->default(100.0);
            $table->integer('order_number');
            $table->timestamps();

            //$table->foreign('evaluation_template_id')->references('evaluation_template_id')->on('evaluation_templates');
            //$table->unique(['evaluation_template_id', 'name']);
        });

        Schema::create('evaluation_criteria', function (Blueprint $table) {
            $table->id('criteria_id');
            $table->unsignedBigInteger('category_id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->decimal('weight', 5, 2)->default(1.0);
            $table->integer('min_score')->default(1);
            $table->integer('max_score')->default(5);
            $table->integer('order_number');
            $table->timestamps();

            //$table->foreign('category_id')->references('category_id')->on('evaluation_criteria_categories');
            //$table->unique(['category_id', 'name']);
        });

        Schema::create('evaluation_periods', function (Blueprint $table) {
            $table->id('period_id');
            $table->string('name', 100)->unique();
            $table->date('start_date');
            $table->date('end_date');
            $table->date('submission_deadline');
            $table->enum('status', ['upcoming', 'active', 'closed'])->default('upcoming');
            $table->string('created_by', 10);
            $table->timestamps();

            //$table->foreign('created_by')->references('employee_id')->on('employee');
        });

        Schema::create('evaluations', function (Blueprint $table) {
            $table->id('evaluation_id');
            $table->string('employee_id', 10);
            $table->string('evaluator_id', 10);
            $table->unsignedBigInteger('template_id');
            $table->unsignedBigInteger('period_id');
            $table->unsignedBigInteger('evaluation_type_id');
            $table->decimal('total_score', 5, 2)->nullable();
            $table->unsignedBigInteger('grade_id')->nullable();
            $table->enum('status', ['NOT_STARTED', 'SELF_EVALUATION_PENDING', 'STAFF_EVALUATION_PENDING', 'FINAL_EVALUATION_PENDING', 'COMPLETED'])->default('NOT_STARTED');
            $table->date('evaluation_date')->nullable();
            $table->date('due_date');
            $table->timestamp('submission_date')->nullable();
            $table->text('overall_comment')->nullable();
            $table->timestamps();

//            $table->foreign('employee_id')->references('employee_id')->on('employee');
//            $table->foreign('evaluator_id')->references('employee_id')->on('employee');
//            $table->foreign('template_id')->references('evaluation_template_id')->on('evaluation_templates');
//            $table->foreign('period_id')->references('period_id')->on('evaluation_periods');
//            //$table->foreign('evaluation_type_id')->references('evaluation_type_id')->on('evaluation_types');
            //$table->foreign('grade_id')->references('grade_scale_id')->on('grade_scales');
            //$table->unique(['employee_id', 'evaluator_id', 'template_id', 'period_id', 'evaluation_type_id']);
        });

        Schema::create('evaluation_responses', function (Blueprint $table) {
            $table->id('response_id');
            $table->unsignedBigInteger('evaluation_id');
            $table->unsignedBigInteger('criteria_id');
            $table->integer('score');
            $table->text('comments')->nullable();
            $table->timestamps();

            //$table->foreign('evaluation_id')->references('evaluation_id')->on('evaluations');
            //$table->foreign('criteria_id')->references('criteria_id')->on('evaluation_criteria');
            //$table->unique(['evaluation_id', 'criteria_id']);
        });

        Schema::create('evaluation_comments', function (Blueprint $table) {
            $table->id('comment_id');
            $table->unsignedBigInteger('evaluation_id');
            $table->string('commenter_id', 10);
            $table->text('comment');
            $table->timestamps();

            //$table->foreign('evaluation_id')->references('evaluation_id')->on('evaluations');
            //$table->foreign('commenter_id')->references('employee_id')->on('employee');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schema_migration');
        Schema::dropIfExists('evaluation_comments');
        Schema::dropIfExists('evaluation_responses');
        Schema::dropIfExists('evaluations');
        Schema::dropIfExists('evaluation_periods');
        Schema::dropIfExists('evaluation_criteria');
        Schema::dropIfExists('evaluation_criteria_categories');
        Schema::dropIfExists('evaluation_types');
        Schema::dropIfExists('evaluation_templates');
        Schema::dropIfExists('grade_scales');
        Schema::dropIfExists('employee');
        Schema::dropIfExists('projects_ets');
        Schema::dropIfExists('positions');
        Schema::dropIfExists('departments');
    }
};

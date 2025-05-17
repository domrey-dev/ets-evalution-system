<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $totalPendingTasks = Task::query()
            ->where('status', 'pending')
            ->count();
        $myPendingTasks = Task::query()
            ->where('status', 'pending')
            ->where('assigned_user_id', $user->id)
            ->count();

        $totalProgressTasks = Task::query()
            ->where('status', 'in_progress')
            ->count();
        $myProgressTasks = Task::query()
            ->where('status', 'in_progress')
            ->where('assigned_user_id', $user->id)
            ->count();


        $totalCompletedTasks = Task::query()
            ->where('status', 'completed')
            ->count();
        $myCompletedTasks = Task::query()
            ->where('status', 'completed')
            ->where('assigned_user_id', $user->id)
            ->count();

        $activeTasks = Task::query()
            ->whereIn('status', ['pending', 'in_progress'])
            ->where('assigned_user_id', $user->id)
            ->limit(10)
            ->get();

        $position = [
            'Software Engineer',
            'Sales Executive',
            'Marketing Manager',
            'HR Manager',
            'Finance Analyst',
            'Customer Support Specialist',
            'IT Support',
            'Graphic Designer'
        ];

        $departments = [
            'Engineering',
            'Sales',
            'Marketing',
            'Human Resources',
            'Finance',
            'Customer Support',
            'Information Technology'
        ];

        $gradeDistribution = [
            'A' => 10,
            'B' => 20,
            'C' => 30,
            'D' => 25,
            'E' => 15
        ];

        $monthlyPerformance = [
            'January' => 800,
            'February' => 750,
            'March' => 900,
            'April' => 852,
            'May' => 955,
            'June' => 700,
            'July' => 850,
            'August' => 900,
            'September' => 805,
            'October' => 995,
            'November' => 890,
            'December' => 990
        ];

        $projectPerformance = [
            'January' => 800,
            'February' => 750,
            'March' => 900,
            'April' => 852,
            'May' => 955,
            'June' => 700,
        ];

        $departmentPerformance = [
            'January' => 400,
            'February' => 300,
            'March' => 600,
            'April' => 500,
            'May' => 400,
            'June' => 700,
        ];

        $monthOptions = [
            ['value' => '', 'label' => 'Select Month'],
            ['value' => 'jan', 'label' => 'January'],
            ['value' => 'feb', 'label' => 'February'],
            ['value' => 'mar', 'label' => 'March'],
            ['value' => 'apr', 'label' => 'April'],
            ['value' => 'may', 'label' => 'May'],
            ['value' => 'jun', 'label' => 'June'],
            ['value' => 'jul', 'label' => 'July'],
            ['value' => 'aug', 'label' => 'August'],
            ['value' => 'sep', 'label' => 'September'],
            ['value' => 'oct', 'label' => 'October'],
            ['value' => 'nov', 'label' => 'November'],
            ['value' => 'dec', 'label' => 'December']
        ];

        $gradeColorMap = [
            'A' => '#0088FE',
            'B' => '#00C49F',
            'C' => '#FFBB28',
            'D' => '#FF8042',
            'E' => '#9966FF',
            'F' => '#FF0000'
        ];
        $formattedGradeData = [];
        foreach ($gradeDistribution as $grade => $value) {
            $formattedGradeData[] = [
                'name' => $grade,
                'value' => $value,
                'color' => $gradeColorMap[$grade] ?? '#CCCCCC'
            ];
        }

        $activeTasks = TaskResource::collection($activeTasks);
        return inertia(
            'Dashboard',
            compact(
                'totalPendingTasks',
                'myPendingTasks',
                'totalProgressTasks',
                'myProgressTasks',
                'totalCompletedTasks',
                'myCompletedTasks',
                'activeTasks',
                'position',
                'departments',
                'gradeDistribution',
                'monthlyPerformance',
                'projectPerformance',
                'departmentPerformance',
                'monthOptions',
                'formattedGradeData'
            )
        );
    }
}

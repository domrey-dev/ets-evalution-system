<?php

namespace Database\Seeders;

use App\Constants\ConstUserRole;
use App\Models\Project;
use App\Models\Staff;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\StaffEnum;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'id' => 1,
            'name' => 'ETS Admin',
            'email' => 'admin@gmail.com',
            'role' => ConstUserRole::ADMIN,
            'password' => bcrypt('password'),
            'email_verified_at' => time()
        ]);
        User::factory()->create([
            'id' => 2,
            'name' => 'ETS Department',
            'email' => 'department@gmail.com',
            'role' => ConstUserRole::DEPARTMENT,
            'password' => bcrypt('password'),
            'email_verified_at' => time()
        ]);
        User::factory()->create([
            'id' => 3,
            'name' => 'ETS User',
            'email' => 'user@gmail.com',
            'role' => ConstUserRole::USER,
            'password' => bcrypt('password'),
            'email_verified_at' => time()
        ]);

        // Seed departments
        $this->call(DepartmentSeeder::class);

        // Create projects with tasks
        // Change these numbers as needed:
        $numberOfProjects = 15;  // Change this number
        $tasksPerProject = 8;    // Change this number
        
        Project::factory()
            ->count($numberOfProjects)
            ->hasTasks($tasksPerProject)
            ->create();

        $this->call([
            PermissionSeeder::class,
        ]);

        $this->command->info("Created {$numberOfProjects} projects with {$tasksPerProject} tasks each.");
        $this->command->info("Total tasks: " . ($numberOfProjects * $tasksPerProject));
    }
}

<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Staff;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            'name' => 'Zura',
            'email' => 'zura@example.com',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => time()
        ]);
        User::factory()->create([
            'id' => 2,
            'name' => 'ETS',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin123'),
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
            
        $this->command->info("Created {$numberOfProjects} projects with {$tasksPerProject} tasks each.");
        $this->command->info("Total tasks: " . ($numberOfProjects * $tasksPerProject));
    }
}

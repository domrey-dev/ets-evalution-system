<?php

namespace App\Providers;

<<<<<<< HEAD
=======
use Illuminate\Support\Facades\Vite;
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
<<<<<<< HEAD
        //
=======
        Vite::prefetch(concurrency: 3);
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
    }
}

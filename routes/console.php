<?php

<<<<<<< HEAD
=======
use Illuminate\Foundation\Console\ClosureCommand;
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
<<<<<<< HEAD
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();
=======
    /** @var ClosureCommand $this */
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777

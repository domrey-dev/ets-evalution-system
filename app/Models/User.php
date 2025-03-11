<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
<<<<<<< HEAD
use Illuminate\Contracts\Auth\MustVerifyEmail;
=======
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

<<<<<<< HEAD
class User extends Authenticatable implements MustVerifyEmail
{
=======
class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
<<<<<<< HEAD
     * @var array<int, string>
=======
     * @var list<string>
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
     */
    protected $fillable = [
        'name',
        'email',
        'password',
<<<<<<< HEAD
        'email_verified_at'
=======
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
<<<<<<< HEAD
     * @var array<int, string>
=======
     * @var list<string>
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}

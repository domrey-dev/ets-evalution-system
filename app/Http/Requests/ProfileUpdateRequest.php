<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
<<<<<<< HEAD
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
=======
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
<<<<<<< HEAD
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
=======
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique(User::class)->ignore($this->user()->id),
            ],
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
        ];
    }
}

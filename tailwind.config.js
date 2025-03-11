import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
    // darkMode: 'class', deible daskmode
=======
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
<<<<<<< HEAD
        './resources/js/**/*.jsx',
=======
        './resources/js/**/*.tsx',
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};

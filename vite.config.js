import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
<<<<<<< HEAD
            input: 'resources/js/app.jsx',
=======
            input: 'resources/js/app.tsx',
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
            refresh: true,
        }),
        react(),
    ],
});

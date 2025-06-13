#!/bin/bash

# Exit on error
set -e

# Install dependencies
# composer install --no-interaction --prefer-dist --optimize-autoloader

# Copy .env if not exists
if [ ! -f .env ]; then
    cp .env.example .env
fi

# Generate application key
php artisan key:generate --force

# Run migrations
php artisan migrate --seeder --force

echo "Migrations finished...."
# Start Laravel development server
# php artisan serve --host=0.0.0.0 --port=8000
chown -R $USER:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

exec "$@"

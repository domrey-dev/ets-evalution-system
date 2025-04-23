#!/bin/bash

CONTAINER_NAME=laravel_app

echo "🔑 Generating Laravel app key..."
docker exec -it $CONTAINER_NAME php artisan key:generate

echo "📜 Listing Laravel routes..."
docker exec -it $CONTAINER_NAME php artisan route:list

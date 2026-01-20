#!/bin/bash
echo "🔄 Restoring from Git..."

# Restore package files
git checkout HEAD -- package.json package-lock.json

# Clean up
sail down
rm -rf node_modules
docker volume prune -f

# Reinstall correctly
sail up -d --build
sail npm install
sail npm run build

echo "✅ Done! Run: sail npm run dev"
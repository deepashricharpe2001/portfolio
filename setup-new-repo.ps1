# Setup Fresh Git Repository
# This script removes old git history and creates a fresh repository

Write-Host "Step 1: Removing old git history..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .git -ErrorAction SilentlyContinue

Write-Host "`nStep 2: Initializing new repository..." -ForegroundColor Yellow
git init

Write-Host "`nStep 3: Configuring git user..." -ForegroundColor Yellow
git config user.name "Deepashri Charpe"
git config user.email "deepashricharpe0@gmail.com"

Write-Host "`nStep 4: Adding all files..." -ForegroundColor Yellow
git add .

Write-Host "`nStep 5: Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit - Deepashri Charpe's Data Science Portfolio"

Write-Host "`n✅ Repository created successfully!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub: https://github.com/new"
Write-Host "2. Name it: portfolio"
Write-Host "3. Then run these commands:"
Write-Host "   git remote add origin https://github.com/deepashricharpe2001/portfolio.git"
Write-Host "   git branch -M main"
Write-Host "   git push -u origin main"



// Create and upload new git repository
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/RazShamir/game_arcade.git
git push -u origin main

// upload changes for existing repository
git add .
git commit -m "our comments for the commit"
git push --force
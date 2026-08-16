git add .
git commit -m "Complete Naimat Bazaar Next.js setup with public store and admin structure"
git push origin main



hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
---------------------->
git pull origin main --rebase
git push origin main



git stash
git pull origin main --rebase
git stash pop
git add .
git commit -m "Merge remote changes and update project structure"
git push origin main



git add src/git.md
git commit -m "Update git.md documentation"
git pull origin main --rebase
git push origin main





git add .
git commit -m "Fix default export in admin page"
git push origin main
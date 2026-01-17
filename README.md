# BearclawVisions

Github pages website

## Deploying
https://learnvue.co/articles/deploy-vue-to-github-pages
### 1. Force add the ignored dist folder to the git index
git add -f dist

### 2. Commit it temporarily
git commit -m "Temp: Prepare for deployment"

### 3. Push the subtree (which runs the split)
git subtree push --prefix dist origin gh-pages

### 4. Remove the commit but keep your files
git reset HEAD~1


git push origin `git subtree split --prefix dist main`:gh-pages --force
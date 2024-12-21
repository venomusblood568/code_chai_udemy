# GIT ONE SHOT

> git --version

> git status

> ls -la => this will show all the hidden folder as well

> git init

> git add __file name__ 

> git add .

> git commit -m "Your message"

> git config --global core.editor "code --wait"

> git log

> git log --online

> git .gitignore

> TIP => USE gitignore generator

> pwd

> cat .gitconfig

> git branch _name_

> git branch

> git checkout _name_ => this will switch branch from master to new

> git switch _name_ => same thing as above

> git switch -c _name_ => create a branch and move there

> git checkout -b _name_ => same as above

> TIP => we will be on main/master then merge the other branch

> git merge _name_ 

> git branch -d _name_ => for deleting the branch

> git diff => show's diff between same file but at two diff point

> git diff --staged

> git diff branch_code2 branch_code1

> git diff branch_code2..branch_code1 

> above both syntax works same

> git stash => for changing the branch without comiting

> git stash pop => once you come back to the to the branch you were woking to get the files back you have to apply this command

> git stash list => for also seeing all the files

> git stash apply => for apply changes and keep them in stash

> git reflog => to revert to previous branch

> git restore _filename_ => get back to last commit

> git rebase master => use from other branch to main branch


# GITHUB 

> git remote -

> git remote add _name_ _url_ => we have seen example for this on github already

> git remote rename oldname newname

> git remote remove name

> git push _remote_ _branch_

> git push origin main

> git push _remote_

> git push -u origin main
 
NOTE => -u setup an upstream that allow you to run future command

> git fetch => get info but don't put in my work

> get pull => get info & add it in my work

> git pull = get fetch + get merge

> git pull origin main


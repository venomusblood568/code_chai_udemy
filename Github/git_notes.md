# Git and GitHub Cheat Sheet

## **Git Commands**

### **Basic Commands**
- `git --version`  
  Check the installed Git version.

- `git status`  
  Show the status of your working directory.

- `ls -la`  
  Display all files, including hidden ones.

- `pwd`  
  Print the current working directory.

### **Initialize and Add Files**
- `git init`  
  Initialize a new Git repository.

- `git add <file_name>`  
  Stage a specific file for commit.

- `git add .`  
  Stage all changes for commit.

### **Commit Changes**
- `git commit -m "Your message"`  
  Commit staged changes with a message.

- `git config --global core.editor "code --wait"`  
  Set VS Code as the default Git editor.

### **View Logs**
- `git log`  
  Show commit history.

- `git log --oneline`  
  Show a concise commit history.

### **Ignore Files**
- `.gitignore`  
  Define untracked files to ignore. Use a [gitignore generator](https://www.toptal.com/developers/gitignore).

### **Branches**
- `git branch <name>`  
  Create a new branch.

- `git branch`  
  List all branches.

- `git checkout <name>` or `git switch <name>`  
  Switch to an existing branch.

- `git switch -c <name>` or `git checkout -b <name>`  
  Create a new branch and switch to it.

- `git merge <name>`  
  Merge the specified branch into the current branch.

- `git branch -d <name>`  
  Delete the specified branch.

### **Diff Commands**
- `git diff`  
  Show differences between working files and the index.

- `git diff --staged`  
  Show differences between staged files and the last commit.

- `git diff branch2 branch1` or `git diff branch2..branch1`  
  Compare two branches.

### **Stash Commands**
- `git stash`  
  Stash uncommitted changes.

- `git stash pop`  
  Apply the last stash and remove it from the stash list.

- `git stash list`  
  View all stashes.

- `git stash apply`  
  Apply a specific stash without removing it.

### **Restore and Revert**
- `git reflog`  
  Show the history of branch changes.

- `git restore <filename>`  
  Revert a file to its last committed state.

- `git rebase master`  
  Rebase the current branch onto master.

## **GitHub Commands**

### **Remote Repositories**
- `git remote -v`  
  Show remote repositories.

- `git remote add <name> <url>`  
  Add a remote repository.

- `git remote rename <oldname> <newname>`  
  Rename a remote repository.

- `git remote remove <name>`  
  Remove a remote repository.

### **Push and Pull**
- `git push <remote> <branch>`  
  Push changes to the specified remote and branch.

- `git push -u origin main`  
  Push changes and set upstream tracking for future commands.

- `git fetch`  
  Fetch updates from the remote without applying them.

- `git pull`  
  Fetch updates and apply them. Equivalent to `git fetch` + `git merge`.

- `git pull origin main`  
  Pull changes from the main branch.

---

## **Examples**
### Example: Initialize a Repository and Commit Files
```bash
mkdir my_project
cd my_project
git init
echo "# My Project" > README.md
git add README.md
git commit -m "Initial commit"
```

### Example: Create and Merge a Branch
```bash
git branch feature-branch
git switch feature-branch
echo "New feature" > feature.txt
git add feature.txt
git commit -m "Add new feature"
git switch main
git merge feature-branch
git branch -d feature-branch
```


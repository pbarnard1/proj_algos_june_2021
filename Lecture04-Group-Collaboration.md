# Using GitHub for group projects

## Reminders about projects: 

- If you're in the ACCEL program, solo project presentations will start at the *office hour* time of 4 PM on Monday, June 21 - so that's an hour earlier from when lecture starts!  We'll split into two rooms - I'll helm the main room, while Andrew will lead the breakout room.  Both will be recorded for viewing later if you want to watch all the presentations!
- Also if you're in the ACCEL program, make sure you have your groups formed if you haven't already!  Group project proposals are due Wednesday, June 23!

## How to collaborate on GitHub:

Handy video to watch from YouTube: [video](https://www.youtube.com/watch?v=MnUd31TvBoU).  Note that you likely will need to type "main" instead of "master", depending on your GitHub account.

Here are some other references you can use for group projects:
- [Starting a group project on GitHub](https://www.digitalcrafts.com/blog/learn-how-start-new-group-project-github)
- [Collaborating on GitHub](https://www.atlassian.com/git/tutorials/syncing)

The owner of the repository will start the repo on GitHub and on their machine.  Then the owner must add collaborators to their GitHub repo.  Once added, group members can start working on the project by cloning from the repository.

Here is a basic layout (the branching part might vary based on how your group will proceed):
```js
git clone remote_link // (Remote link format: https://github.com/user_name/repo_name.git) - first time only to get a copy of the project
git checkout -b new_branch_name // Go to a NEW branch on your machine
```

Now add/edit stuff accordingly:
```js
git add . // Staging your changes
git commit -m "message here" // Commit your changes
git push -u origin your_local_branch_name // same as new_branch_name
```
Make a pull request - better safe than sorry even if there isn't a conflict.

Once changes are approved and merged, go back to your main/master branch on your machine:
```js
git checkout main (or master) // Switch back to your main/master branch on your machine
```

Now pull latest changes from remote repository:
```js
git pull origin main (or master)
```

From here you can either: A) go back to your branch from before, OR B) delete your old branch and start a new one.

### Option A - reuse a branch:

Go back to your branch:
```js
git checkout your_branch_from_before // Notice there's no "-b" here
```

By going back to your old branch, you MUST bring the latest stuff in:
```js
git merge main (or master)
```

### Option B - delete, then make a new branch:
If you choose to delete your branch, you can do the following:
```js
git branch -d branch_to_delete
```

Then you can create a new branch on your machine:
```js
git checkout -b new_branch
```
If you delete a branch and then go to a new branch, you shouldn't have to do any merging.  More info on deleting branches can be found [here](https://www.git-tower.com/learn/git/faq/delete-local-branch/).

**Regardless of which option you pick,** now you can work on your branch with the newest stuff, then add accordingly.

**Merge conflicts** are a commonly encountered problem that comes up.  They occur when GitHub can't resolve differences between code easily.  When you have one, you should talk with the owner of the repo and discuss how to proceed.

I advise you not to use "git fork"; you should use "git clone".  This becomes especially important if you want to get a repo online that you want to experiment with on your own.

At the start of every day/session, **you should pull the most recent changes to your main/master branch, then merge those into the branch you're working on.**  At the end of the day/session, you should push *your* branch to GitHub, regardless of if your features are done.  Remember that you can push as often as you need before you do a pull request.  And if your proposed changes are rejected, you can still continue to push as needed until your changes are accepted and then merged into the main/master branch on the GitHub repo.

## Tools you might use for organizing tasks on GitHub on at a future job:
Software used for managing tasks (feel free to add suggestions!):
- Trello
- Asana

One type of philosophy used for managing projects:
[Agile development](https://agilealliance.org/agile101)
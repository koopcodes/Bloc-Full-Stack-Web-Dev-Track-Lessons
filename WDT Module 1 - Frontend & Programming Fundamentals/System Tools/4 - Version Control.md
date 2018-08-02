**Version Control Questions**

[My Pull Request](https://github.com/Bloc/hall_of_fame/pull/100)
There are 99 pull requests pending since the last merge in January.  Is there any chance someone could process those so we could see our names on in the hall_of_fame?

> Why would you want to version control your code?

A: Because version control lets you:
* Collaborate.  Everyone on the team can work absolutely freely on any file at any time with no question where the latest version of a file or the whole project is, and merge all the changes into a single version
* Store different versions. Properly named and stored so easy to find, as well as being able to tell the differences between versions
* Restore previous versions. No matter how bad you mess things up you can always get back to where you were!
* DIFF. Alluded to above, seeing a short desription of what has changed helps you understand how the project has evolved between versions
* Backup.  Every team member has a full version on their HD, so even if the central remote repository fails and your own HD as well all you need for recovery is one of your teammates local Git repository
* Branch/Fork so you can experiement with changes while minimizing the chance unstable code gets merged into the main code base

> Where can you find additional information about the Git commands available?

* I usually start at [GitHub](https://help.github.com/articles/git-and-github-learning-resources/) for general help
* For commands in specific I had been using [Atlassian](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html) until I found the below VVV
* [Roger Dudler's Walkthrough](http://rogerdudler.github.io/git-guide/) is not just really helpful with the syntax of the commands but to illustrate the order they are used in the work flow.  And I like its graphical presentation
* I also fell into using the [Tower website](https://www.git-tower.com/windows/?utm_source=learn-website&utm_medium=navigation) as a Git command reference, and their [Git Cheatsheet](https://www.git-tower.com/learn/cheat-sheets/git) is very helpful

> Why are branches useful?

A: Branching is a way to request a brand new working directory, staging area, and project history so one is free to make changes witout interfering with others working on different issues or contaminating the master code base with changes that may not be ready for primetime.  Creating branches in Git is very quick and lightweight so should be used often: Every new feature, every bug fix, every change no matter how big or how small, you should start a new branch to encapsulate your changes. It will allow you to keep the future code history cleaner and allow one to pin point what changes were made and when

> What is the purpose of a remote?

A: Having a remote repository is essential to collaboration unless coders are going to take turns using the same machine at different times. Whether it's on an internal network or over the internet we need these remote repositories (repositories other than the one on your local disk) which you can push your changes into (so that other people can see them) or pull from (so that you can get others changes)

> Why is it important to track changes to the upstream repository after you create your initial fork?

You will want to track the changes in the upstream repo if you plan on doing anything more than just a tiny quick fix. Keeping track of the upstream will reduce merge conflicts and wasting time on features or bug fixes that may not work or be necessary anymore because of changes in the upstream code base

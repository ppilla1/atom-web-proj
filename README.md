# atom-web-proj
Atom Ide web project created by Prashant Pillai(prashantpillai108@gmail.com)

# Git SSH issue solution
https://github.com/akonwi/git-plus/issues/224

For private repo which need privilege to pull, should use either ssh address or put username&password in https address:

    git@github.com:{username}/repo.git
    https://{username}:{password}@github.com/{username}/repo.git

Note: if your put username&password in url, and the password contains '@' character, use '%40' instead.

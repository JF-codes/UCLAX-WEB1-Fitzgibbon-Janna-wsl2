#!/bin/bash

###################
# Update Git Settings
###################
echo "$globalScriptTitle Git: Update Author Name and Email"
git config --global user.name "$ufname $ulname"
git config --global user.email "$uemail"

echo "$globalScriptTitle Git: Use VS Code as Git Editor"
git config --global core.editor "code --wait"

echo "$globalScriptTitle Git: Set git default branch back to the original \"master\" branch. In case they tried to change it to main; which is silly."
git config --global init.defaultbranch "master"

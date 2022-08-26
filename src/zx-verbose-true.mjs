import "zx/globals";

await $`git checkout $(echo "$(echo "$(git --no-pager branch -vv)" | fzf +m)" | awk '{print $1}' | sed "s/.* //")`;

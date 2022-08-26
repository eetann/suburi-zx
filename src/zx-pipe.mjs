import "zx/globals";

// branches=$(git --no-pager branch -vv) &&
// branch=$(echo "$branches" | fzf +m) &&
// git checkout $(echo "$branch" | awk '{print $1}' | sed "s/.* //")
const branches = await $`git --no-pager branch -vv`;
const branch = await $`echo "${branches}"`.pipe($`fzf +m`);
const branchName = await $`echo "${branch}"`
  .pipe($`awk '{print $1}'`)
  .pipe($`sed "s/.* //"`);
await $`git checkout ${branchName}`;

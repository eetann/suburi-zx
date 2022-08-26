import 'zx/globals'

await $`ls`
// await $`ghq list | fzf --preview 'bat --color=always --style=header,grid --line-range :100 $(ghq root)/{}/README.*'`

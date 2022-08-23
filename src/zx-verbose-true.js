import 'zx/globals'

await $`ls`
await $`tree -a -I '.git|node_modules|dist' --charset unicode`
await $`jq -r '.scripts | to_entries | .[] | .key + " = " + .value' package.json 2>/dev/null || echo ''`

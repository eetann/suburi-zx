このMarkdownファイルのコードブロックの内容が実行できる。

```js
// コードブロックの言語指定はjsにした
echo`directory: ${__dirname}`
echo`finename: ${__filename}`
echo(chalk.bgGreenBright.black("Hey, Kerry!!!"))
await $`ls`
```

```
console.log('言語指定をしていないコードブロック')
console.log('実行されないよ！')
```

```bash
# コードブロックの言語指定はbashにした
git --no-pager branch -vv
```

別のコードブロックの変数も使える。

```js
const bar = 'Kerry'
const foo = 'HeyHey'
```

```js
echo`${foo}, ${bar}`
```

このMarkdownファイルのコードブロックの内容が実行できる。

```js
// コードブロックの言語指定はjsにした
echo`directory: ${__dirname}`
echo`finename: ${__filename}`
await $`ls`
```

# 言語指定
```
console.log('言語指定をしていないコードブロック')
console.log('実行されないよ！')
```

```bash
# コードブロックの言語指定はbashにした
echo "bashbashbash"
```

# 別のコードブロックの変数
別のコードブロックの変数も使える。

```js
const bar = 'Kerry'
const foo = 'HeyHey'
```

```js
echo`${foo}, ${bar}`
```

import "zx/globals";

// npx zx src/zx-argv.mjs -hb --name="Kerry" aaaaa bbbb ccccc
if (argv.h) {
  echo`hoge hoge`
}
if (argv.f) {
  echo`foo`
}
if (argv.b) {
  echo`bar`
}

let name = argv.name;
echo`Hello, ${name}`
echo(chalk.underline.bgYellow.black("引数全部表示する"))
echo(argv._)

import "zx/globals";

let name = await question('名前を入力してね:')
echo`Hello, ${name}`
echo(chalk.greenBright(`Hey, ${name}!`))
echo(chalk.bgGreenBright.black(`Oh, ${name}!`))
echo(chalk.underline(`ここはテストに出ますよ、${name}`))

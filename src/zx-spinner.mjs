import "zx/globals";
import { spinner } from 'zx/experimental'

await spinner('working...', () => $`sleep 3`)
echo(chalk.bgGreen.black("Finish!"))

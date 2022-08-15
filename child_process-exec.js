import { exec } from "child_process";

exec('ls -al', (err, stdout, stderr) => {
  console.log(stdout)
})

import chalk from 'chalk';
import { exec } from 'child_process';

let execute = (command) => {
    exec(command, (err, stdout, stderr) => {
        if (err) {
            (console.log(chalk.italic.hex('#FF2929').underline(`'${command}' - unsuccess \n ${err} \n`)));
        } else {
            console.log(chalk.bold.green(`'${command}' - success \n`));
        }

        if (stdout) console.log(chalk.hex('#FAFF3D')(`result command console: ${stdout}`));
        if (stderr) console.log(chalk.hex('#FD42B9')(`error in command console: ${stderr}`));
    })
};

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

(() => {
    let arg = process.argv[2];
    let example;
    if (!arg) {
        console.log('this script requires arguments: example1 | example2 | ... | example10');
        return;
    } else if (arg === 'example1') {
        example = [
            'git init',
            'node ./fH/fileHandler.js "git init"',
            'git add .',
            'git commit -m "some"',
            'node ./fH/fileHandler.js "git commit -m \'some\'"',
            'git branch br2',
            'node ./fH/fileHandler.js "git branch br2"',
            'git checkout br2',
            'node ./fH/fileHandler.js "git checkout br2"',
            'git add .',
            'git commit -m "some2"',
            'node ./fH/fileHandler.js "git commit -m \'some2\'"',
        ];
    }

    example.forEach((el, ind) => setTimeout(() => {
        execute(el);
    }, 1500 * ind));
})();

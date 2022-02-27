import chalk from 'chalk';
import { exec } from 'child_process';
import fs from 'fs';


let execute = (command) => {
    exec(command, (err, stdout, stderr) => {
        if (err) {
            (console.log(chalk.italic.hex('#FF2929').underline(`'${command}' - unsuccess \n ${err} \n`)));
        } 
        else {
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
    } else if (arg === 'example2') {
        example = [
            'git init',
            'node ./fH/fileHandler.js "git init"',
            'git add .',
            'git commit -m "initial commit"',
            'git branch feature1',
            'git checkout feature1',
            'node ./fH/fileHandler.js "git checkout feature1"',
            'git add .',
            'git commit -m "git commit - checkout feature1"',
            'node ./fH/fileHandler.js "added feature"',
            'git add .',
            'git commit -m "added feature1"',
            'git checkout master',
            'node ./fH/fileHandler.js "git checkout master"',
            'node ./fH/fileHandler.js "update master"',
            'git add .',
            'git commit -m "update master"'
        ];
    } else if (arg === 'example3') {
        
    } else if (arg === 'example4') {
        
    }

    clearGit();

    example.forEach((el, ind) => setTimeout(() => {
        execute(el);
    }, 1500 * ind));
})();


function clearGit() {
    fs.rmSync('./.git', { recursive: true, force: true }, (err) => {
        if(err) console.log(err)
        else console.log('file deleted successfully');
    })
};

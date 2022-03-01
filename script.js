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
        example = [ // нужен анализатор, который будет формировать строчку node ./fH/fileHandler.js .....
            'git init',
            'git add .',
            'git commit -m "initial commit"',
            'git branch feature1',
            'git checkout feature1',
            'git add .',
            'git commit -m "git commit - checkout feature1"',
            'git add .',
            'git commit -m "added feature1"',
            'git checkout master',
            'git add .',
            'git commit -m "update master"'
        ];
    } else if (arg === 'example3') {
        
    } else if (arg === 'example4') {
        
    }

    clear();

    log(example).forEach((el, ind) => setTimeout(() => {
        execute(el);
    }, 1500 * ind));
})();


function log(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
        let words = arr[i].split(' ');
        if (
            words.includes('add') ||
            words.includes('branch') ||
            i + 1 === arr.length ||
            arr[i+1].includes('checkout') || 
            arr[i+1].includes('branch')
            ) {
            continue;
        } res.push(`node ./fH/fileHandler.js "${arr[i]}"`);
    }

    return res;
}


function clear() {
    fs.rmSync('./.git', { recursive: true, force: true }, (err) => {
        if(err) console.log(err)
    })

    fs.rmSync('./fH/gitData.txt', { recursive: true, force: true }, (err) => {
        if(err) console.log(err)
    })
};

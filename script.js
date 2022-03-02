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
    let [arg, time] = process.argv.slice(2);
    let example;
    if (!arg) {
        console.log('this script requires arguments: example1 | example2 | ... | example10');
        return;
    } else if (arg === 'example1') {
        example = [
            'git init',
            'git add .',
            'git commit -m "some"',
            'git branch br2',
            'git checkout br2',
            'git add .',
            'git commit -m "some2"',
        ];
    } else if (arg === 'example2') {
        example = [
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
        example = [
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
            'git commit -m "update master after f1"',

            'git branch feature2',
            'git checkout feature2',
            'git add .',
            'git commit -m "git commit - checkout feature2"',
            'git add .',
            'git commit -m "create recursion in feature2"',
            'git add .',
            'git commit -m "update recursion in feature2"',

            'git checkout master',
            'git add .',
            'git commit -m "update master after f2"',

            'git branch feature3',
            'git checkout feature3',
            'git add .',
            'git commit -m "git commit - checkout feature3"',
            'git add .',
            'git commit -m "create b-tree in feature3"',
            'git add .',
            'git commit -m "update b-tree in feature3"',
            'git add .',
            'git commit -m "complete b-tree in feature3"',

            'git checkout master',
            'git add .',
            'git commit -m "update master after f3"'
        ];
    } else if (arg === 'example4') {
        example = [
            'git init',
            'git add .',
            'git commit -m "initial commit"',

            'git branch feature1',
            'git checkout feature1',
            'git add .',
            'git commit -m "git commit - checkout feature1"',
            'git add .',
            'git commit -m "added feature1"',

            'git branch feature2',
            'git checkout feature2',
            'git add .',
            'git commit -m "git commit - checkout feature2"',
            'git add .',
            'git commit -m "create recursion in feature2"',
            'git add .',
            'git commit -m "update recursion in feature2"',

            'git branch feature3',
            'git checkout feature3',
            'git add .',
            'git commit -m "git commit - checkout feature3"',
            'git add .',
            'git commit -m "create b-tree in feature3"',
            'git add .',
            'git commit -m "update b-tree in feature3"',
            'git add .',
            'git commit -m "complete b-tree in feature3"',

            'git checkout feature2',
            'git add .',
            'git commit -m "return in branch 2"',

            'git checkout feature1',
            'git add .',
            'git commit -m "return in branch 1"',

            'git checkout master',
            'git add .',
            'git commit -m "update master after f3"'
        ];
    } else if (arg === 'example5') {
        example = [
            'git init',
            'git add .',
            'git commit -m "initial commit"',

            'git branch feature1',
            'git checkout feature1',
            'git add .',
            'git commit -m "git commit - checkout feature1"',
            'git add .',
            'git commit -m "added feature1"',

            'git branch feature2',
            'git checkout feature2',
            'git add .',
            'git commit -m "git commit - checkout feature2"',
            'git add .',
            'git commit -m "create recursion in feature2"',
            'git add .',
            'git commit -m "update recursion in feature2"',

            'git branch feature3',
            'git checkout feature3',
            'git add .',
            'git commit -m "git commit - checkout feature3"',
            'git add .',
            'git commit -m "create b-tree in feature3"',
            'git add .',
            'git commit -m "update b-tree in feature3"',
            'git add .',
            'git commit -m "complete b-tree in feature3"',

            'git checkout feature2',
            'git merge feature3',

            'git checkout feature1',
            'git merge feature2',

            'git checkout master',
            'git merge feature1',
            'git add .',
            'git commit -m "update master after merge all f"',
        ]
    } else if (arg === 'example6') {
        example = [
            'git init',
            'git add .',
            'git commit -m "initial commit"',

            'git branch feature1',
            'git checkout feature1',
            'git add .',
            'git commit -m "git commit - checkout feature1"',
            'git add .',
            'git commit -m "added feature1"',

            'git branch feature2',
            'git checkout feature2',
            'git add .',
            'git commit -m "git commit - checkout feature2"',
            'git add .',
            'git commit -m "create recursion in feature2"',
            'git add .',
            'git commit -m "update recursion in feature2"',

            'git branch feature3',
            'git checkout feature3',
            'git add .',
            'git commit -m "git commit - checkout feature3"',
            'git add .',
            'git commit -m "create b-tree in feature3"',
            'git add .',
            'git commit -m "update b-tree in feature3"',
            'git add .',
            'git commit -m "complete b-tree in feature3"',

            'git checkout feature2',
            'git add .',
            'git commit -m "return in branch 2"',
            'git merge feature3',
            'git add .',
            'git commit -m "feature2 merge feature3 with save conflict"',


            'git checkout feature1',
            'git add .',
            'git commit -m "return in branch 1"',
            'git merge feature2',
            'git add .',
            'git commit -m "feature1 merge feature2 with save conflict"',

            'git checkout master',
            'git add .',
            'git commit -m "return in master"',
            'git merge feature1',
            'git add .',
            'git commit -m "master merge feature1 with save conflict"',
        ];
    } else if (arg === 'example7') {
        example = [
            'git init',
            'git add .',
            'git commit -m "initial commit"',


            'git branch feature1',
            'git checkout feature1',
            'git add .',
            'git commit -m "git commit - checkout feature1"',
            'git add .',
            'git commit -m "added feature1"',

                'git branch f1_sub1',
                'git checkout f1_sub1',
                'git add .',
                'git commit -m "git commit - checkout f1_sub1"',
                'git add .',
                'git commit -m "added some in f1_sub1"',

            'git checkout feature1',
            'git add .',
            'git commit -m "git commit - checkout feature1 after f1_sub1"',

                'git branch f1_sub2',
                'git checkout f1_sub2',
                'git add .',
                'git commit -m "git commit - checkout f1_sub2"',
                'git add .',
                'git commit -m "added some in f1_sub2"',

            'git checkout feature1',
            'git add .',
            'git commit -m "git commit - checkout feature1 after f1_sub2"',
            

            'git checkout master',
            'git add .',
            'git commit -m "return in master after feature1"',
            'git branch feature2',
            'git checkout feature2',
            'git add .',
            'git commit -m "git commit - checkout feature2"',
            'git add .',
            'git commit -m "create recursion in feature2"',
            'git add .',
            'git commit -m "update recursion in feature2"',

                'git branch f2_sub1',
                'git checkout f2_sub1',
                'git add .',
                'git commit -m "git commit - checkout f2_sub1"',
                'git add .',
                'git commit -m "added some1 in f2_sub1"',
                'git add .',
                'git commit -m "added some2 in f2_sub1"',

                    'git branch f2_sub1_subsub1',
                    'git checkout f2_sub1_subsub1',
                    'git add .',
                    'git commit -m "git commit - checkout f2_sub1_subsub1"',
                    'git add .',
                    'git commit -m "added some in f2_sub1_subsub1"',

                'git checkout f2_sub1',
                'git add .',
                'git commit -m "git commit - return in f2_sub1"',


            'git checkout master',
            'git add .',
            'git commit -m "return in master after f2_sub1"',
            'git branch feature3',
            'git checkout feature3',
            'git add .',
            'git commit -m "git commit - checkout feature3"',
            'git add .',
            'git commit -m "create b-tree in feature3"',
            'git add .',
            'git commit -m "update b-tree in feature3"',
            'git add .',
            'git commit -m "complete b-tree in feature3"',


            'git checkout feature2',
            'git add .',
            'git commit -m "return in branch 2"',
            'git merge feature3',
            'git add .',
            'git commit -m "feature2 merge feature3 with save conflict"',


            'git checkout feature1',
            'git add .',
            'git commit -m "return in branch 1"',
            'git merge feature2',
            'git add .',
            'git commit -m "feature1 merge feature2 with save conflict"',


            'git checkout master',
            'git add .',
            'git commit -m "return in master"',
            'git merge feature1',
            'git add .',
            'git commit -m "master merge feature1 with save conflict"',

            // experimental block - may on/off

            'git merge f1_sub1',
            'git add .',
            'git commit -m "master merge f1_sub1 with save conflict"',
            'git merge f1_sub2',
            'git add .',
            'git commit -m "master merge f1_sub2 with save conflict"',
            'git merge f2_sub1_subsub1',
            'git add .',
            'git commit -m "master merge f2_sub1_subsub1 with save conflict"',
            'git merge f2_sub1',
            'git add .',
            'git commit -m "master merge f2_sub1 with save conflict"',
        ];
    } else if (arg === 'example8') {
        example = [
            'git init',
            'git add .',
            'git commit -m "initial commit"',


            'git branch feature1',
            'git checkout feature1',
            'git add .',
            'git commit -m "git commit - checkout feature1"',
            'git add .',
            'git commit -m "added feature1"',

                'git branch f1_sub1',
                'git checkout f1_sub1',
                'git add .',
                'git commit -m "git commit - checkout f1_sub1"',
                'git add .',
                'git commit -m "added some in f1_sub1"',

                    'git branch f1_sub1_subsub1',
                    'git checkout f1_sub1_subsub1',
                    'git add .',
                    'git commit -m "git commit - checkout f1_sub1_subsub1"',
                    'git add .',
                    'git commit -m "added some1 in f1_sub1_subsub1"',
                    'git add .',
                    'git commit -m "added some2 in f1_sub1_subsub1"',

                        'git branch f1_sub1_subsub1_subsub1',
                        'git checkout f1_sub1_subsub1_subsub1',
                        'git add .',
                        'git commit -m "git commit - checkout f1_sub1_subsub1_subsub1"',
                        'git add .',
                        'git commit -m "added some1 in f1_sub1_subsub1_subsub1"',

                    'git checkout f1_sub1_subsub1',
                    'git add .',
                    'git commit -m "git commit - return in f1_sub1_subsub1"',

                'git checkout f1_sub1',
                'git add .',
                'git commit -m "git commit - return in f1_sub1"',

            'git checkout feature1',
            'git add .',
            'git commit -m "git commit - checkout feature1 after f1_sub1"',
            'git merge f1_sub1',
            'git add .',
            'git commit -m "feature1 merge f1_sub with save conflict"',

                'git branch f1_sub2',
                'git checkout f1_sub2',
                'git add .',
                'git commit -m "git commit - checkout f1_sub2"',
                'git add .',
                'git commit -m "added some in f1_sub2"',

            'git checkout feature1',
            'git add .',
            'git commit -m "git commit - checkout feature1 after f1_sub2"',
            

            'git checkout master',
            'git add .',
            'git commit -m "return in master after feature1"',
            'git branch feature2',
            'git checkout feature2',
            'git add .',
            'git commit -m "git commit - checkout feature2"',
            'git add .',
            'git commit -m "create recursion in feature2"',
            'git add .',
            'git commit -m "update recursion in feature2"',

                'git branch f2_sub1',
                'git checkout f2_sub1',
                'git add .',
                'git commit -m "git commit - checkout f2_sub1"',
                'git add .',
                'git commit -m "added some1 in f2_sub1"',
                'git add .',
                'git commit -m "added some2 in f2_sub1"',

                    'git branch f2_sub1_subsub1',
                    'git checkout f2_sub1_subsub1',
                    'git add .',
                    'git commit -m "git commit - checkout f2_sub1_subsub1"',
                    'git add .',
                    'git commit -m "added some in f2_sub1_subsub1"',

                'git checkout f2_sub1',
                'git add .',
                'git commit -m "git commit - return in f2_sub1"',

                    'git branch f2_sub1_subsub2',
                    'git checkout f2_sub1_subsub2',
                    'git add .',
                    'git commit -m "git commit - checkout f2_sub1_subsub2"',
                    'git add .',
                    'git commit -m "added some in f2_sub1_subsub2"',

                        'git branch f2_sub1_subsub2_subsubsub1',
                        'git checkout f2_sub1_subsub2_subsubsub1',
                        'git add .',
                        'git commit -m "git commit - checkout f2_sub1_subsub2_subsubsub1"',
                        'git add .',
                        'git commit -m "added some1 in f2_sub1_subsub2_subsubsub1"',
                        'git add .',
                        'git commit -m "added some2 in f2_sub1_subsub2_subsubsub1"',
                        'git add .',
                        'git commit -m "added some3 in f2_sub1_subsub2_subsubsub1"',

                            'git branch f2_sub1_subsub2_subsubsub1_subsubsubsub1',
                            'git checkout f2_sub1_subsub2_subsubsub1_subsubsubsub1',
                            'git add .',
                            'git commit -m "git commit - checkout f2_sub1_subsub2_subsubsub1_subsubsubsub1"',

                        'git checkout f2_sub1_subsub2_subsubsub1',
                        'git add .',
                        'git commit -m "git commit - return in f2_sub1_subsub2_subsubsub1"',

                    'git checkout f2_sub1_subsub2',
                    'git add .',
                    'git commit -m "git commit - return in f2_sub1_subsub2"',


            'git checkout master',
            'git add .',
            'git commit -m "return in master after f2_sub1_subsub2"',
            'git branch feature3',
            'git checkout feature3',
            'git add .',
            'git commit -m "git commit - checkout feature3"',
            'git add .',
            'git commit -m "create b-tree in feature3"',
            'git add .',
            'git commit -m "update b-tree in feature3"',
            'git add .',
            'git commit -m "complete b-tree in feature3"',
            'git merge f2_sub1_subsub2_subsubsub1_subsubsubsub1',
            'git add .',
            'git commit -m "feature3 merge f2_sub1_subsub2_subsubsub1_subsubsubsub1 with save conflict"',


            'git checkout feature2',
            'git add .',
            'git commit -m "return in branch 2"',
            'git merge feature3',
            'git add .',
            'git commit -m "feature2 merge feature3 with save conflict"',


            'git checkout feature1',
            'git add .',
            'git commit -m "return in branch 1"',
            'git merge feature2',
            'git add .',
            'git commit -m "feature1 merge feature2 with save conflict"',


            'git checkout master',
            'git add .',
            'git commit -m "return in master"',
            'git merge feature1',
            'git add .',
            'git commit -m "master merge feature1 with save conflict"',

            
            'git merge f1_sub1',
            'git add .',
            'git commit -m "master merge f1_sub1 with save conflict"',
            'git merge f1_sub2',
            'git add .',
            'git commit -m "master merge f1_sub2 with save conflict"',
            'git merge f2_sub1_subsub1',
            'git add .',
            'git commit -m "master merge f2_sub1_subsub1 with save conflict"',
            'git merge f2_sub1',
            'git add .',
            'git commit -m "master merge f2_sub1 with save conflict"',
        ];
    }

    clear();

    log(example).forEach((el, ind) => setTimeout(() => {
        execute(el);
    }, (time || 500) * ind));
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
            arr[i+1].includes('branch') ||
            arr[i+1].includes('merge')
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

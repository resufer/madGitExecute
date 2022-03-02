export function gExamples(count = 3) {
    let example = [
        'git init',
        'git add .',
        'git commit -m "initial commit"',
    ];

    let bNum = 0;
    let currentBranch = 'master';

    let branches = ['master'];
    let subBranches = [];    

    generateBranch();

    function generateBranch() {
        if (bNum <= count) {
            ++bNum;
            let bName = 'feature' + bNum;

            example.push(...[
                `git branch feature${bNum}`,
                `git checkout feature${bNum}`,
                'git add .',
                `git commit -m "git commit - checkout feature${bNum}"`,
                'git add .',
                `git commit -m "added feature${bNum}"`,
            ]);
            branches.push(bName);
            currentBranch = bName;

            let random = getRandom();
            if (random) {
                generateCommits(getRandom(5), bName)
            } else generateSub(getRandom(5) + 1)
        } else {
            return;
        }

    }


    function generateSub(subCount = 3, subName, subNum) {
        if (!subName && !subNum){
            subNum = 1;
            subName = `f${bNum}_sub${subNum}`;
        } else {
            subName += `_sub${subNum}`;
        }
        example.push(...[
            `git branch ${subName}`,
            `git checkout ${subName}`,
            'git add .',
            `git commit -m "git commit - checkout ${subName}"`,
        ]);
        subBranches.push(subName);
        currentBranch = subName;

        let random = getRandom();
        if (subCount) {
            generateSub(--subCount, subName, ++subNum);
        } else if (!random){
              generateCommits(getRandom(3), subName);
        } else {
            mergeBranch();
        }
    }


    function generateCommits(comCount, bName) {
        for (let i = 1; i <= comCount; i++) {
            example.push(...[
                'git add .',
                `git commit -m "git commit - update${i} ${bName}"`,
            ]);
        }
        
        generateBranch();
    }


    function mergeBranch() {
        let random1 = getRandom();
        if (random1) {
            let randBranch = branches[getRandom(branches.length)];
            example.push(...[
                'git checkout ' + randBranch,
                'git add .',
                `git commit -m "git commit - checkout ${randBranch}"`,
            ]);
            currentBranch = randBranch;

            let random2 = getRandom();
            if (random2) {
                let randMergeBranch = branches[getRandom(branches.length)];
                example.push(...[
                    `git merge ${randMergeBranch}`,
                    'git add .',
                    `git commit -m "${currentBranch} merge ${randMergeBranch} with save conflict"`,
                ]); branches = branches.filter(el => el !== randMergeBranch);
            } else {
                let randMergeSubBranch = subBranches[getRandom(subBranches.length)];
                example.push(...[
                    `git merge ${randMergeSubBranch}`,
                    'git add .',
                    `git commit -m "${currentBranch} merge ${randMergeSubBranch} with save conflict"`,
                ]);    subBranches.filter(el => el !== randMergeSubBranch);
            }
        } else {
            let randSubBranch = subBranches[getRandom(subBranches.length)];
            example.push(...[
                'git checkout ' + randSubBranch,
                'git add .',
                `git commit -m "git commit - checkout ${randSubBranch}"`,
            ]);
            currentBranch = randSubBranch;

            let random2 = getRandom();
            if (random2) {
                let randMergeBranch = branches[getRandom(branches.length)];
                example.push(...[
                    `git merge ${randMergeBranch}`,
                    'git add .',
                    `git commit -m "${currentBranch} merge ${randMergeBranch} with save conflict"`,
                ]); branches = branches.filter(el => el !== randMergeBranch);
            } else {
                let randMergeSubBranch = subBranches[getRandom(subBranches.length)];
                example.push(...[
                    `git merge ${randMergeSubBranch}`,
                    'git add .',
                    `git commit -m "${currentBranch} merge ${randMergeSubBranch} with save conflict"`,
                ]); subBranches.filter(el => el !== randMergeSubBranch);
            }
        }
        
        let random3 = getRandom(4);
        if (random3) {
            mergeBranch();
        } else generateBranch(); 
    }


    function getRandom(r = 1) {
        return Math.round(Math.random() * r);
    }

    return example;
}

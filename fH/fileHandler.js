import fs from 'fs';

(() => {
    fs.writeFile('./fH/gitData.txt', '\n' + process.argv.slice(2).join(''), { flag: 'a+' }, (err) => {
        if (err) {
          console.error(err)
          return;
        }
      })
})();

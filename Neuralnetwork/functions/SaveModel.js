const path = require('path');
const fs = require('fs');

const DefaultPathName = 'Model';

function SaveModel(config, info) {

    let dir = config.split('/');
    let name = dir.pop();

    dir = dir.join('/');
    dir = dir + '/' + name;

    fs.mkdirSync(dir, {recursive: true});

    let File = JSON.stringify(info);
    let FileName = '/' + name + '.json';

    fs.writeFileSync(dir + FileName, File);
}

module.exports = SaveModel;
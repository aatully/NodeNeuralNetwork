const path = require('path');
const fs = require('fs');

const DefaultPath = path.join(__dirname, '../ModelsCheckpoint/');
const DefaultPathName = 'Model';

function SaveModel(config) {

    let Number = 0;
    let ActualPath = DefaultPath + DefaultPathName + '_' + Number;
    while (fs.existsSync(ActualPath)) {

        Number++;
        ActualPath = DefaultPath + DefaultPathName + '_' + Number;
    }

    fs.mkdirSync(ActualPath, {recursive: true});

    let File = JSON.stringify(config);
    let FileName = '/Model' + '_' + Number;

    fs.writeFileSync(ActualPath + FileName, File);
}

module.exports = SaveModel;
const inputFunction = require('./InputFunction');
const BackPropagation = require('./BackPropagation');

function LearnFunction (config, inputDataMatrix) {

    let ModelOutuput = inputFunction(inputDataMatrix, config);

    console.log(ModelOutuput.Output);
    console.log(ModelOutuput.AllValues);
}

module.exports = LearnFunction;
const CreateWeigthAndBias = require('./functions/CreateWeigths');
const SaveModel = require('./functions/SaveModel');
const fs = require('fs');

const DefaultConfig = {
    layers: [2,3,2],
    activation: "ReLU",
    weights: [],
    bias: []
}

class Neuralnetwork {

    constructor(path = DefaultConfig) {
        this.learningRate = 0.01;
        this.momentum = 0.01;
        this.batchSize=  1;
        this.config = undefined;

        let isConfigAPath = fs.existsSync(path);
        let newConfig = undefined;
        
        // If the directory of a folder is passed
        // as a neural network configuration, this function
        // will set the same settings as the file
        if (isConfigAPath) {
            newConfig = this.getConfig(path);
            this.config = newConfig;
            return; 
        }

        // Otherwise this function creates a new configuration for the neural network
        newConfig = this.CreateConfig(DefaultConfig);
        this.config = newConfig;

        SaveModel(this.config);
    }

    getConfig(config) {
        
        let filename = config.split('/').pop();
        let file = config + '/' + filename + '.json';

        if (!fs.existsSync(file)) { return; }

        let newConfig = JSON.parse(fs.readFileSync(file));
        return newConfig;
    }

    CreateConfig(config) {
        let newConfig = config;
        let WeigthAndBias = CreateWeigthAndBias(config.layers);

        newConfig.weights = WeigthAndBias.weights;
        newConfig.bias = WeigthAndBias.bias;

        return newConfig;
    }

    learn() {}
}

module.exports = Neuralnetwork;
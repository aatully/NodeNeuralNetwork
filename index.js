const Neuralnetwork = require('./Neuralnetwork/Neuralnetwork');

let config = {
    layers: [2,3,2],
    activation: "ReLU",
}

let net = new Neuralnetwork('./Checkpoint/Modelo_1', config);

// console.log(net.config.weights);
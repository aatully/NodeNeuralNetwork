const Neuralnetwork = require('./Neuralnetwork/Neuralnetwork');

let net = new Neuralnetwork('./Checkpoints/Model_0');

console.log(net.config.weights);
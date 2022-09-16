const Neuralnetwork = require('./Neuralnetwork/Neuralnetwork');

let config = {
    layers: [5,2,2,5],
}

let net = new Neuralnetwork('./Checkpoint/Modelo_1', config);

net.learn([1,2,3]);
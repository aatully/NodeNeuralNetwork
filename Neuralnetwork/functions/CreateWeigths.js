// This function goes through each layer creating their
// respective weights and bias, creating a bias value for each
// neuron and N weight values ​​for each neuron in the next layer.

function CreateWeigthAndBias(LayersMatrix) {

    let weights = [];
    let bias = [];
    
    for (let i = 0; i < LayersMatrix.length; i++) {
        
        // Calculates range of starting weights.
        let RangeOfWeights = Math.sqrt(2.0 / LayersMatrix[i]);

        let biasLayer = [];
        let weightsLayer = [];

        for (let j = 0; j < LayersMatrix[i]; j++) {   
            // Get an initial bias value for each neuron.
            let bias = 0;
            biasLayer.push(bias);

            let weightsPerNeuron = [];

            for (let k = 0; k < LayersMatrix[i + 1]; k++) {

                let weight = Math.random() * RangeOfWeights;
                weightsPerNeuron.push(weight);
            }

            if (weightsPerNeuron.length > 0) {
                weightsLayer.push(weightsPerNeuron);
            }
        }
        if (weightsLayer.length > 0) {  
            weights.push(weightsLayer);
        }
        bias.push(biasLayer);
    }
    bias.shift();
    return { weights, bias };
}

module.exports = CreateWeigthAndBias;
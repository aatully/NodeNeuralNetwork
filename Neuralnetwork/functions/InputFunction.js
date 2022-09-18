let ReLU = (value) => {
    return Math.max(0, value);
}

function inputFunction(inputDataMatrix, config) {

    let Weigths = config.weights;
    let Bias = config.bias;

    let Output = inputDataMatrix;
    let AllValues = [];

    let NewOutuput = [];

    for (let i = 0; i < Weigths.length; i++) {

        for (let j = 0; j < Weigths[i].length; j++) {

            for (let k = 0; k < Weigths[i][j].length; k++) {

                if (NewOutuput[k] == undefined) {
                    NewOutuput.push(0);
                }

                NewOutuput[k] += Output[j] * Weigths[i][j][k];

                if (j == Weigths[i].length - 1) {
                    NewOutuput[k] += Bias[i][k];

                    NewOutuput[k] = ReLU(NewOutuput[k]);
                }
            }
        }
        AllValues.push(NewOutuput);
        Output = NewOutuput;
        NewOutuput = [];
    }

    return {Output, AllValues};
}

module.exports = inputFunction;
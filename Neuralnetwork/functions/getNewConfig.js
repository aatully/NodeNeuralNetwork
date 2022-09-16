function getNewConfig(Default, newConfig) {

    let Config = Default;
    
    if (newConfig.layers) {
        Config.layers = newConfig.layers;
    }

    if (newConfig.activation) {
        Config.activation = newConfig.activation;
    }

    if (newConfig.weights) {
        Config.weights = newConfig.weights;
    }

    if ( newConfig.bias) {
        Config.bias = newConfig.bias;
    }

    return Config;
}

module.exports = getNewConfig;
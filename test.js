const tf = require('@tensorflow/tfjs');
const tfn = require("@tensorflow/tfjs-node");

const handler = tfn.io.fileSystem("./vgg19/model.json");
let model;

(async function () {
    model = await tf.loadLayersModel(handler);

    console.log('loaded...');
})().catch(console.error);

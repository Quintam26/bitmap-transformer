/* eslint-disable */
const BitmapHeader = require('./bitmap-header');

class BitmapTransformer {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }

    transform(fn) {
        // this is a guide to what needs to happen
        // not a recipe

        // you have access to the data you need:
        // this.buffer
        // this.header.pixelOffset
        // this.header.bitsPerPixel
        // this.header.fileSize

        // Find the right place (offset) in the buffer from which to start your loop.
    
        // Keep in mind that the loop will need to "step" by something other than 1.
        // For each loop:
        // 1. Read the individual color values into a color object
        // 1. Pass to the transformation function, which returns a transformed color object
        // 1. Write the transformed color values back into the buffer
    }
}
/* eslint-enable */
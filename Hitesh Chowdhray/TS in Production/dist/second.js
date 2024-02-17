"use strict";
// Class in ts cam implemnts interfaces and can extend other classes
// interfaces act as blueprint for class in broader level
class Instagram {
    // cameraMode: string;
    // filter: string;
    // burst: number;
    // constructor(cameraMode: string, filter: string, burst: number) {
    //     this.cameraMode = cameraMode;
    //     this.filter = filter;
    //     this.burst = burst;
    // }
    constructor(
    // another way to implement the above lines of code
    cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log('Story was created!');
    }
}
function funky(param) {
    param = param * 10;
    return 'aman';
}
const funky2 = (param) => {
    param = param * 10;
    return 'tiwari';
};

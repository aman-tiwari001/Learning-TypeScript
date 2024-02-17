interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

// Class in ts cam implemnts interfaces and can extend other classes
// interfaces act as blueprint for class in broader level

class Instagram implements TakePhoto, Story {
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
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
  createStory(): void {
    console.log('Story was created!');
  }
}

function funky(param: number): string {
  param = param * 10;
  return 'aman';
}

const funky2 = (param: number): string => {
  param = param * 10;
  return 'tiwari';
};

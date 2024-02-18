interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  side: number;
}

interface Rectangle {
  kind: 'rectangle';
  length: number;
  width: number;
}

function getArea(shape: Circle | Square | Rectangle) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    case 'rectangle':
      return shape.length * shape.width;
    default:
      const _defShape: never = shape;
      return _defShape;
  }
}

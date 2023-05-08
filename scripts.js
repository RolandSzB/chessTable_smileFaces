let squares = [];

function setup() {
  createCanvas(600, 600);
  drawChessboard();
}

function drawChessboard() {
  const squareSize = width / 8;
  let isWhite = true;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const x = j * squareSize;
      const y = i * squareSize;
      const square = new Square(x, y, squareSize, isWhite);
      squares.push(square);
      isWhite = !isWhite;
    }
    isWhite = !isWhite;
  }
  squares.forEach((square) => square.show());
}

class Square {
  constructor(x, y, size, isWhite) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.isWhite = isWhite;
  }

  show() {
    fill(this.isWhite ? 255 : 0);
    rect(this.x, this.y, this.size, this.size);
  }
}

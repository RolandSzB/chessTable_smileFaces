let squares = [];

function setup() {
  createCanvas(400, 400);
  drawChessboard();
  placeSmileys();
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

function placeSmileys() {
  const squareSize = width / 8;
  let count = 0;
  while (count < 16) {
    const i = floor(random(8));
    const j = floor(random(8));
    const index = i * 8 + j;
    const square = squares[index];
    if (!square.hasSmiley) {
      const color = count % 2 === 0 ? "grey" : "white";
      square.addSmiley(color);
      count++;
    }
  }
}

class Square {
  constructor(x, y, size, isWhite) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.isWhite = isWhite;
    this.hasSmiley = false;
  }

  show() {
    fill(this.isWhite ? 255 : 0);
    rect(this.x, this.y, this.size, this.size);
  }

  addSmiley(color) {
    this.hasSmiley = true;
    fill(color);
    circle(this.x + this.size / 2, this.y + this.size / 2, this.size / 2);
    circle(this.x + this.size / 2.7, this.y + this.size / 2, this.size / 6);
    circle(this.x + this.size / 1.7, this.y + this.size / 2, this.size / 6);
    arc(
      this.x + this.size / 2,
      this.y + this.size / 1.65,
      this.size / 3,
      10,
      0,
      Math.PI
    );
    fill(255);
  }
}

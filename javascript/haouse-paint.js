
function haousePaint(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);
  let h = Number(input[2]);
  let sideWall = x * y;
  let window = 1.5 * 1.5;
  let bothSide = 2 * sideWall - 2 * window;
  let backWall = x * x;
  let door = 1.2 * 2;
  let totalSides = 2 * backWall - door;
  let totalArea = bothSide + totalSides;
  let greenPaint = totalArea / 3.4;
  console.log(greenPaint.toFixed(2));

  let bothRectangle = 2 * (x * y);
  let triangle = 2 * ((x * h) / 2);
  let toatalRoof = bothRectangle + triangle;
  let redPaint = toatalRoof / 4.3;
  console.log(redPaint.toFixed(2));
}
haousePaint([10.25, 15.45, 8.88])
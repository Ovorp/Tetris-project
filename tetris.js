document.addEventListener('DOMContentLoaded', () =>{
  const grid = document.querySelector(".grid");
  let squares = Array.from(document.querySelectorAll(".grid div"));
  const scoreDisplay = document.querySelector("#score");
  const startBtn = document.querySelector("#start-button");
  const width = 10;
  
  //The Tetrominoes
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ];
  
  const zTetromino = [
    [0, 1, width + 1, width + 2],
    [2, width + 1, width + 2, width * 2 + 1],
    [0, 1, width + 1, width + 2],
    [2, width + 1, width + 2, width * 2 + 1]
  ];
  
  const sTetromino = [
    [1, 2, width + 1, width],
    [1, width + 1, width + 2, width * 2 + 2],
    [1, 2, width + 1, width],
    [1, width + 1, width + 2, width * 2 + 2]
  ];
  
  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ];
  
  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ];
  
  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ];
  
  const theTetrominos = [
    lTetromino,
    zTetromino,
    sTetromino,
    tTetromino,
    oTetromino,
    iTetromino
  ];
  
  let random = Math.floor(Math.random() * theTetrominos.length);
  
  let currentPosition = 4;
  let currentRotation = 0;
  //randomly select a Tetromino
  let current = theTetrominos[random][currentRotation];
  
  //draw the first rotation in the first teteromio
  function draw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.add('tetromino')
    })
  }
  
  //undraw the Teteromino
  function undraw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.remove('tetromino');
    });
  }
  
  
  //move the tetromino down
  timerID = setInterval(moveDown, 500)
  
  //move down function
  function moveDown() {
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }
  
  //Stop function
  function freeze() {
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
      current.forEach(index => squares[currentPosition + index].classList.add('taken'))
      //start a new tetermino falling
      random = Math.floor(Math.random() * theTetrominos.length)
      current = theTetrominos[random][currentRotation]
      currentPosition = 4
      draw()
    }
  }
})
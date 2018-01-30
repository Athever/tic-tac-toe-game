document.getElementById('start').addEventListener('click',() => {
  let grid = '<div class="square" id="square1" data-number="1"></div>';
  for (i = 2;i<=9;i++) {
    grid+='<div class="square" id="square'+i+'" data-number="'+i+'"></div>';
  }
  var board = [];
  var a = document.getElementById('player1').value;
  var b = document.getElementById('player2').value;
  var e = document.getElementById('end');
  var ec = document.getElementById('end-content');
  var player = "a";
  document.getElementById('game').innerHTML = `<h1>Tic tac toe game</h1>`;
  document.getElementById('game').innerHTML += grid;

  const square = document.querySelectorAll('.square');
  square.forEach(square => {square.addEventListener('click',() => {
    var c = square.getAttribute('data-clicked');
    if (c === "yes") {
      return 0;
    }
    else {
      if(player === "a") {
          square.innerHTML = "X";
          square.setAttribute('data-clicked','yes');
          var d = square.getAttribute('data-number');
          board[d] = "x";
          if (board[1] === "x" && board[2] === "x" && board[3] === "x") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${a}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[1] === "x" && board[5] === "x" && board[9] === "x") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${a}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[2] === "x" && board[5] === "x" && board[8] === "x") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${a}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[3] === "x" && board[5] === "x" && board[7] === "x") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${a}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[1] === "x" && board[4] === "x" && board[7] === "x") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${a}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[1] === "x" && board[2] === "x" && board[3] === "x") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${a}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[3] === "x" && board[6] === "x" && board[9] === "x") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${a}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[4] === "x" && board[5] === "x" && board[6] === "x") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${a}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[7] === "x" && board[8] === "x" && board[9] === "x") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${a}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          player = "b";
        }
        else {
          square.innerHTML = "O";
          square.setAttribute('data-clicked','yes');
          var d = square.getAttribute('data-number');
          board[d] = "o";
          if (board[1] === "o" && board[2] === "o" && board[3] === "o") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${b}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[1] === "o" && board[5] === "o" && board[9] === "o") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${b}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[2] === "o" && board[5] === "o" && board[8] === "o") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${b}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[3] === "o" && board[5] === "o" && board[7] === "o") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${b}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[1] === "o" && board[4] === "o" && board[7] === "o") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${b}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[1] === "o" && board[2] === "o" && board[3] === "o") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${b}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[3] === "o" && board[6] === "o" && board[9] === "o") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${b}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[4] === "o" && board[5] === "o" && board[6] === "o") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${b}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          if (board[7] === "o" && board[8] === "o" && board[9] === "o") {
            e.style.display = "block";
            ec.innerHTML = `<h3>The winner is ${b}.</h3>`
            ec.innerHTML += `<button id="again">Play again</button>`
          }
          player = "a";
        }
        if (board[1] === "x" && board[2] === "o" && board[3] === "o" && board[4] === "o" && board[5] === "x" && board[6] === "x" && board[7] === "x" && board[8] === "x" && board[9] === "o") {
          e.style.display = "block";
          ec.innerHTML = `<h3>Draw.</h3>`
          ec.innerHTML += `<button id="again">Play again</button>`
        }
        if (board[1] === "x" && board[2] === "x" && board[3] === "o" && board[4] === "o" && board[5] === "o" && board[6] === "x" && board[7] === "x" && board[8] === "o" && board[9] === "x") {
          e.style.display = "block";
          ec.innerHTML = `<h3>Draw.</h3>`
          ec.innerHTML += `<button id="again">Play again</button>`
        }
        if (board[1] === "x" && board[2] === "x" && board[3] === "o" && board[4] === "o" && board[5] === "o" && board[6] === "x" && board[7] === "x" && board[8] === "x" && board[9] === "o") {
          e.style.display = "block";
          ec.innerHTML = `<h3>Draw.</h3>`
          ec.innerHTML += `<button id="again">Play again</button>`
        }
		if (board[1] === "x" && board[2] === "o" && board[3] === "x" && board[4] === "x" && board[5] === "x" && board[6] === "o" && board[7] === "o" && board[8] === "x" && board[9] === "o") {
          e.style.display = "block";
          ec.innerHTML = `<h3>Draw.</h3>`
          ec.innerHTML += `<button id="again">Play again</button>`
        }
      }
      document.getElementById('again').addEventListener('click',() => {
		 setTimeout(function() {location.reload()},500);
      })
    });
  });
});

/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

var board = [];
for(var i=0;i<6;i++){
  board[i] = [];
  for(var j=0;j<7;j++) {
    board[i][j] = 0;
  }
}

console.log(board);

function set(row, column, player){
  board[row][column] = player;
}

function render() {
  var div = document.querySelector("#principal");
  div.innerHTML = '';
  div.appendChild(document.createElement("table"));
  
  for(i=0;i<6;i++){
    div.querySelector("table").appendChild(document.createElement("tr"));
    for(j=0;j<7;j++){
      div.querySelector("table").children[i].appendChild(document.createElement("td"));
      if(board[i][j] === 1){
        div.querySelector("table").children[i].children[j].className = "player1";
      }else if(board[i][j] === 2){
        div.querySelector("table").children[i].children[j].className = "player2";
      }
    }
  }
}

var turn = 1;

function play(column) {
  for(i=5; i>=0;i++){
    if(board[i][column] === 0){
      board[i][column] = turn;
      return i;
    }
  }
  return false;
}



play(1);
console.log(render());
console.log(event.target);
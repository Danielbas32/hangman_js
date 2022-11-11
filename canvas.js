function paint_canvas() {
  board.lineWidth = 9;
  board.linecap = "round";
  board.linejoin = "round";
  board.fillStyle = "#C5CDE5";
  board.strokeStyle = "#7110F2";

  board.fillRect(0, 0, 1200, 860);
  board.beginPath();
  board.moveTo(600, 500);
  board.lineTo(900, 500);
  board.stroke();
  board.closePath();
}

function paint_line() {
  board.lineWidth = 6;
  board.linecap = "round";
  board.linejoin = "round";
  board.strokeStyle = "#7110F2";

  board.beginPath();
  let width_v = 600 / secret_word.length;
  for (let i = 0; i < secret_word.length; i++) {
    board.moveTo(500 + width_v * i, 640);
    board.lineTo(550 + width_v * i, 640);
  }
  board.stroke();
  board.closePath();
}
function write_letter_c(index) {
  board.font = "bold 52px Space";
  board.lineWidth = 6;
  board.linecap = "round";
  board.linejoin = "round";
  board.fillStyle = "#7110F2";

  let width_v = 600 / secret_word.length;
  board.fillText(secret_word[index], 505 + width_v * index, 620);
  board.stroke();
}
function write_letter_i(letter, errorsLeft) {
  board.lineWidth = 6;
  board.font = "bold 40px Space";
  board.linecap = "round";
  board.linejoin = "round";
  board.fillStyle = "#0A3871";
  board.fillText(letter,535+(40*(10-errorsLeft)),710,40);
}
function game_over() {
  board.font = " bold 42px Space";
  board.lineWidth = 6;
  board.lineCap = "round";
  board.lineJoin = "round";
  board.fillStyle = "red";
  board.fillText("Game Over", 930, 320);
}
function you_win() {
  board.font = "bold 42px Space";
  board.lineWidth = 6;
  board.lineCap = "round";
  board.lineJoin = "round";
  board.fillStyle = "green";
  board.fillText("You win,", 950, 320);
  board.fillText("Congratulations!", 930, 360);
  setTimeout(reloaded, 1000);
}
function reloaded() {
  location.reload();
}

function paint_hangman(score) {
    board.lineWidth=8
    board.lineCap="round"
    board.lineJoin="round"
    board.strokeStyle = "#7110F2"
    if(score===8){
    //pole
    board.moveTo(700,500)
    board.lineTo(700,100)
    }
    if(score===7){//support 
    board.moveTo(850,100)
    board.lineTo(700,100)
    }
    if(score===6){//rope
    board.moveTo(850,100)
    board.lineTo(850,171)
    }
    if(score===5){//head
    board.moveTo(900,230)
    board.arc(850,230,50,0,Math.PI*2)
    }
    if(score===4){//body
    board.moveTo(850,389)
    board.lineTo(850,289)
    }
    if(score===3){//left leg
    board.moveTo(850,389)
    board.lineTo(800,450)
    }
    if(score===2){//right leg
    board.moveTo(850,389)
    board.lineTo(890,450)
    }
    if(score===1){//left hand
    board.moveTo(850,330)
    board.lineTo(800,389)
    }
    if(score===0){//right hand
    board.moveTo(850,330)
    board.lineTo(890,389)
    }
    board.stroke()
    board.closePath()

}

let screen= document.querySelector("canvas");
let btn_new_game = document.getElementById("btn-new-game").style.display = "none"
let btn_exist = document.getElementById("btn-exit").style.display = "none"
let div_add_word = document.getElementById("add-new-word").style.display = 'none';
let b_new_game = document.getElementById("btn-new-game");
let b_exit = document.getElementById("btn-exit");
let btn_cancel = document.getElementById("btn-cancel");

// selector words
var words = ["BLUE","YELLOW","GREEN","RED", "MAGENTA","PURPLE","WHITE","ORANGE","BROWN","BLACK", "SILVER","GREY","PINK","GOLD"];
var board = document.getElementById("gallows").getContext("2d");
var secret_word = "";
var letters = [];
var word_correct = "";
var errors = 8;
let letters_incorrect = [];
let n_errors = 8;
let choose_letter = [];

document.getElementById("star-game").onclick = () => {
  star_game();
}

document.getElementById("btn-save").onclick = () => {
  save_word();
};

b_new_game.addEventListener("click", function () {
  location.reload();
});

b_exit.addEventListener("click", function () {
  location.reload();
});

btn_cancel.addEventListener("click", function () {
  location.reload();
});


// secret word
function choose_word() {
  let word = words[Math.floor(Math.random() * words.length)];
  secret_word = word;
  return word;
}


function validation_letter_into(key) {
  if (letters.length < 1 || letters.indexOf(key) < 0) {
    letters.push(key);
    return false;
  } else {
    letters.push(key);
    return true;
  }
}

function add_letter_c(i) {
  word_correct += secret_word[i].toUpperCase()
}

function add_letter_i(letter) {
  if (secret_word.indexOf(letter) <= 0) {
    errors -= 1
  }
}

function check_game_over(letter) {
  if (choose_letter.length < secret_word.length) 
  {
    letters_incorrect.push(letter);
    if (letters_incorrect.length > n_errors) 
    {
      game_over();
    } 
    else if (choose_letter.length < secret_word.length) 
    {
      add_letter_i(letter);
      write_letter_i(letter, errors);
    }
  }
}

function check_win(letter) {
  choose_letter.push(letter.toUpperCase());
  if (choose_letter.length == secret_word.length) {
    you_win()
  }
}

function validation_letter(keyCode) {
  if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}
function view_new_word() {
  document.getElementById("div-disappear").style.display = 'none';
  document.getElementById("add-new-word").style.display = "block";

}

function save_word() {
  let new_word = document.getElementById("input-new-word").value;

  if (new_word !== "") {
    words.push(new_word.toUpperCase());
    alert("The word was saved");
    document.getElementById("add-new-word").style.display = "none";
    star_game();
  } else {
    alert("No word has been typed");
  }
}



function star_game() {
  
  document.getElementById("div-disappear").style.display = "none";
  

  paint_canvas();
  choose_word();
  paint_line();

  document.getElementById("btn-new-game").style.display = "block"
  document.getElementById("btn-exit").style.display = "block"

  document.onkeydown = (e) => {
    let letter = e.key.toUpperCase();

    if (letters_incorrect.length <= n_errors) {
      if (!validation_letter_into(e.key) && validation_letter(e.keyCode)) {
        if (secret_word.includes(letter)) {
          add_letter_c(secret_word.indexOf(letter));
          for (let i = 0; i < secret_word.length; i++) {
            if (secret_word[i] === letter) {
              write_letter_c(i);
              check_win(letter);
            }
          }
        } else {
          if (!validation_letter_into(e.key) && !check_win(letter)) return;
          paint_hangman(errors);
          check_game_over(letter);
        }
      }
    } else {
      alert("you have entered the limit of incorrect letters");
      alert(`you secret word was: ${secret_word}`)
    }
  };

  let score_r = document.querySelector("#div-appear");
  score_r.insertAdjacentHTML("beforeend", `<p class="score">you have 8 chances </p>`);


  let help_me = document.querySelector("#div-appear");
  help_me.insertAdjacentHTML("beforeend", `<p class="help">Your word have ${secret_word.length} letters </p>`);

}





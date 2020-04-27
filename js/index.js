let order = []; // keep track of the order of the lights
let playerOrder = []; // the order that the player is pressing the lights in
let flash; // a basic interger
let turn; // to keep track of what turn we are on
let good; // going to be a boolean true or false, wether the player is doing well or not
let compTurn; // going to be a boolean true or false, its going to keep track wether is the players turn or the computers turn
let intervalId;
let strictButton = false; // going to keep track if the strict button is activated
let noise = true; //
let onButton = false; // if the program turned on the power button
let win; // going to say if the player has win the game or not.


// ----------------------------- Pops an Alert box to make sure you read the Rules. ----------------------------- //
$(document).ready(function() {
  setTimeout(function() {
  alert("Welcome Player! Don't forget to read the Rules and Instructions on the top left !");
  }, 1000)
});

// ----------------------------- Power Button ON / OFF ----------------------------- //
$(".slider").click(function () {
  if (!onButton) {
    onButton = true;
    $("#turn").text("-");
    $(".start-button").addClass("start-color");
  } else {
    onButton = false;
    strictButton = false;
    aiSequence = [];
    playerSequence = [];
    count = 0;
    $("#turn").text("");
    $(".start-button").removeClass("start-color");
  }
});

// ----------------------------- Strict button ON / OFF ----------------------------- //
$(".slider1").click(function () {
  if (!strictButton) {
      strictButton = true;
      alert("Strict mode is now activated");
  } else {
    strictButton = false;
    alert("Strict mode is now deactivated");
  }
});

// ----------------------------- Start Button to start the game ----------------------------- //
$(".start-button").click(function () {
  if (onButton) {
    console.log("game started check");
    startGame();
  }
});


// ----------------------------- Start game and resetting al variables ----------------------------- //
function startGame() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  $("#turn").text("1");
  good = true;
  // ----------------------------- Generates a random 1-4 numbers until 20 ----------------------------- //
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
};

function gameTurn() {
  onButton = false;

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    onButton = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      flash++;
    }, 200);
  }
};

// ----------------------------- Blue pad to light up ----------------------------- //
function one() {
  if (noise) {
    var audio = document.getElementById("clip-1");
    audio.play();
  }
  noise = true;
  $("#bluepad").addClass("light");
};

// ----------------------------- Red pad to light up ----------------------------- //
function two() {
  if (noise) {
    var audio = document.getElementById("clip-2");
    audio.play();
  }
  noise = true;
  $("#redpad").addClass("light");
};

// ----------------------------- Green pad to light up ----------------------------- //
function three() {
  if (noise) {
    var audio = document.getElementById("clip-3");
    audio.play();
  }
  noise = true;
  $("#greenpad").addClass("light");
};

// ----------------------------- Yellow pad to light up ----------------------------- //
function four() {
  if (noise) {
    var audio = document.getElementById("clip-4");
    audio.play();
  }
  noise = true;
  $("#yellowpad").addClass("light");
};

// ----------------------------- Clears color back to original color ----------------------------- //
function clearColor() {
  $("#bluepad").removeClass("light");
  $("#redpad").removeClass("light");
  $("#greenpad").removeClass("light");
  $("#yellowpad").removeClass("light");
};

/* ----------------------------- 
Flashes the color when Ai is doing their sequence or when player clicks on it  
----------------------------- */
function flashColor() {
  $("#bluepad").addClass("light");
  $("#redpad").addClass("light");
  $("#greenpad").addClass("light");
  $("#yellowpad").addClass("light");
};

// ----------------------------- Bluepad function ----------------------------- //
$("#bluepad").click(function () {
  if (onButton) {
    playerOrder.push(1);
    check();
    one();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }  
});

// ----------------------------- Redpad function ----------------------------- //
$("#redpad").click(function () {
  if (onButton) {
    playerOrder.push(2);
    check();
    two();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

// ----------------------------- Greenpad function ----------------------------- //
$("#greenpad").click(function () {
  if (onButton) {
    playerOrder.push(3);
    check();
    three();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

// ----------------------------- Yellowpad function ----------------------------- //
$("#yellowpad").click(function () {
  if (onButton) {
    playerOrder.push(4);
    check();
    four();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

/* -----------------------------
 Checks if player is right 
 ----------------------------- */
function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 20 && good) {
      winGame();
  }

  if (good == false) {
      onButton = true;
      flashColor();
      $("#turn").text("!!");
      setTimeout(() => {
          $("#turn").text(turn);
          clearColor();

          // If strictButton is activated then returns to first sequence
          if (strictButton) {
              startGame();
          } else { // Else it's going to return the current sequence
              compTurn = true;
              flash = 0;
              playerOrder = [];
              good = true;
              intervalId = setInterval(gameTurn, 800);
          }
      }, 800);

      noise = false; // If player is wrong its not going to play a sound
  }

  if (turn == playerOrder.length && good && !win) {
      turn++;
      playerOrder = [];
      compTurn = true;
      flash = 0;
      $("#turn").text(turn);
      intervalId = setInterval(gameTurn, 800);
  }
};

// ----------------------------- Win-game Alert box will pop up and page will reload to reset everything ----------------------------- //
function winGame() {
    flashColor();
    $("#turn").text("WIN");
    setTimeout(function() {
    alert("Congratulations you have won the game ! Page will reload after 5 seconds.");
    clearColor();
  }, 1000)
    onButton = false;
    win = true;
    setTimeout(function() {
    location.reload();
  }, 5000)

};
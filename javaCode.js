let player = "x"
let gameBoard = [
    "", "", "",
    "", "", "",
    "", "", ""
]
let numberOfTurns = 0
let gameOver= false;
let xScor=0;
let oScor=0;
$(".cell").on("click",function(event){

    const id = $(event.target).attr("id")
    if(gameOver=== false){
        if(gameBoard[id] === "" ){// if the gameboard position is empty
            $("#message1").text('');
            gameBoard[id] = player
            $(event.target).text(player); 
            // change player
            if (player === "x") {
                player = "o"
            } else {
                player = "x"
            }
            numberOfTurns++
            findWinner()
        } else{// else say message "invalid move"
            $("#message1").text('invalid move');
        }
    }//end of if gameOver==false
});
    

const findWinner = function (){
        if(gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2] && gameBoard[0] !== ""){ //win
            $("#message").text('Winner: Player '+gameBoard[0]);
            $('#0, #1, #2').css("background-color","pink");
            gameOver= true;
            if(gameBoard[0] === "x"){xScor++;}
             else{ oScor++;}
             

        }else if(gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5] && gameBoard[3] !== ""){//win
            $("#message").text('Winner: Player '+gameBoard[3]);
            $('#3, #4, #5').css("background-color","pink");
            gameOver= true;
            if(gameBoard[3]==="x"){xScor=xScor+1;}
             else{oScor=oScor+1;}
        }

        else if(gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8] && gameBoard[6] !==""){//win
            $("#message").text('Winner: Player '+gameBoard[6]);
            $('#6, #7, #8').css("background-color","pink");
            gameOver= true;
            if(gameBoard[6]==="x"){xScor=xScor+1;}
             else{oScor=oScor+1;}
        }

        else if(gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6] && gameBoard[0] !== ""){//win
            $("#message").text('Winner: Player '+gameBoard[0]);
            $('#0, #3, #6').css("background-color","pink");
            gameOver= true;
            if(gameBoard[0]==="x"){xScor=xScor+1;}
             else{oScor=oScor+1;}
        }

        else if(gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7] && gameBoard[1] !== ""){//win
            $("#message").text('Winner: Player '+gameBoard[1]);
            $('#1, #4, #7').css("background-color","pink");
            gameOver= true;
            if(gameBoard[1] === "x"){xScor =xScor+1;}
             else{oScor =oScor+1;}
        }

        else if(gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8] && gameBoard[2] !== ""){//win
            $("#message").text('Winner: Player '+gameBoard[2]);
            $('#2, #5, #8').css("background-color","pink");
            gameOver= true;
            if(gameBoard[2]==="x"){xScor=xScor+1;}
             else{oScor=oScor+1;}
        }

        else if(gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8] && gameBoard[0] !== ""){//win
            $("#message").text('Winner: Player '+gameBoard[0]);
            $('#0, #4, #8').css("background-color","pink");
            gameOver= true;
            if(gameBoard[0]==="x"){xScor=xScor+1;}
             else{oScor=oScor+1;}
        }

        else if(gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6] && gameBoard[2] !== ""){//win
            $("#message").text('Winner: Player '+gameBoard[2]);
            $('#2, #4, #6').css("background-color","pink");
            gameOver= true;
            if(gameBoard[2]==="x"){xScor=xScor+1;}
             else{oScor=oScor+1;}

        } else if (numberOfTurns === 9){
            $("#message").text('No winner ');
            $('#0, #1, #2 ,#3, #4, #5 ,#6, #7, #8').css("background-color","#eb088c");
            
        }else{ 
            $("#message").text(player + " turn");
        }
        displayScore(xScor, oScor)
    }


    $('#playAgain input').on('click', function(){
        $(".cell").empty()// remove all the x and o from the html
        gameBoard = [
            "", "", "",
            "", "", "",
            "", "", ""
        ];// reset gamebBoard to be ["",""...]
        player = "x";// reset player to be x
        numberOfTurns = 0;// reset numberOfTurns to 0
        $(".cell").css("background-color", " #e7e7e7")
        gameOver= false;
        $("#message1").text('');
        $("#message").text('');

   });


   $('#newGame input').on('click', function(){
    $(".cell").empty()// remove all the x and o from the html
    gameBoard = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];// reset gamebBoard to be ["",""...]
    player = "x";// reset player to be x
    numberOfTurns = 0;// reset numberOfTurns to 0
    $(".cell").css("background-color", " #e7e7e7")
    gameOver= false;
    $("#message1").text('');
    $("#message").text('');
     xScor=0;
     oScor=0;
     displayScore(xScor, oScor)

});

const displayScore = function(xScore, oScore){
    $("#message2").text(" Player X Score ( "+xScore+" )");
    $("#message3").text(" Player O Score ( "+oScore+" )");
}


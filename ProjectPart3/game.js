var $curImage = " ";
var $curDivid = " ";
var $prevImage = " ";
var $prevDivid = " ";
var $nbrMatches = 0;

$(function(){ 

    $("#container div").click(function(event){
        target = $(event.target);
        $('#messages').html("....Click a square");
        flipCard(this);
    });
    
    var startBtn = document.getElementById("newGame");
    startBtn.addEventListener("click", startGame);
  
});


function flipCard(elem){
    $(elem).children('img').animate({opacity: 1});
    console.log("Test1"); 
    checkForWinner(elem);
}
function startGame(){
    //
    $('#messages').html("Remember the cards....");
    $('#container div').children().animate({opacity: '1' },5000);
    $('#container div').children().animate({opacity: '0'});
    
    console.log("Test2");
}

function checkForWinner(elem){
        if($prevImage === " "){
        $prevImage = $(elem).children('img').attr('src');
        $prevDivid = $(elem).attr('id');
         }
        else if($prevImage !== " ") {
        $curImage = $(elem).children('img').attr('src');
        $curDivid = $(elem).attr('id');
        }
    
    if($curImage !== " " && $prevImage !== " " && $curImage === $prevImage ){
        $('#messages').html("Hurray, You found a match!");
        //reset
        $prevImage = " ";
        $curImage = " ";
        $prevDivid = " ";
        $curDivid = " ";
        $nbrMatches++;
    }
   else if($curImage !== " " && $prevImage !== " " && $curImage !== $prevImage){
        $('#messages').html("Sorry, Not a match!");
        $(elem).children().animate({opacity: '0' });
        //reset
        $curDivid = " ";
        $curImage = " ";
        
    }
    if($nbrMatches === 6){
        $('#messages').show();
        $('#messages').html("All matches found!");
    }
}


//Global area
target = null; // Our target []
window.onload=function() {
    var cols = document.getElementsByClassName("col");
    for( var i=0; i < cols.length; i++){
    cols[i].addEventListener('click', function(e) { // Starts with userTurn when clicked
        e = e || window.event; 
        target = e.target;
            alert(target);
            userTurn();
    }, false);
}

    var reset = document.getElementById("reset");
    reset.addEventListener("click", resetGame);
}

    function userTurn()
    {
        target.innerHTML = "X";
        computerTurn();
        ComputerPosition();
        DetermineWinner("X");
        if(DetermineWinner("X")){
            document.getElementById("message").innerHTML = "User Wins!"
        }
    }
    
    //function provided. Add parameter(s) if needed
    function computerTurn()
    {      
       var squares = document.getElementsByClassName("col");
        for( var i=0; i < squares.length; i++){
            if(squares[i].innerHTML == " "){
                target.innerHTML = "O";
                break;
            }
        }
        DetermineWinner("O");
    }
    function ComputerPosition(){
        var columns = document.getElementsByClassName("col");
        var position = [0,3,2,1,5,6,4,7,8]; // Use this to randomize the computer position
        for(var i=0;i<position.length; i++){
            if(columns[position[i]].innerText==""){
                columns[position[i]].innerText = "O";
                break;
            }
        }
        if(DetermineWinner("O")){ // Change message if computer wins
            document.getElementById("message").innerHTML = "Computer Wins!"
        }
     }
    function DetermineWinner(elem){
        var winningPos =
            [[0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]];

            var cols = document.getElementsByClassName("col");
            for (var x = 0; x < winningPos.length; x++) {

                if (cols[winningPos[x][0]].innerText == elem &&
        
                    cols[winningPos[x][1]].innerText == elem &&
        
                    cols[winningPos[x][2]].innerText == elem) {
        
                        document.getElementById('status').innerText = "Game Over";
        
                        return true; // returns so that we can call the function in both turns
        
                }
        
            }
    }
    function resetGame(){ //reset board
        var squares = document.getElementsByClassName("col");
        for( var i=0; i < squares.length; i++){
            document.location.href = " ";
        }
        document.getElementById('message').innerText = " ";
    }

    
    

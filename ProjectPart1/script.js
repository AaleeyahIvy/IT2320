//Global area
window.onload=function() {
    //Try and use classname to get a group of divs instead of getting them one by one by id
    //if you are writing the same type of code multiple times, you are doing it incorrect
    
    //Attach events using eventlistener here
    var cols = document.getElementsByClassName("col");
    for( var i=0; i < cols.length; i++){
        cols[i++].addEventListener("click", function(){
            userTurn(this);
        }, false )
        cols[i].addEventListener("click", function(){
            computerTurn(this);
        }, true)
    }   
}

    
    /************** Function area *******************/
    //function provided. Add parameter(s) if needed
    function userTurn(input)
    {
         input.innerHTML = "X";
    }
    
    //function provided. Add parameter(s) if needed
    function computerTurn(input)
    {   
        input.innerHTML = "O";
    }


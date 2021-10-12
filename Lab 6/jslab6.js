/*********************************************************************/
//Global Area

function createLink(){
    var parent = document.getElementById('parentLink');
    var child = document.createElement('childlink');
    child.href = "http://www.tri-c.edu";
    parent.appendChild(child);
    alert(child.href);

}

function removeLink(){
    var parent =  document.getElementById('parentLink');
    var child = parent.lastElementChild;
    parent.removeChild(child); //Double-click to remove "remove link box"

}

function changeColor(){
    var color =  document.getElementById("box");
    color.style.backgroundColor = 'cyan'; // Box turns cyan

}

function changeSquares(){
    var squareOne = document.getElementsByClassName("square1");

    for(let i = 0; i<squareOne.length; i++){
        squareOne[i].style.backgroundColor = "black";
        squareOne[i].style.color = "white";
    }
    var squareTwo =  document.getElementsByClassName("square2");
    for(let i = 0; i<squareOne.length; i++){
        squareTwo[i].style.backgroundColor = "white";
        squareTwo[i].style.color = "black";
    }
}
function toggleColor(){
    var squareOne = document.getElementsByClassName("square1");

    for(let i = 0; i<squareOne.length; i++){
        squareOne[i].style.backgroundColor = "white";
        squareOne[i].style.color = "black";
    }
    var squareTwo =  document.getElementsByClassName("square2");
    for(let i = 0; i<squareOne.length; i++){
        squareTwo[i].style.backgroundColor = "black";
        squareTwo[i].style.color = "white";
    }
}
function changeShape(){
    var square = document.getElementsByClassName("square1");

    for(let i = 0; i<square.length; i++){
        square[i].style.borderRadius = "100px";
    }
}
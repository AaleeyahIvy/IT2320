/*********************************************************************/
window.onload = function(){
    //DOM related code will be here
    //All event listeners go inside window.onload
    
        var btn1 = document.getElementById("btn1");
        btn1.addEventListener("click", createLink);//function name only; donot use ()
        
        var btn2 = document.getElementById("btn2");
        btn2.addEventListener("click", removeLink);
    
        var btn3 = document.getElementById("btn3");
        btn3.addEventListener("click",changeColor);
    
        var btn4 = document.getElementById("btn4");
        btn4.addEventListener("click",changeSquares);
        btn4.addEventListener("dblclick", toggleColor);
    
        var btn5 = document.getElementById("btn5");
        btn5.addEventListener("click",changeShape);
    
        var btn6 = document.getElementById("btn6");
        btn6.addEventListener("click",changeLinkContent);

        
    
        
        var elems = document.getElementsByClassName("userInput");
        //elems is an array so you need a loop
        //array elements will be accessed by using a subscript ex. elems[i]
        for( var i=0; i < elems.length; i++)
        {
            elems[i].addEventListener("change", function(){
                checkforerrors(this);
            } )
        }
    
        var btns = document.getElementsByClassName("btnA");//4 buttons of class btnA
        for( var k=0; k < btns.length; k++)
        {
            btns[k].addEventListener("click", function(){  
                ChangeContentOfButton(this); //If you clicked on btn1, then this=btn1        
            })
        }
        var squares =  document.getElementsByClassName("square3");
        for( var j=0; j < squares.length; j++){
            squares[j].addEventListener("click", function(){
                changeSquare(this);
            } )
        }
        function changeSquare(btnOrig) {
            btnOrig.style.backgroundColor = "yellow";
        } 
        function ChangeContentOfButton(btnOrig)
        {
            btnOrig.innerHTML = "Active";
            return (btnOrig.id);
        
        }
    }  
//Global Area

function createLink(){
    var parent = document.getElementById('parentLink');
    var child = document.createElement('a');
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
    var color = document.getElementById("box");
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
function changeShape()
{
    var radius = document.getElementById("inputRadius").value;
    
    var box = document.getElementById("box");
    box.style.borderRadius = radius;
}
function changeLinkContent()
{
    var linkContent = document.getElementById("linkContent1").value;

    var link = document.getElementById("link1");//the link that we are changing
    link.href=linkContent;//updated what the link is pointing to
    link.innerHTML = linkContent; //Updated what the link says
}

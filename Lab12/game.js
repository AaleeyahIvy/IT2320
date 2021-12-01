$(function(){ //start on ready!
    var boxSpeed =  50; //speed of box based on position
    var $boxContainer = $('#box').parent(); // container for bounds

    function boxPosition(){  //get position of the container for out of bounds
        var container = {};
        container.top = $('#box').position().top;
        container.left = $('#box').position().left;
        container.right = container.left + $('#box').outerWidth();
        container.bottom = container.top + $('#box').outerHeight();
        return container;
    }

    $('#up').on('click',function(){ //move up
        var Up = boxPosition().top - boxSpeed;

        if(Up < 0){
            Up = 0;
        }
        $('#box').stop().animate({
            top: Up
        });
    });

    $('#down').on('click',function(){ //move down
        var Down = boxPosition().top + boxSpeed;
        if(boxPosition().bottom + boxSpeed > $boxContainer.outerHeight()){
            Down = $boxContainer.outerHeight() - $('#box').outerHeight();
        }
        $('#box').stop().animate({
            top: Down
        });
    });

    $('#left').on('click',function(){ //move left
        var Left = boxPosition().left - boxSpeed;

        if(Left < 0 ){
            Left = 0;
        }
        $('#box').stop().animate({
            left: Left
        });
    });
    
    $('#right').on('click',function(){ //move right
        var Right =  boxPosition().left + boxSpeed;

        if(boxPosition().right + boxSpeed > $boxContainer.outerWidth()){
            Right = $boxContainer.outerWidth() - $('#box').outerWidth();
        }
        $('#box').stop().animate({
            left: Right
        });
    });

    $('#fadein').on('click', function(){ //fade in
        $('#box').stop().fadeIn(100);
    });

    $('#fadeout').on('click', function(){ //fade out
        $('#box').stop().fadeOut(100);
    });

    $('#reset').on('click', function(){ //remove all attributes to reset box
        $('#box').removeAttr('style');
    })

});
    
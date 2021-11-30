$(function(){  //$(document).ready(function(){})
    
   console.log("hello");
   $("#button1").on("click",function(){
      $("#content").parent().css("border","5px darkgreen solid");      
      $("#content").parents().css("color","black");    
   });

   $("#button2").on("click",function(){
      $("#content").parents().css("background-color","lightgreen");    
      $("#content").parents().css("color","white");    
   });

   $("#button3").on("click",function(){
      $("#content").parentsUntil("#level3").css("border","dashed 5px yellow");
      $("#content").parents().css("color","black");    
   });

   $("#button4").on("click",function(){
      //children are elements at a lower level in the hierarchy
      $("#content").children().css("border","3px dotted blue");
      console.log($("#content").children().length);
   });

   $("#button5").on("click",function(){
      //siblings are elements at the same level in the hierarchy
      $("#content").siblings().css("background-color","purple");
      $("#content").siblings().css("color","white");   
   });

   $("#button6").on("click",function(){
      var descendants = $("#content").find("p");//* means all descendants
      descendants.each(function(){
         $(this).css("background-color","lightgreen");
         console.log($(this).html());
      });
   });

   $("#button7").on("click",function(){
      var nextElement = $("#content").next().css("background-color", "yellow");
      $(nextElement).html("Sibling set by next() method");
   });
   $("#button8").on("click",function(){
      var prevElement = $("#content").prev().css("background-color", "grey");
      $(prevElement).html("Sibling set by prev() method");
   });   
   $("#button9").on("click",function(){
      $("#item1").closest("li").css("color", "orange");
   });

   $("#button10").on("click",function(){
      $("ul li").first("li").css("background-color", "red");
   });

   $("#button11").on("click",function(){
      $("ul li").last("li").css("background-color", "red");
   });

   $("#button12").on("click",function(){
      $("ul li").filter("#item2").css("background-color", "red");
   });

   $("#button13").on("click",function(){
      $("ul li").not("#item2").css("background-color", "red");
   });

   $("#button14").on("click",function(){
      $("ul li").slice(1,4).css("background-color", "red");
   });
})
   
  
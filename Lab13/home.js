$(function(){

    $("#button1").on("click", function(){
       
       var url = "https://api.openbrewerydb.org/breweries";
      $.ajax(
        {
          url: url,
          type: "Get",
          success: function(data)
          {
            $("#results").text("");
            console.log(data);
            $.each(data,function(i,item){
              var para = $("<p></p>");
              para.text(item.name +" "+ item.id  +" "+ item.city);
              $("#results").append(para);
           });            
          }
        });
    }); 


    $("#button2").on("click", function(){          
        var searchTerm = $("#searchByCity").val();//query string #1
        var baseUrl = "https://api.openbrewerydb.org/breweries?by_city=";
        
        var sortBy = $("#sortBy").val();//query string #2
        var url = baseUrl + searchTerm + "&sort=-"+sortBy;
        
        $.ajax(
          {
            url: url,
            type: "Get",
            success: function(data)
            {
              $("#results").text("");
              console.log(data);
              $.each(data,function(i,item){
                var para = $("<p></p>");
                para.text(item.name +" "+ item.id  +" "+ item.city);
                $("#results").append(para);
             });                        
            }
          });
    });

     $("#button3").on("click", function(){        
         var baseUrl = "https://api.openbrewerydb.org/breweries/search?query=";
         var searchTerm = $("#searchTerm").val();
         var url = baseUrl + searchTerm;
       
       $.ajax(
           {
            url: url,
            type: "Get",
            success: function(data)
            {
                $("#results").text("");
                console.log(data);
                console.log(url);
                $.each(data,function(i,item){
                    var para = $("<p></p>");
                    para.text(item.name +" "+ item.id  +" "+ item.city);
                    $("#results").append(para);
                });
           }
    });
     })
    $("#button4").on("click", function(){ // You cannot search by id it is depreciated on the site and only goes by odbd_id which is a string
        var baseUrl = "https://api.openbrewerydb.org/breweries?page="; //I used page because id does not work, still does not really result in anything
        var Id = $("#breweryId");
        var url = baseUrl + Id;

        $.ajax(
            {
             url: url,
             type: "Get",
             success: function(data)
             {
                 $("#results").text("");
                 console.log(data);
                 console.log(url);
                 $.each(data,function(i,item){
                     var para = $("<p></p>");
                     para.text(item.name +" "+ item.id  +" "+ item.type);
                     $("#results").append(para);
                 });
            }
     });
    });
    
});
$(".empty").click(function(){
    $(this).css("background-color","white");
});


$(".bomb").click(function(){
    $(this).css("background-color","red");
    $(".message").text("OH NO! YOU FOUND A BOMB! MINUS ONE POINT.");
    
    
});

$(".treasure").click(function(){
    $(this).css("background-color","yellow");
    $(".message").text("YAY! YOU FOUND TREASURE! POINTS FOR YOU!");
   
    
    

});


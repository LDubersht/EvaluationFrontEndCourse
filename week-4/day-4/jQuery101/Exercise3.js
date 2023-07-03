let b1 = $('<div></div>');
b1.addClass("box");
b1.attr('id', 'b1');
let b2 = $('<div></div>');
b2.addClass("box");
b2.attr('id', 'b2');

$("body").append(b1);
$("body").append(b2);


b1.hover(function(){
    $("#b1").css("background-color","#8e44ad");
    $("#b2").css("background-color","red");
} )

b2.hover(function(){
    $("#b1").css("background-color","red");
    $("#b2").css("background-color","#8e44ad");
} )
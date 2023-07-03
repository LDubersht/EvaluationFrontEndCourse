// Spot Check 2
$("h1").css("color", "red");
$(".red-div").css("color", "red");
$("ul li:first-child").css("color", "green");
$("ul li:last-child").css("color", "pink");
$("#brown-div").css("color", "brown");
// Spot Check 3
$("#b1").addClass("box");
$("#b2").addClass("box");
$("#b3").addClass("box");
// Spot Check 4
let t = $('#my-input').val();
$('#my-input').val("Terabyte");
// Spot Check 5
var barcode = $("#dt").data("barcode")  
console.log(barcode) 
var data = $("#dt").data("expirationdate")  
console.log(data) //prints #2980b9
// Spot Check 6
$("#b3").css("background-color", "red")
$("#b3").hover(function () {
    $("#b3").css("background-color", "blue")
})
// Spot Check 7
$("#clk7").on("click", function(){
    alert($("#my-input7").val()) 
} )
// Spot Check 9
$(".feedme").on("click", function(){
    let divCopy = $(this).clone()
    $("body").append(divCopy)
    //Spot Check 11
    divCopy.on("click", function(){
        $(this).remove()
    })
  })
//   Spot Check 10

const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]
for(let name of names){
  $("body").append(`<div>${name.first} ${name.last}</div>`)
}

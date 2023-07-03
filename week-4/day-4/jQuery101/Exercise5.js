const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]

  $.each(fruits , function(index, item) { 
    console.log("item.name: " + item.name);
    console.log("item.color: " + item.color);
    $("#basket").append('<div class="'+item.color+'">'+item.name+'</div>')
  })
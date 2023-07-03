$("#clk").on("click", function(){
    let base = $("#input").val();
    $("#input").val("");
    let li = $('<li>'+base+'</li>');
    $("#list").append(li);
    li.on("click", function(){
        $(this).remove();
    } )
     })
  
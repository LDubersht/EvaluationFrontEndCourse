$(".item").on ("click", function(){
    if ($(this).data("instock")===true){
        let textClick = $(this).text()
        $("body").append("<div class=cart-item>"+textClick+"</div>")
    }
})
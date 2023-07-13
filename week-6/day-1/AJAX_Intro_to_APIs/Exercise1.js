const fetch = function (queryText ,queryType ) {
    let MyURI = 'https://www.googleapis.com/books/v1/volumes?q='+queryType+':'+queryText
    $.ajax({
        method: "GET",
        url: MyURI,
        success: function (data) {
            showData(data.items)

        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

const raise = function(){
    let txtIn = $("input").val()
    
    if ($("#contractISBN").is(":checked")) {
    fetch(txtIn,'ISBN')
    }
    else if ($("#contractTitle").is(":checked")) {
        fetch(txtIn,'title')
    }

}

const showData = function(responseArr) {
    $("#container").empty()
    const source = $('#result-template').html();
    const template = Handlebars.compile(source);
    
    let newHTML = template({responseArr});
    $("#container").append(newHTML);

}
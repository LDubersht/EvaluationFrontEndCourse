const fetch = function (queryText ) {
    let MyURI = 'https://api.giphy.com/v1/gifs/search?api_key=YVphUUyeDgUmbThqdrTGMaTKpvfOfWXL&q='+queryText+'&limit=1'
    $.ajax({
        method: "GET",
        url: MyURI,
        success: function (response) {
            showData(response.data)

        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

const raise = function(){
    let txtIn = $("input").val()
    fetch(txtIn)
}
const showData = function(responseArr) {
    $("#container").empty()
    const source = $('#result-template').html();
    const template = Handlebars.compile(source);
    
    let newHTML = template({responseArr});
    $("#container").append(newHTML);

}
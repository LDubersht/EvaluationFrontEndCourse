const worldURI = "https://random-word-api.herokuapp.com/word"
const bookURI = "https://www.googleapis.com/books/v1/volumes?maxResults=1&q=intitle:"
const gifURI = "https://api.giphy.com/v1/gifs/search?api_key=YVphUUyeDgUmbThqdrTGMaTKpvfOfWXL&limit=1&q="

class APIManager {
    fetch(URI) {
        console.log(URI)
        return axios.get(URI)
    }
}


class Model {
    constructor(){
        this.word = ""
        this.data = {}

        
    }
    loadData(paramWorldURI,paramBookURI){
        return instApiManager.fetch(paramWorldURI)
        .then(data =>{
            this.word = data.data[0]
            return instApiManager.fetch(paramBookURI+this.word)
        })
        .then(data =>{
            this.data["book"] = data.data.items
            return instApiManager.fetch(gifURI+this.word)
        })
        .then(data =>{
            this.data["gif"] = data.data.data[0].images.original.url
            return this.data
        })

    }
}

class Renderer {
    constructor(){
        this.source = $('#result-template').html();
        this.booktemplate = Handlebars.compile(this.source);
        this.source = $('#stickers-container-template').html();
        this.giftemplate = Handlebars.compile(this.source);
        
    }
    render(data) {
        $("#container").empty()
        let book = data["book"]
        let giphyURI = data["gif"]
        
        this.newHTML = this.booktemplate({book});
        $("#container").append(this.newHTML);
        this.newHTML = this.giftemplate({giphyURI});
        $("#container").append(this.newHTML);
    }
}

const instApiManager = new APIManager()
const instRenderer = new Renderer()
const instModeler = new Model()


instModeler.loadData(worldURI,bookURI).then((res) =>{
    instRenderer.render(res) //initial page load
})




$("#get-thing").on("click", function () {
    initialDataPromise = instModeler.loadData(worldURI,bookURI)
    .then(res => {
        instRenderer.render(res) 
    })
})


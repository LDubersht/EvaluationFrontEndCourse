const fetch = function (URI) {
    $.ajax({
        method: "GET",
        url: URI,
        success: function (response) {
            showData(response)

        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

const MyURI = 'https://jsonplaceholder.typicode.com/users'

const showData = function(arr){
    console.log(arr.map(e => {return {email:e.email,companyName:e.company.name}}))
    console.log(arr.filter(e => e.address.zipcode.substring(0, 1)=="5"));
    console.log(arr.filter(e => e.address.zipcode.substring(0, 1)=="5").map(e => {return {id:e.id}}) );
    console.log(arr.filter(e => e.name.substring(0, 1)=="C"));
    console.log(arr.every(e => e.address.city=="South Christy"));
    console.log(arr.find(e => e.address.suite=="Apt. 950").company.name);
    arr.forEach(element => flt(element))
    // console.log(arr.forEach(element => console.log(element)));
}

const flt = function(user) {
    console.log(user.name+' lives in '+user.address.city+', and owns the company '+user.company.name)

}

fetch(MyURI)

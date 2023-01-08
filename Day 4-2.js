
//initialize new XML http request

let xhr = new XMLHttpRequest();

//URL passing as request to methods

xhr.open("GET", "https://restcountries.com/v2/all");


//process the request on server and retrieve the data
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300)
    {
        let data = JSON.parse(this.response);
        for(i in data){
            console.log(`
            ${data[i].flag}
            `)
        }
    }
}

xhr.send();
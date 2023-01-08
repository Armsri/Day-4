
//initialize XML http request
let xhr=new XMLHttpRequest();

//open request and pass URL
xhr.open("GET", "https://restcountries.com/v2/all");

xhr.onload=function(){
    //check status code and open URL
    if(xhr.status>=200 && xhr.status<300){
        let data=JSON.parse(this.response);
        for(i in data){
            console.log(`
            "Country_name": ${data[i].name},
            "Region": ${data[i].region},
            "Sub_region": ${data[i].subregion},
            "populations": ${data[i].population}
            `)
        }

        //console.log(data);
    }
}

xhr.send();
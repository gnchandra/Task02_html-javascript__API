//creating an XHR(XML HTTP Request) Object
var request = new XMLHttpRequest();
//Opening a connection(method, url, true)
request.open("GET",'https://restcountries.eu/rest/v2/all ',true);
//sending a connection
request.send();
//once the server responded postively then we need to proceed
request.onload = function(){
    var data= JSON.parse(this.response); // parsing the json data sent by server as a response 
    
    
console.log("********************************Printing Country Names, Capitals and Flags**********************")
    for(var i=0;i<250;i++)
    {
        console.log((i+1) + ") Country :" + data[i].name);
        console.log("Capital :" + data[i].capital);
        console.log("Flag :" + data[i].flag);
        console.log("=================================================================");
    }
}


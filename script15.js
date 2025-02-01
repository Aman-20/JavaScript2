let apikey = "50523be928a397d1a1b8d93fbde5b4cc";

/* http://api.weatherstack.com/current
    ? access_key = 50523be928a397d1a1b8d93fbde5b4cc
    & query = New York
    */

let p = fetch("http://api.weatherstack.com/current?access_key=50523be928a397d1a1b8d93fbde5b4cc&query=Mumbai");
p.then((response)=>{
    return response.json();
}).then((val)=>{
    console.log(val);
})


//get time and date
let newvar = new Date();
let time = newvar.getTime();
let sec = newvar.getFullYear();
console.log(newvar.toLocaleTimeString());
console.log(newvar.getHours());



//interval in JS
let interval = setInterval(()=>{
    console.log("AMAN");
},1000);

setTimeout(()=>{
    clearInterval(interval);
    console.log("stopped");
},6000);



//window function
let myWindow = window.open("https://google.com");
setTimeout(()=>{
    window.close();
},9000);



//blur function
function removefocus(){
    document.getElementsByClassName("sdk").blur();
}
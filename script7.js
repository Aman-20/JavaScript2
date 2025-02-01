//Handling Error
let a = 10;
let b = 20;

try{
    result = a+b;
    console.log(result);
} catch(error){
    console.log(error);
}

console.log(a+b);


//Below is Asynchronous programming
//Time out function
function hello(){
    console.log("This will print after 3s time delay");
}
setTimeout(hello, 2000);


//a callback function passed as an argument to another function
function calculator(a,b,sumcall){
    sumcall(a,b);
}

function sum(a,b){
    console.log("Sum:",a+b);
}

calculator(1,2,sum);


//Nested Loop
for(i=0; i<5; i++){
    let str = "";
    for(j=0; j<5; j++)
        str = str+j+" ";
    console.log(i,str);
}
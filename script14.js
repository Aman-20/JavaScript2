//class program code template
class className {
    functionName(val){
        this.objectKey =val;
    }
}
let objectName = new className();
objectName.functionName(1);
console.log(objectName);



//prototype in obects 
const object1 = {
    salary: 1000,
    calctax(){
        console.log("tax is 20%");
    }
}
const obect2 = {
    Ename : "Aman",
}
obect2.__proto__= object1;



//constructor in class
class newClass {
    constructor(var1){
        console.log("this is constructor");
        this.name = var1;
    }
}
let newObj = new newClass("Aman");
console.log(newObj);



//use of constructor,inheritance,class code template project
let data = "Hello";
class parent {
    constructor(val){
        console.log("This is a parent constructor");
        this.name = val;
        this.species = "human";
    }
    start(){
        console.log("start");
    }
    viewdata(){
        console.log(data);
    }
}
class child extends parent {
    constructor(val){
        console.log("this is a child constructor");
        super(val);
        this.work = "working";
    }
    stop(){
        console.log("stop");
    }
    editdata(){
        data = "New Hello";
    }
}
let objclass = new parent("Aman");
let objclass2 = new child("teacher");



//nested loop
for(let i=0; i<5; i++){
    let str = "";
    for(let j=0; j<5; j++){
        str = str+j;
    }
    console.log(i,str);
}



//setTimeout method
function funcName(){
    setTimeout(()=>{
        console.log("Hello after 1s");
    }, 1000);
}
funcName();



//callback function
function sum(a,b){
    console.log("sum:",a+b);
}
function substract(a,b){
    console.log("sunstract:",a-b);
}
function calculate(a,b,call){
    call(a,b);
}
calculate(3,5,substract);



//callback hell
function getdata(data,nextdata){
    setTimeout(()=>{
        console.log("data:",data);
        if(nextdata){
            nextdata();
        }
    },3000);
}

getdata(1,()=>{
    console.log("getting data 2...");
    getdata(2,()=>{
        console.log("getting data 3....");
        getdata(3);
    });
});



//promise chain
function funcPromise(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("this is a promise");
            resolve("Success");
            reject("error");
        },3000);
    });
}

let promise1 = funcPromise();
promise1.then((result)=>{
    console.log(result);
    console.log("getting promise Again");

    let promise2 = funcPromise();
    promise2.then((result)=>{ 
        console.log(result);
        console.log("promise end");

    });
});



//asysnc await ---> script11
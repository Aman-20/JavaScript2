//promises is solution to callback hell

/*promise is a object in Js which have 3 state 
1)Pending
2)Resolve
3)Reject      */

let funcName = () =>{
    return new Promise((resolve,reject) => {
        console.log("This is Promise");
        resolve("Success");
        reject("network error");
    })
}

//this function executed when promises fulfilled
let myPromise = funcName();

myPromise.then((result)=>{
    console.log("Fulfilled",result);
});

//this function executed when promises rejected
myPromise.catch((error)=>{
    console.log("rejected",error);
});
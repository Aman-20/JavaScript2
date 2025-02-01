function asynchronous(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data - 1");
            resolve("Success");
        }, 5000);
    });
}

function asynchronous2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data - 2");
            resolve("Success");
        }, 5000);
    });
}

console.log("Fetchig data 1");
let p1 = asynchronous();
p1.then((res)=>{
    //console.log(res);
    console.log("Fetchig data 2");
    let p2 = asynchronous2();
    p2.then((res)=>{
        //console.log(res);
    });
});


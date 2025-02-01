function api(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("wether info");
            resolve("Success");
        },2000);  
    });
}

async function getdata(){
    await api();
    await api();
}


(async function(){
    await api();
    await api();
})();

//IIFE immeditaly invoked function expression
//IIFE is a function that is called immediately as soon aas it is ddefined


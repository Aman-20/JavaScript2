function getdata(data1){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("data:",data1);
            resolve("success");
        }, 5000);
    });
}

getdata(1).then((res)=>{
    getdata(2).then(()=>{
        getdata(3).then(()=>{
            getdata(4).then(()=>{

            });
        });
    });
});

async function getalldata(){
    await getdata(1);
    await getdata(2);
}
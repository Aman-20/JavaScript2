//callback hell (Nested callback forming pyramid structure);

function getdata(data, nextdata){
    setTimeout(()=>{
        console.log("data",data);
        if(nextdata){
            nextdata();
        }
    },2000);
}

getdata(1,()=>{
    console.log("getting data 2......");
    getdata(2,()=>{
        console.log("getting data 3......");
        getdata(3,()=>{
            console.log("getting data 4......");
            getdata(4);
        });
    });
});

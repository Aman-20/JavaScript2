//class is a program code template for creating objects
//object have some variables and function inside it


//class classname
class car {
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    milage(modalName){   //modelName variable me object ka parameter store hoga joki top hai isme
        this.milag = 400;
    }
    funcName(val){
        this.objKey = "object value";
    }
}

//this --> ye class se banne wale object ki property hai
//let objectname = new classname();
let fortuner = new car();
fortuner.milage("top");

let tata = new car();
tata.funcName();

//using this class template we can create different objects

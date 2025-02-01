class classname {
    constructor(variable1, variable2){
        console.log("this is transferred to object even without calling it");
        this.name = variable1;
        this.age = variable2;
    }
}

let object = new classname("Aman",20);

let object2 = new classname();

console.log(object,object2);
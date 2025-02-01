//super keyword is used to call the constructor of its parent class to access the parents properties and method

class parent {
    constructor(val){
        console.log("this is a parent constructor");
        this.name = val;
        this.species = "human";
    }

    eat(){
        console.log("Eat");
    }
}

class child extends parent {
    constructor(val){
        super(val);   //to invoke parent class constuctor
        console.log("this is a child constuctor");
        this.branch = "Learning";
    }

    work(){
        super.eat();
        console.log("work");
    }
}

let object = new child("Aman");
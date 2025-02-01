//inheritance is passing down properties and method from parent class to child class 

class parent{
    hello() {
        console.log("hello");
    }
}

class child extends parent {
    //function
}
let object = new child();


//{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{ Example }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

class person {
    constructor(){
        this.specis = "Human";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("Nothing");
    }
}

class engineer extends person{
    work(){
        console.log("build projects")
    }
}

class doctor extends person {
    work(){
        console.log("treat patient")
    }
}

let Aman = new person();

let AmanObject = new engineer();

let AmanObject2 = new doctor();

//if child and parent have same method then child method will use 
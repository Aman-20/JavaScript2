let data = "Secret Info"

class user {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewdata(){
        console.log(data);
    }
}

class admin extends user {
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        data = "Edited Secret Info";
    }
}

let student1 = new user("Aman","Aman@123");
let student2 = new user("kumar","kumar@123");

let teacher = new admin("techer","teacher@123");

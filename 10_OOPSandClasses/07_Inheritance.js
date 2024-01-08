class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User {  // inheriting the User
    constructor(username, email, password) {
        super(username) // accesing by super keyword without class same work had been done by keyword call
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("anmol", "anmol@gmail.com", "123")

chai.logMe()  // chai which is instance of Teacher can access the properties of User bcz of inheritance

const masalaChai = new User("mittal")

masalaChai.logMe()

console.log(chai instanceof Teacher);

console.log(chai instanceof User);// as Teacher is inheriting User and chai is made from Teacher
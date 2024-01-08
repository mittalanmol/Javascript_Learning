class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {  // noone can access it as we have made it static
        return `123`
    }
}

const anmol = new User("Anmol")
// console.log(anmol.createId()) // can't access the createdId as it is static


//++ Even if a a new class inherits it, it still can't use static property
class Apple extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const apple = new Teacher("iphone", "i@phone.com")
// console.log(apple.createId()); // can't acces as the createdId is static
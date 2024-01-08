class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    //no need to use function keyword to define function inside the class
    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}


const myClass = new User("anmol", "anmol@gmail.com", "123")


console.log(myClass.encryptPassword());

console.log(myClass.changeUsername());

//++++++++++ Behind the Scenes
//+++++++++++++ Agar classes nhi hoti to same above chij hum kaise krte

function User2(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}


User2.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User2.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const myFunction = new User2("mittal", "mittal@gmail.com", "456")

console.log(myFunction.encryptPassword());
console.log(myFunction.changeUsername());
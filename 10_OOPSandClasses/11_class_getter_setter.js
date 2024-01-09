// getter and setter are by-default present in class
// and we can use them in the class to change the behaviour of properties

//+++++ most of the cases getter and setter are used with classes. Tho they can be used with functions and objects too.
class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    //Suppose we want ki user ko password change hoke mile to hum getter and setter ka use krege
    // if we define get to set bhi krna pdega

    get password() { // we need to use the same name of method as that of propert. and get function made use the exiting property as a methid i.e. by ()
        return this._passw.toUpperCase()
    }

    set password(value) {
        this._passw = value // storing as exact in database
    }
    // if we don't chnage the variable name at this._passw. The get and set function will go in race condition
    // we believe if we put _ in front of variable it is considered as private tho it is not fully private

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }
}

const anmol = new User("anmol@mittal.com", "123abc")

console.log(anmol.password);
console.log(anmol.email);
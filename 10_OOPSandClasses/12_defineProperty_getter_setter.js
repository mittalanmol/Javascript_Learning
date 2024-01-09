// getter and setter can be used with the help of function and it will 
// use the definePropertyof objects because function is also a object

function User(email, password) {
    this._email = email;
    this._password = password;
    // in this case it is somewhat mandatory to use _ infront of variable as we are treating them as private and it also saves the race condition
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        }
        ,
        set: function (value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);// here we are just passing the reference and treating them as a variable not a method
console.log(chai.password);
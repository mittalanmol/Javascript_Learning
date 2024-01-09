//getter and setter can be used by objects but so rarely

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

//Factory Function
// User ke base pe ek object create kro and usee tea main rkhdo
const tea = Object.create(User)
console.log(tea.email);
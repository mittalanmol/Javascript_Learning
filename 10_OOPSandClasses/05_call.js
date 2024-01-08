
function setUserName(username) {
    this.username = username
    console.log("called");
}


function createUser(username, email, password) {

    setUserName.call(this, username)
    // here when we call without call keyword the above function doesn't hold it's values in call stack after performig it's execution context
    //So we are using the keyword call to hold the reference and also using the this keyword to again store the context 
    this.email = email;
    this.password = password;

}

const userCalled = new createUser("anmol", "anmol@gmail.com", "123")

console.log(userCalled);
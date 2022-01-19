// document.getElementById("login").onclick = function(event)
//  {
//     document.getElementById("password").select()
// }
// function myFunction() {
//     var x = document.getElementById("password").value;
// }
class Account{
    constructor(params)
    {
        this.login = params.login
        this.password = params.password
    }
}
const Igor = new Account({
    login: "Igor",
    password: "123"
})
const Oleg = new Account({
    login: "Oleg",
    password: "456"
})
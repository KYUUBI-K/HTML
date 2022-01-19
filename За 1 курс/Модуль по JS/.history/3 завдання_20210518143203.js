document.getElementById("check").onclick = function()
{
    let login = document.getElementById('login');
    let password = document.getElementById('password')
}
document.getElementById("password").select()
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
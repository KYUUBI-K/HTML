document.getElementById("check").onclick = function()
{
    let login = document.getElementById('login').value;
    let password = document.getElementById('password')
}
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
if(login = Oleg.login)
{
    password = Oleg.password
}
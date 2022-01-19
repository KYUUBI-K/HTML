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
        this.value = ''
    }
}
const Igor = new Account({
    login: "Igor",
    password: "123",
    value: ''
})
const Oleg = new Account({
    login: "Oleg",
    password: "456",
    value:''
    
})
if(login = Oleg.login)
{
    password = Oleg.password
    //я не розумію як це передавати на html
}
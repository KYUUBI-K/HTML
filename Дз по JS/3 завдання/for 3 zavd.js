document.getElementById('check').onclick=function()
{
    let password = document.getElementById('password').value;
    if(password =='123'){
        alert('correct password');
    }
    else{
        alert('Incorrect password');
    } 
}

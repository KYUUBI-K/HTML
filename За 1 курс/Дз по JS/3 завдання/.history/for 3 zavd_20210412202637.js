alert('123');
document.getElementById('check').onclick=function(value)
{
    let password = document.getElementById('password').value;
    if(password =='sa123'){
        alert('correct password');
    }
    else{
        alert('Incorrect password');
    } 
}

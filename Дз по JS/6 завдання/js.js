var n = prompt("Введіть число n");
if (n!=null)
{
    var x=0;  
    var n1=0; 
    do {
        x++; 
        n1=Math.pow(3,x);
    } while (n1<n);
    if (n1==n)
        alert("Число n = 3 в степені "+x);
    else
        alert("Число n не є степенем числа 3");
}
var x0 = 0;
var x1 =9, x2 = 9;
var number = parseInt(prompt("Введіть число"));
var xn = 0;
for(var i =0;i<number+1;i++)
{
    xn = x2 + 4 * x0;
    x0 = x1;
    x1 = x2;
    x2 = xn;
}
alert(xn);
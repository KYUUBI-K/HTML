var n = prompt("Введите число n",0); /* Спрашиваем число n */
if (n!=null) /* Если не нажали отмену */
{
    var x=0;  /* Степень числа 3 */
    var n1=0; /* Тут будет результат 3 в степени x */
    do { /* Начинаем цикл */
        x++; /* Увеличиваем степень на 1 */
        n1=Math.pow(3,x); /* Считаем сколько это получится */
    } while (n1<n); /* Цикл повторять до тех пор, пока наш результат не станет равен или больше числа n */
    if (n1==n)
        alert("Число n = 3 в степени "+x);
    else
        alert("Число n не является степенью числа 3");
}
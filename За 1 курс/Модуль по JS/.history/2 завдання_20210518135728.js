let arr = [3, 65, 79, 23, 5 ,190]
let s = 0
let k = 0
for(let  i = 0;i<=arr.length;i++)
{   
    if(arr[i]>78)
    {
        k = i
        break;
    }          
}
for(let j =k+1;j<arr.length;j++)
{
    s+=arr[j]
}
alert("2 завдання знаходить суму з масиву елементів після числа більше за 78. [3, 65, 79, 23, 5 ,190] " +s)

let arr = [3, 65, 79, 23, 5 ,190]
let s = 0
let k = 0
for(let  i = 0;i<=arr.length;i++)
{   
    if(arr[i]>78)
    {
        k = i
    }
   

}
alert(k)
for(let j =k;j<arr.length;j++)
{
    s+=arr[j]
}
alert(s)

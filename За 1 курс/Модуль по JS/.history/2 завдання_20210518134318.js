let arr = [3, 65, 79, 23, 5 ,190]
let s = 0
for(let  i = 0;i<=arr.length;i++)
{
    if(arr[i]>78)
    {
        for(let j = i;j<=arr.length;j++)
        {
            s +=arr[j]
        }
        break;
    }
}
alert(s)
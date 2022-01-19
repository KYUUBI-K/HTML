let arr = [3, 65, 79, 23, 5 ,190]
let s = 0
for(let  i = 0;i<arr.length;i++)
{
    if(arr[i,0]>78)
    {
        for(let j = 0;j<arr[i,0];j++)
        {
            s +=arr[j,0]
        }
        break;
    }
}
alert(s)
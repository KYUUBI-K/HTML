let arr = [3, 65, 79, 23, 5 ,190]
let s = 0
for(let  i = 0;i<=arr.length;i++)
{
    
    {
        for(let j = 0;j<=arr.length;j++)
        {
            if(arr[i]>78)
                s +=arr[j]
        }
        break;
    }
}
alert(s)
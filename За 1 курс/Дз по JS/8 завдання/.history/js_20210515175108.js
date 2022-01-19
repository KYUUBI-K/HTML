let arr = ['Іван','Олег','Оля','Таня'];
var i, count = 0, len = arr.length;
function myFunc(){
    for(i = 0; i < len; i++)
        if(arr[i] == 'Іван')
            count++;
    return count;}
alert(count)

const num = Math.ceil(Math.random()*10);
document.write(num)
console.log(num);
const gnum = prompt('Відгадай число від 1 до 5');
if(gnum == num)
    document.write('Вірно');
else
    document.write('не вірно');

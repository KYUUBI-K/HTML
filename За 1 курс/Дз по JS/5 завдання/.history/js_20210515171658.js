const num = Math.ceil(Math.random()*5);
console.log(num);
const gnum = prompt('Відгадай число від 1 до 5');
if(gnum!= num)
    document.write('не вірно,спробуйте ще раз');
    const gnum = prompt('Відгадай число від 1 до 5');
    if(gnum!= num)
    document.write('вірно');
    else
        document.write('Ви програли')
else
    document.write('вірно');

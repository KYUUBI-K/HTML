const num = Math.ceil(Math.random()*5);
console.log(num);
document.write(num)
const gnum = prompt('Відгадай число від 1 до 5');
if(gnum!= num){
    alert('не вірно,спробуйте ще раз');
    const gnum = prompt('Відгадай число від 1 до 5');
    if(gnum!= num)
    alert('Ви програли');
    else
    alert('Ви виграли');}
else{
    alert('Ви виграли');
}


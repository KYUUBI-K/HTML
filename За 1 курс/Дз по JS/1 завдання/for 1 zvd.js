var number = parseInt(prompt("Введіть число кількість комійок по 1 копійці"));
var k = number%100;
var g =(number-k)/100;
alert(g+" грн."+ " "+ k+" копійок");
// function Check_all()
// {
//     document.getElementById("text").innerHTML="Ice-cream, Hot-dog and 2 more";
// }

// function Ice_cream()
// {
//     document.getElementById("text").innerHTML="Ice-cream";
// }

// function Hot_dog()
// {
//     document.getElementById("text").innerHTML="Hot-dog";
// }

// function PopCorn()
// {
//     document.getElementById("text").innerHTML="Popcorn";
// }

// function CooKie()
// {
//     document.getElementById("text").innerHTML="Cookie";
// }
// if(CooKie.apply && PopCorn.apply){
//     document.getElementById("text").innerHTML="Cookie,PopCorn";
// }
var el = document.getElementById('id');

// example using an anonymous function (not recommended):
el.addEventListener('click', function() { alert('hello world'); });
el.addEventListener('click', function() { alert('another event') });
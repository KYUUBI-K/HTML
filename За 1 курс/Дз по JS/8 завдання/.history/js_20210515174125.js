// let arr = ['Іван','Олег','Оля','Таня'];
var myArray = [
    {id: 1, name: 'Вася', age: 21, city: 'Москва'},
    {id: 2, name: 'Коля', age: 22, city: 'Новгород'},
    {id: 3, name: 'Петя', age: 23, city: 'Челябинск'},
    {id: 4, name: 'Саша', age: 24, city: 'Омск'},
    {id: 5, name: 'Ваня', age: 99, city: 'Омск'}
  ];
  
  function filterByCity(arr, city) {
    return arr.filter(function(item, i, arr) {
        return (item.city == city);
    });
  };

  var omsk = filterByCity(myArray, 'Омск');

  console.log(omsk);
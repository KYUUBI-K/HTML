

// function rightTriangle(n) {
//     for (var i = n-1; i <= n; i++) {
//       for (var j = 0 ; j >= i; j--) {
//         document.write('o');
//       }
//       document.write('<br>');
//     }
//   }
//   rightTriangle(7);
  
  let text=0;
  for(let i =0;i<7;i++)
  {
      text +='*';
      document.write(text);
      document.write('<br>');
  }

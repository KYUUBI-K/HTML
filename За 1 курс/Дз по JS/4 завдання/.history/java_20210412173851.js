

// function rightTriangle(n) {
//     for (var j = n - 1; j >= i; j--) {
//     for (var i = 0; i <= n; i++) {
//         document.write('o');
//       }
//       document.write('<br>');
//     }
//   }
//   rightTriangle(7);
function generatePyramid() {
    var totalNumberofRows = 5;
    var arr = new Array();
    for (var i = 1; i <= totalNumberofRows; i++) {
      for (var j = 1; j <= i; j++) {
        arr.push(j);
        console.log(j);
      }
      console.log("\n");
    }
  }
  
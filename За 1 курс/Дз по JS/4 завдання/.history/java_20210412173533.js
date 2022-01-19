

function rightTriangle(20) {
    for (var i = 0; i <= 20; i++) {
      for (var j = 20 - 1; j >= i; j--) {
        document.write('o');
      }
      document.write('<br>');
    }
  }
  rightTriangle(5);
  
  


function rightTriangle(n) {
    for (var i = n-1; i <= n; i++) {
      for (var j = 0 ; j >= i; j--) {
        document.write('o');
      }
      document.write('<br>');
    }
  }
  rightTriangle(7);
  
  
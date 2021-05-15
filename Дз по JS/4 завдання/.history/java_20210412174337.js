

function rightTriangle(n) {
    for (var i = 0; i>n; i++) {
      for (var j = n - 1; j >= i; j--) {
          document.write('o');
        }
        document.write('<br>');
    }
  }
  rightTriangle(7);
  
  
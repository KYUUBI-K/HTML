

function rightTriangle(n) {
    for (var i = 0; i <= n; i++) {
      for (var j = n - 1; j >= i; j--) {
          document.write('<br>');
    }
    document.write('o');
    }
  }
  rightTriangle(7);
  
  
function myFunction(a, b) {
    var copyText = document.getElementById(a);
    
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById(b);
    tooltip.innerHTML = "Skopiowano!";
  }
  
  function outFunc(a) {
    var tooltip = document.getElementById(a);
    tooltip.innerHTML = "Skopiuj do schowka";
  }
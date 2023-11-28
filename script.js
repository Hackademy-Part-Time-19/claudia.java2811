function cambiaColore(random) {
    var caratteri = '0123456789ABCDEF';
    var colore = '#';
    for (var i = 0; i < 6; i++) {
      colore += caratteri[Math.floor(Math.random() * 16)];
    }
    return colore;
  }
  
  function cambiaColoreParagrafi() {
    var paragrafi = document.getElementsByClassName("paragrafo");
    for (var i = 0; i < paragrafi.length; i++) {
      paragrafi[i].style.color = cambiaColore();
    }
  }
  
  function rendeGrassetto() {
    var paragrafi = document.getElementsByClassName("paragrafo");
    for (var i = 0; i < paragrafi.length; i++) {
      paragrafi[i].style.fontWeight = "bold";
    }
  }
  
  function nascondiParagrafi() {
    var paragrafi = document.getElementsByClassName("paragrafo");
    for (var i = 0; i < paragrafi.length; i++) {
      paragrafi[i].style.display = "none";
    }
  }
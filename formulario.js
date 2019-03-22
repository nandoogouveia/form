function myFunction() {
  document.getElementById("myForm").submit();
}


function criarTabela(conteudo) {
  var tabela = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody=document.createElement("tbody");
  var thd=function(i){return (i==0)?"th":"td";};
  for (var i=0;i<conteudo.length;i++) {
    var tr = document.createElement("tr");
    for(var o=0;o<conteudo[i].length;o++){
      var t = document.createElement(thd(i));
      var texto=document.createTextNode(conteudo[i][o]);
      t.appendChild(texto);
      tr.appendChild(t);
    }
    (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
  }
  tabela.appendChild(thead);
  tabela.appendChild(tbody);
  return tabela;
}
document.getElementById("tabela").appendChild(criarTabela([
  ["posição", "time", "pontos"],
  [1,    "Santos",  18],
  [2,    "São Paulo", 15],
  [3,    "Palmeiras",    12],
  [4,    "Corinthians", 0]
]));



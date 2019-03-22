function ola(){
    alert ("oi");
}

function teste(){
    var btn1 = document.getElementById("btn1");
    btn1.setAttribute("onclik","ola()");
}

//evento no click de um botão


function montarTabela(resposta){
    var table = document.createElement("table");
    var thead = document.createElement("th");
    var tro
    var thid = document.createElement("th");
    var thnome = document.createElement("th");
    var thp1 = document.createElement("th");
    var thp2 = document.createElement("th");
    var thmedia = document.createElement("th");
    thid.innerHTML = "ID";
    thnome.innerHTML = "NOME";
    thp1.innerHTML = "P1";
    thp2.innerHTML = "P2";
    thmedia.innerHTML = "MÉDIA";
    var vetObj = resposta.dados;
    var tBody = document.createElement("tbody");
    for (var i = 0; i < vetObj.length; i++);{
        var tdId = document.createElement("td");
         var tdNome = document.createElement("td");
          var tdP1 = document.createElement("td");
           var tdP2 = document.createElement("td");
            var tdMed = document.createElement("td");
            tdId.innerHTML = vetObj[i].id;
            tdNome.innerHTML = vetObj[i].nome;
            tdP1.innerHTML = vetObj[i].P1;
            tdP2.innerHTML = vetObj[i].P2;
            tdMed.innerHTMl = 0.5* (vetObj[i].P1+vetObj[i].P2);
            thead.appendChild(tdId);
            thead.appendChild(tdNome)
            thead.appendChild(tdP1);
            thead.appendChild(tdP2);
            thead.appendChild(tdMed);
            tBody.appendChild(thead);
    }
    thead.appendChild(thid);
    thead.appendChild(thnome);
    thead.appendChild(thp1);
    thead.appendChild(thp2);
    thead.appendChild(thmedia);
    tBody.appendChild(thead);
    tBody.appendChild(tBody);
    var div = document.querySelector(".tabela");
    div.appendChild(table);
    
}

    thead.appendChild(thead);
// pegando os dados da resposta e alimentando os dados


function montarTabela(){
    montarTabela({dados: [  {id:1,nome:"Mayra", p1:6,p2:5}
                            ,{id:2,nome:"Pedro", p1:6,p2:5}
                            ,{id:3,nome:"Wesley", p1:6,p2:5}
                            ,{id:4,nome:"BLA", p1:6,p2:5}
        ]
        
    })
}





function iniciarTabela(){
    
}
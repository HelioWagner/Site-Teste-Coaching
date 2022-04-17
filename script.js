google.charts.load('current', {'packages':['corechart'],'language':'pt'});


function desenharGraficos (){
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','Resultado %');
    tabela.addColumn({type: 'number', role: 'annotation'});
    tabela.addColumn({type: 'string', role: 'style'});
    tabela.addRows([
     
        ['Competência técnico-funcional',competenciaTecFuncional,competenciaTecFuncional,'blue'],
        ['Competência administrativa geral',competenciaAdmGeral,competenciaAdmGeral,'opacity: 0.5; color: red'],
        ['Autonomia e independência',autonomiaIndependencia,autonomiaIndependencia,'red'],
        ['Segurança e estabilidade',segurancaEstabilidade,segurancaEstabilidade,'aqua'],
        ['Criatividade empreendedora',criatividadeEmpreendedora,criatividadeEmpreendedora,'#8904B1'],
        ['Dedicação a uma causa',dedicacaoCausa,dedicacaoCausa,'green'],
        ['Desafio puro',desafioPuro,desafioPuro,'yellow'],
        ['Estilo de vida',estiloVida,estiloVida,'rebeccapurple']
    ]);

    
    let opcoes = {

                              title: 'RESULTADO TESTE ÂNCORA',
                              width: 800,
                              height: 700, 
                              curveType: 'function',
                              pointSize: 20,
                              legend: 'none',
                              bar: {groupWidth: '95%'},
                              backgroundColor: {stroke:'black', fill:'#D3D3D3',
                                                strokeSize: 1}, 
                             //explorer:{maxZoomOut: 2},
                              vAxis: {gridlines:{color:'transparent',count: 2},
                              format: "percent",
                             // gridlines: { count: 2 } 
                                   // title:'teste'
                                },
                             // hAxis: { title:'Mês'}
                        
                }    
                                
       
    let grafico = new google.visualization.ColumnChart(document.getElementById('graficoPizza'));
    grafico.draw(tabela,opcoes);  


    
}

//Declaracoes variaveis
let competenciaTecFuncional 
let competenciaAdmGeral      
let autonomiaIndependencia  
let segurancaEstabilidade     
let criatividadeEmpreendedora
let dedicacaoCausa           
let desafioPuro              
let estiloVida               
let indicesTabela = []  

function Resultado_Avaliacao() {
    indicesTabela = [] 
    for (let i = indicesTabela.length; i > 0; i--) {
        indicesTabela.pop();
      }
    competenciaTecFuncional   = 0;
    competenciaAdmGeral       = 0; 
    autonomiaIndependencia    = 0; 
    segurancaEstabilidade     = 0;
    criatividadeEmpreendedora = 0;
    dedicacaoCausa            = 0;
    desafioPuro               = 0;
    estiloVida                = 0;
    
          
     let resp = document.querySelectorAll('.resposta');
     for (let i = 0; i < resp.length; i++) {
         
        let resposta = resp[i] 
        if (resposta.value === ''){ 
            resposta.focus();
            alert('Deve ser informado todos os campo para obter Resultado da Avaliação.')
            return;

        }

        if (resposta.value > 6){ 
            resposta.focus();
            alert('Deve ser informado valor 1 a 6 nos campo para obter Resultado da Avaliação.')
            return;

        }
        // if (resposta.classList[1] = 'competenciaTecFuncional') {
        //     console.log( resposta.value)
        // }
        

        switch (resposta.classList[1]) {
            case 'competenciaTecFuncional' :
                  competenciaTecFuncional = (competenciaTecFuncional+parseInt(resposta.value.replace('',0)));
                  break;
            case 'competenciaAdmGeral' :
                  competenciaAdmGeral = (competenciaAdmGeral+parseInt(resposta.value.replace('',0)));
                  break;  
            case 'autonomiaIndependencia' :
                  autonomiaIndependencia = (autonomiaIndependencia+parseInt(resposta.value.replace('',0)));
                  break;   
            case 'segurancaEstabilidade' :
                  segurancaEstabilidade = (segurancaEstabilidade+parseInt(resposta.value.replace('',0)));
                  break; 
            case 'criatividadeEmpreendedora' :
                criatividadeEmpreendedora = (criatividadeEmpreendedora+parseInt(resposta.value.replace('',0)));
                  break; 
            case 'dedicacaoCausa' :
                  dedicacaoCausa = (dedicacaoCausa+parseInt(resposta.value.replace('',0)));
                  break; 
            case 'desafioPuro' :
                  desafioPuro = (desafioPuro+parseInt(resposta.value.replace('',0))); 
                  break; 
             default:
                estiloVida = (estiloVida+parseInt(resposta.value.replace('',0)));
                    break;                                             
           
        }  
        
     }

     console.log(indicesTabela);   
     competenciaTecFuncional   = Math.round((competenciaTecFuncional/36)*100);  
     //insereTag('Competência técnico-funcional: '+competenciaTecFuncional+'%')
     
     competenciaAdmGeral       = Math.round((competenciaAdmGeral/36)*100);
    // insereTag('Competência administrativa geral: '+competenciaAdmGeral+'%')
     
     autonomiaIndependencia    = Math.round((autonomiaIndependencia/36)*100);
    // insereTag('Autonomia e independência: '+autonomiaIndependencia+'%')

     segurancaEstabilidade     = Math.round((segurancaEstabilidade/36)*100);
    // insereTag('Segurança e estabilidade: '+segurancaEstabilidade+'%')

     criatividadeEmpreendedora = Math.round((criatividadeEmpreendedora/36)*100);
    // insereTag('Criatividade empreendedora: '+criatividadeEmpreendedora+'%')

     dedicacaoCausa            = Math.round((dedicacaoCausa/36)*100);
    // insereTag('Dedicação a uma causa: '+dedicacaoCausa+'%')

     desafioPuro               = Math.round((desafioPuro/36)*100);
    // insereTag('Desafio puro: '+desafioPuro+'%')

     estiloVida                = Math.round((estiloVida/36)*100);
     //insereTag('Estilo de vida: '+estiloVida+'%')
     indicesTabela.push(["A","Competência técnico-funcional",competenciaTecFuncional])
     indicesTabela.push(["B","Competência administrativa geral",competenciaAdmGeral])
     indicesTabela.push(["C","Autonomia e independência",autonomiaIndependencia])
     indicesTabela.push(["D","Segurança e estabilidade",segurancaEstabilidade])
     indicesTabela.push(["E","Criatividade empreendedora",criatividadeEmpreendedora])
     indicesTabela.push(["F","Dedicação a uma causa",dedicacaoCausa])
     indicesTabela.push(["G","Desafio puro",desafioPuro])
     indicesTabela.push(["H","Estilo de vida",estiloVida])
     removeResultado();
     insereTabela(indicesTabela)
     google.charts.setOnLoadCallback(desenharGraficos);
    // console.log(competenciaTecFuncional);    
}

function insereTag(conteudo) {
     const p = document.createElement("p")
     const result_teste = document.querySelector(".result_teste")     
     p.classList.add("resultado_teste")
     p.innerText = conteudo
    // console.log(p)
     //console.log(conteudo)
     result_teste.insertAdjacentElement("beforeend",p)
}


function insereTabela() {
  let tabela  = document.getElementById('tabela')    
  let tbody   = Tag("tbody")
      tbody.id = "Tabela_resultado"
  let td
  let linhaBody 
  //console.log(indicesTabela)
 // td = Tag("td")
 // td.textContent = indicesTabela[0][0]
 // linhaBody.appendChild(td)
  for (let i =0; i <indicesTabela.length; i++ ) {
      linhaBody = Tag("tr")   
     // linhaBody.appendChild(td)  
      for (let index = 0; index < indicesTabela[i].length; index++) {
          td = Tag("td")
          if (index === 1) {
             td.classList.add("result_coluna")
            } 
          td.textContent = indicesTabela[i][index]
          linhaBody.appendChild(td)
      }      
      tbody.appendChild(linhaBody)
  }  
  tabela.appendChild(tbody)
 }

 function removeResultado() {
    let body = document.getElementById('Tabela_resultado') 
    if (body != null){ 
      body.remove();  
    }
 }

 function Tag(elemento){
      return  document.createElement(elemento)
 }
 




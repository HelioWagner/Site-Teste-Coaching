google.charts.load('current', {'packages':['corechart'],'language':'pt'});

const inputs = document.querySelectorAll('.resposta')

inputs.forEach (input => {
    input.addEventListener('blur', (evento) => {
    //  console.log(evento.target.value)
      if (evento.target.value != ""){
        if ((evento.target.value > 6)||(evento.target.value < 1)) {
            evento.target.value = ""  
            evento.target.focus()          
            alert("Deve ser informado valor entrar 1 e 6")
           
        }
    }  
      
    })
   
})

function desenharGraficos (){
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','Resultado');
    tabela.addColumn({type: 'string', role: 'annotation'});
    tabela.addColumn({type: 'string', role: 'style'});
    tabela.addRows([
     
        ['Competência técnico-funcional',{v:competenciaTecFuncional , f:competenciaTecFuncional+'%'},competenciaTecFuncional+'%','blue'],
        ['Competência administrativa geral',{v:competenciaAdmGeral, f:competenciaAdmGeral+'%'},competenciaAdmGeral+'%','opacity: 0.5; color: red'],
        ['Autonomia e independência',{v:autonomiaIndependencia , f:autonomiaIndependencia+'%'},autonomiaIndependencia+'%','red'],
        ['Segurança e estabilidade',{v:segurancaEstabilidade, f:segurancaEstabilidade+'%'},segurancaEstabilidade+'%','aqua'],
        ['Criatividade empreendedora',{v:criatividadeEmpreendedora, f:criatividadeEmpreendedora+'%'},criatividadeEmpreendedora+'%','#8904B1'],
        ['Dedicação a uma causa',{v:dedicacaoCausa, f:dedicacaoCausa+'%'},dedicacaoCausa+'%','green'],
        ['Desafio puro',{v:desafioPuro, f:desafioPuro+'%'},desafioPuro+'%','yellow'],
        ['Estilo de vida',{v:estiloVida, f: estiloVida+'%'},estiloVida+'%','rebeccapurple']
    ]);
    var formatter = new google.visualization.ArrowFormat();
    formatter.format(tabela, 1);
    
    // let opcoes = {

    //                           title: 'RESULTADO TESTE ÂNCORA',
    //                           width: 500,
    //                           height: 700,          
    //                           annotations: {
    //                             textStyle: {
    //                               fontName: 'Times-Roman',
    //                               fontSize: 2,
    //                               bold: true,
    //                               italic: true,
    //                               // The color of the text.
    //                               color: '#871b47',
    //                               // The color of the text outline.
    //                               auraColor: '#d799ae',
    //                               // The transparency of the text.
    //                               opacity: 0.8
    //                             }
    //                           },                   
    //                           //curveType: 'function',
    //                           isStacked: 'absolute',
    //                           legend: 'none',
    //                           //bar: {groupWidth: '90%'},
    //                          // backgroundColor: {stroke:'black', fill:'white',
    //                          //                   strokeSize: 1}, 
    //                          //explorer:{maxZoomOut: 2},
    //                           hAxis: {gridlines: {count:0},
    //                           format: "#,##0%",
    //                           isStacked: 'percent',
    //                           minValue: 0,
    //                           maxValue: 100,
    //                           ticks: [0, 10, 20, 30, 60,80,100],
                          
    //                             },
    //                          // hAxis: { title:'Mês'}
                        
    //             }     
    var opcoes = {
        title: 'RESULTADO TESTE ÂNCORA',
        height: 400,
        width: 500,
        isStacked: 'absolute',
        bar: {groupWidth: '90%'},
        vAxis: { gridlines: {count:0},
                  annotations: {alwaysOutside:true}
               },
               chartArea:{left:130,top:30,width:'70%',height:'75%'},       
        legend: 'none'
    }   
                                
       
    let grafico = new google.visualization.BarChart(document.getElementById('grafico'));
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
 




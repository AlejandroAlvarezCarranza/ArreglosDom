function generarMatriz(){   
    let hayTabla = document.getElementById("matriz");
    if(hayTabla){
        let nodo=hayTabla.parentNode;
        nodo.removeChild(hayTabla);
    }  
           
    let valorInput = document.getElementById("tam").value;
    if(valorInput<2){
        alert("El valor minimo es 2!");
        valorInput=2;
    }
    let body = document.getElementsByTagName("body")[0];
    let tablaMatriz = document.createElement("table");
    tablaMatriz.setAttribute("id","matriz");
    let fila,celda,textoCelda;

    for(let i = 0;i<valorInput;i++){
        fila = document.createElement("tr");

        for(let j = 0; j<valorInput;j++){
            celda = document.createElement("td");
            textoCelda = document.createElement("input");
            textoCelda.setAttribute("value",0);
            textoCelda.setAttribute("id","matriz"+i+""+j);
            textoCelda.setAttribute("onchange","comprobarTabla("+valorInput+")");
            textoCelda.setAttribute("type","number");
            celda.appendChild(textoCelda);
            fila.appendChild(celda);                    
        }
        tablaMatriz.appendChild(fila);
    }
    comprobarTabla();
    tablaMatriz.setAttribute("border","2");
    body.appendChild(tablaMatriz);
}

function comprobarTabla(tamMatriz){
    let matriz = new Array(tamMatriz);
    for (let i = 0; i < tamMatriz; i++) {
        matriz[i]=new Array(tamMatriz);
        for (let k = 0; k < tamMatriz; k++) {
            matriz[i][k]=document.getElementById("matriz"+i+k).value;
        }
    }

    let esTriangular=true;
    for (let izq = 0; izq < tamMatriz; izq++) {
        for (let der = 0; der < tamMatriz; der++) {
            if(izq>der){
                if(matriz[izq][der]!=0){
                    esTriangular=false;
                }
            }
        }
    }

    let resultado =document.getElementById("comprobacion");
    if(esTriangular){
        resultado.setAttribute("value","La Matriz SI es triangular Superior")
    }else{
        resultado.setAttribute("value","La Matriz NO es triangular Superior")
    }
}
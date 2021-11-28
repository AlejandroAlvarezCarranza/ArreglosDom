function generarTablaPascal(){
    let hayTabla = document.getElementById("pascal");
    if(hayTabla){
        let nodo=hayTabla.parentNode;
        nodo.removeChild(hayTabla);
    }
    let tamPascal = document.getElementById("tam").value;
    if(tamPascal<0){
        alert("el valor minimo es: 0");
    }
    let body = document.getElementsByTagName("body")[0];
    let tabla = document.createElement("table");
    tabla.setAttribute("border","2");
    tabla.setAttribute("id","pascal");
    let fila,registro,texto;
    let primero = new Array(tamPascal);
    let segundo = new Array(tamPascal);
    tamPascal++;
    for(let i=0;i<=tamPascal;i++){
        primero[i]=0;
    }

    primero[1]=1;

    texto = document.createTextNode(primero[1]);
    registro = document.createElement("td");
    fila = document.createElement("tr");
    registro.appendChild(texto);
    fila.appendChild(registro);
    tabla.appendChild(fila);    

    for(let j=2;j<=tamPascal;j++){
        fila = document.createElement("tr");
        for(let k=1;k<=j;k++){
            segundo[k]=primero[k-1]+primero[k];
            texto = document.createTextNode(segundo[k]);
            registro = document.createElement("td");
            registro.appendChild(texto);
            fila.appendChild(registro);
        }

        for(let n=1;n<=j;n++){
            primero[n]=segundo[n];
        }

        tabla.appendChild(fila);
    }
    body.appendChild(tabla);
}
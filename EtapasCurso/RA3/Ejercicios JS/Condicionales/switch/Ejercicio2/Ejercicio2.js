function funcion(){
    var total = prompt("Indique el motno gastado en el establecimiento: ")

/*     if(total <= 100)
        descuento = ""
    else{
        if(total <= 300){
            descuento = "1"
        }
        else{
            if(total <= 599){
                descuento ="2"
            }
            else{
                if(total >= 600){
                    descuento = "3"
                }
            }
        }

    } */
    switch(Number(total)){
        case (Number(total) >= 100):
            Resultado = "1"
            break;
        case (Number(total) >= 300):
            Resultado = "2"
            break;
        case (Number(total) >= 500):
            Resultado = "3"
            break;
        default:
            Resultado = "Su compra no aplica para descuento"
            break;
    }

    document.getElementById("Resultado").innerHTML = Resultado
}
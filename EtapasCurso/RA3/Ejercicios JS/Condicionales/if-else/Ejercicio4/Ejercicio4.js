function alerta(){
    var transporte = prompt("Ingrese el número: ")

    if(transporte == "2"){
        Resultado = "Ha acertado"
    }
    else{
        Resultado = "Se equivocó"
    }

    document.getElementById("Resultado").innerHTML = Resultado
}
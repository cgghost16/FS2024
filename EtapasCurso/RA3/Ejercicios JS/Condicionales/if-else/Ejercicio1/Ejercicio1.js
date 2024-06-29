function alerta(){
    var cantidad = prompt("Ingrese número a validar")

    if(cantidad >= 0){
        Resultado = "La cantidad ingresada es positiva"
    }
    else{
        Resultado = "La cantidad ingresada es negativa"
    }

    document.getElementById("Resultado").innerHTML = Resultado
}
function alerta(){
    var transporte = prompt("Indique la opción de su transporte: \n\n 1 = Auto \n\n 2 = Tren \n\n 3 = Bicicleta \n\n 4 = Motocicleta \n\n 5 = Autobús")

    if(transporte == "2" || transporte == "5"){
        Resultado = "Recuerde llevar cambio para su transporte"
    }
    else{
        Resultado = "Maneje con cuidado, feliz viaje"
    }

    document.getElementById("Resultado").innerHTML = Resultado
}
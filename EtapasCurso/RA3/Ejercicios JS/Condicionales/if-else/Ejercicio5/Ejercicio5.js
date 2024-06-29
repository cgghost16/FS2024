function alerta(){
    let bebida = prompt("Indique la bebida de su elección: \n\n 1 = Vino \n\n 2 = Cerveza \n\n 3 = Refresco \n\n 4 = Agua");

    if(bebida == "1" || bebida == "2"){
        Resultado = "Diríjase a la barra."
    }
    else{
        Resultado = "Diríjase a la tienda."
    }

    document.getElementById("Resultado").innerHTML = Resultado
}
function funcion(){
    let opcion = prompt("Elija una opción del menú: \n\n 1 = Carne \n\n 2 = Pescado \n\n 3 = Verduras")

    switch(opcion){
        case "1":
            Resultado = `Se acompañará su elección con vino tinto como bebida.`
            break;
        case "2":
            Resultado = `Se acompañará su elección con vino blanco como bebida.`
            break;
        case "3":
            Resultado = `Se acompañará su elección con agua como bebida.`
            break;
        default:
            Resultado = "Elja: Carne, pescado o verduras"
            break;
    }

    document.getElementById("Resultado").innerHTML = Resultado
}
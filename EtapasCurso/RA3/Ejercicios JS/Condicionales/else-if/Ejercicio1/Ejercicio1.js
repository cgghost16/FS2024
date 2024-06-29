function funcion(){
    let color = prompt("Ingrese el color de su elección: \n\n  1 = Rojo \n\n 2 = Anaranjado \n\n 3 = Amarillo \n\n 4 = Verde \n\n 5 = Celeste \n\n 6 = Azul")

    if(color =="1"){
        Resultado = "Rojo"
    }
    else{
        if(color =="2"){
            Resultado ="Anaranjado"
        }
        else{
            if(color == "3"){
                Resultado = "Amarillo"
            }
            else{
                if(color == "4"){
                    Resultado = "Verde"
                }
                else{
                    if(color == "5"){
                        Resultado = "Celeste"
                    }
                    else{
                        if(color == "6"){
                            Resultado = "Azul"
                        }
                        else{
                            Resultado = "No ha seleccionado un color válido"
                        }
                    }
                }
            }
        }
    }

    document.getElementById("Resultado").innerHTML = Resultado
}
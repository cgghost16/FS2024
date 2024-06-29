function alerta(){
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad");
    let pais = prompt("Ingrese su país");
    if(edad >= 18){
        console.log(`El nombre es: ${nombre} y es mayor de edad`)
    }
    else{
        console.log(`El nombre es: ${nombre} y es menor de edad`)
    }
}
// EJEMPLO 3 CON ASYNC

// Funcion async sin usar await

async function obtenerNumero(){
    return 42;
}

// Usamo .then() para obtener el valor devuelto 
obtenerNumero().then (numero => {
    console.log("El numero es: ", numero);
});
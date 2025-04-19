// EJEMPLO 2 CON ASYNC

//Funcion que simula una tarea asincrónica usando una promesa
function esperar(ms){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Terminó la espera");
        }, ms);
    });
}

//Funcion async que espera 2 segundos
async function ejecutar() {
    console.log("Esperando 2 segundos.....");
    const resultado = await esperar(2000);
    console.log(resultado); //Esto imprimirá el mensaje de: Terminó la espera 
}

ejecutar();
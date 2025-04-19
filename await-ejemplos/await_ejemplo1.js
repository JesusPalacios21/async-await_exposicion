// EJEMPLO 1 CON AWAIT 

//Funcion que devuelve una promesa que se resuelve despues de 1.5 segundos
function esperar(ms){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Esperamos todo bien!");
        }, ms);
    });
} 

async function ejecutar() {
    console.log("Esperando...");
    const mensaje = await esperar(1500);
    console.log("☺", mensaje);
}

ejecutar();
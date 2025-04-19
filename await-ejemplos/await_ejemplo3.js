// EJEMPLO 3 (Await con multiples tareas)

function iniciarsesion(usuario){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Usuario "${usuario}" ha iniciado sesión...`);
            resolve(usuario);
        }, 1000);
    });
}

function obtenerDatos(usuario) {
    return new Promise (resolve => {
        setTimeout(() => {
            const datos = {
                usuario: usuario,
                favoritos: ["One Piece", "Demon Slayer", "Boku no Hero Academia"]
            };
            console.log("Datos Obtenidos:", datos);
            resolve(datos);
        }, 1500);
    });
}

function mostrarResumen(datos){
    return new Promise (resolve => {
        setTimeout(() => {
            console.log(`Resumen para ${datos.usuario}:`);
            datos.favoritos.forEach((anime, index) => {
                console.log(`   ${index + 1}. ${anime}`);
            });
            resolve();
        }, 1000);
    });
}

async function flujoCompleto(){
    const usuario = await iniciarsesion("LocoPorElAnime565");
    const datos = await obtenerDatos(usuario);
    await mostrarResumen(datos);
    console.log("Proceso Completo.");
}

flujoCompleto();
// EJEMPLO 2 CON AWAIT (Simulación de llamado a una api)
function obtenerUsuario(id){
    return new Promise((resolve, reject) => {
        console.log(`Buscando usuario con ID: ${id}...`);

        setTimeout(() => {
            //Simulemos que si el id es 1 encontramos al usuario
            if(id===1){
                resolve({
                    id: 1,
                    nombre: "Kiara Paredes",
                    correo: "Kiaraparedes@gmail.com",
                });
            }else{
                reject("Usuario no encontrado");
            }
        }, 2000); //Esperamos 2 segundos para hacerlo mas legible
    });
}

// FUncion async que usa await para esperar la respuesta de la API
async function mostrarUsuario(){
    try{
        const usuario = await obtenerUsuario(1); //Aqui esperamos la rspta de la promesa
        console.log("Usuario encontrado:", usuario);
    }catch(error){
        console.log("Error:", error);
    }
}

mostrarUsuario();
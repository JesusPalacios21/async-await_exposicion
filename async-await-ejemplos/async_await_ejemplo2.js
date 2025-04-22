// EJEMPLO 2 CON ASYNC Y AWAIT
//Verificacion de los estados de servidores

function verificarServidor(nombre, tiempoRespuesta) {
    return new Promise(resolve => {
      setTimeout(() => {
        const estaActivo = Math.random() > 0.2; // 80% chance de que esté activo
        resolve({ nombre, estado: estaActivo ? "Activo" : "Inactivo" });
      }, tiempoRespuesta);
    });
  }
  
  async function verificarTodosLosServidores() {
    console.log("Verificando el estado de los servidores...\n");
  
    const servidores = [
      { nombre: "API Usuarios", tiempo: 1200 },
      { nombre: "Base de Datos", tiempo: 1000 },
      { nombre: "Servicio de Email", tiempo: 1500 },
      { nombre: "Frontend", tiempo: 800 },
    ];
  
    const promesas = servidores.map(s =>
      verificarServidor(s.nombre, s.tiempo)
    );
  
    const resultados = await Promise.all(promesas);
  
    resultados.forEach(servidor => {
      console.log(`${servidor.nombre}: ${servidor.estado}`);
    });
  
    console.log("\n Verificación finalizada.");
  }
  
  verificarTodosLosServidores();
  
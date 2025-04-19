// EJEMPLO 1 CON ASYNC

// Esta función se declara con la palabra clave 'async'
async function saludar() {
    return "Holiiii!!!";
  }
  
  // Ejecutamos la función y usamos .then para recibir el resultado
  saludar().then(mensaje => {
    console.log(mensaje); 
  });
  
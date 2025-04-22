// EJEMPLO 1 CON ASYNC Y AWAIT
// Simulacion de un reporte generado

function obtenerVentas() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { producto: "Laptop", cantidad: 3, precio: 1200 },
          { producto: "Mouse", cantidad: 10, precio: 25 },
          { producto: "Monitor", cantidad: 2, precio: 300 }
        ]);
      }, 1500);
    });
  }
  
  function calcularTotal(ventas) {
    return new Promise(resolve => {
      setTimeout(() => {
        const total = ventas.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
        resolve(total);
      }, 1000);
    });
  }
  
  async function generarReporte() {
    console.log("Generando reporte financiero...");
  
    const ventas = await obtenerVentas();
    console.log("Ventas obtenidas:", ventas.length);
  
    const total = await calcularTotal(ventas);
    console.log(`Total de ingresos: $${total.toFixed(2)}`);
  
    console.log("Reporte generado con éxito!.");
  }
  
  generarReporte();
  
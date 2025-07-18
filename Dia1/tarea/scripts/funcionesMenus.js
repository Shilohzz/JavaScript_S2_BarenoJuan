// Función para imprimir el primer menú que debe ver el usuario
function menuPrincipal() {
    console.log(`=============================================
         Simulador de Gasto Diario
=============================================
Seleccione una opción:

1. Registrar nuevo gasto
2. Listar gastos
3. Calcular total de gastos
4. Generar reporte de gastos
5. Salir
=============================================`); 
rtaMenuPrincipal = prompt("Elige una opción con su número:");

}


function listarGastos() {
    console.log(`=============================================
                Listar Gastos
=============================================
Seleccione una opción para filtrar los gastos:

1. Ver todos los gastos
2. Filtrar por categoría
3. Filtrar por rango de fechas
4. Regresar al menú principal
=============================================`); 

rtaListarGastos = prompt("Elige una opción con su número:");
}


// Función para imprimir el menú de calcular el total de gastos
function calcularGastos() {
    console.log(`=============================================
          Calcular Total de Gastos
=============================================
Seleccione el periodo de cálculo:

1. Calcular total diario
2. Calcular total semanal
3. Calcular total mensual
4. Regresar al menú principal
=============================================`); 

rtaCalcularGastos = prompt("Elige una opción con su número:");
}


// Función para imprimir el menú de generar reporte de gastos
function reporteGastos() {
    console.log(`=============================================
           Generar Reporte de Gastos
=============================================
Seleccione el tipo de reporte:
 
1. Reporte diario
2. Reporte semanal
3. Reporte mensual
4. Regresar al menú principal
=============================================`); 

rtaReporteGastos = prompt("Elige una opción con su número:");
}


// Función para preguntar al usuario si desea salir del programa
function salir() {
    console.log("¿Desea salir del programa? (S/N):"); 
}
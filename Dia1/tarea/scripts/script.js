// ¡¡¡FUNCIONES!!!



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

    // CONDICIONALES MENÚ PRINCIPAL
    if (rtaMenuPrincipal == 1) {
        nuevoGasto();
    }
    else if (rtaMenuPrincipal == 2) {
        listarGastos();
    }
    else if (rtaMenuPrincipal == 3) {
        calcularGastos();
    }
    else if (rtaMenuPrincipal == 4) {
        reporteGastos()
    }
    else {
        salir();
    }
}


// Inicializo un JSON en este mismo script
gastos = [];

// Funcion para registrar nuevos datos
function nuevoGasto() {

    // Pedimos al usuario los datos que necesitamos
    cantidad = Number(prompt('Ingresa el monto del gasto: ')); 
    categoria = prompt('Ingresa la categoría: ');
    descripcion = prompt('Ingresa una descripción de tu gasto (opcional):  ');
    saveOrCancel = prompt('Ingrese S para guardar o C para cancelar: ');

    if (saveOrCancel == "S") {
            // Creamos un objeto con los datos necesarios y le asignamos el valor que guardaron las anteriores variables
        gasto = {
            monto : Number(montico),
            categoria : categoriaaa,
            descripcion : descripcionnn
        }

        // Aquí metemos dentro de "gastos" lo que acabamos de obtener en "gasto"
        gastos.push(gasto);


        // Aquí solo imprimimos este mensaje
        console.log("Tu gasto ha sido registrado con éxito!");
    }


    
}


// Función para listar gastos (menú)
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
    
    // CONDICIONALES PARA LISTAR GASTOS
    if (rtaListarGastos == 1) {
        console.log("Estos son todos tus gastos: Nada por el momento")
    }
    else if (rtaListarGastos == 2) {
        listarXCategoria = prompt("Ingresa la categoría que deseas filtrar:")
    }
    else if (rtaListarGastos == 3) {
        listarXFechas1 = prompt("Ingresa la fecha inicial:")
        listarXFechas2 = prompt("Ingresa la fecha final:")
    }
    else {
        console.log("Regresando al menú principal... (Refresca la página)")
    }
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
    
    // CONDICIONALES PARA CALCULAR GASTOS
    if (rtaCalcularGastos == 1) {
        console.log("Este es el total de lo que has gastado hoy: $0")
    }
    else if (rtaCalcularGastos == 2) {
        console.log("Este es el total de tus gastos en la semana: $0")
    }
    else if (rtaCalcularGastos == 3) {
        console.log("Este es el total de tus gastos este mes: $0")
    }
    else {
        console.log("Regresando al menú principal... (Refresca la página)")
    }
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

    // CONDICIONALES PARA REPORTAR GASTOS
    if (rtaReporteGastos == 1) {
        console.log("Tu reporte diario ha sido realizado con éxito")
    }
    else if (rtaReporteGastos == 2) {
        console.log("Tu reporte semanal ha sido realizado con éxito")
    }
    else if (rtaReporteGastos == 3) {
        console.log("Tu reporte mensual ha sido realizado con éxito")
    }
    else {
        console.log("Regresando al menú principal... (Refresca la página)")
    }
}


// Función para preguntar al usuario si desea salir del programa
function salir() {
    rtaSalir = prompt("¿Desea salir del programa? (S/N):");

    // CONDICIONALES PARA SALIR
    if (rtaSalir == "S") {
        console.log("Chauuuu")
    }
    else {
        console.log("Que bueno tenerte aquí. ¿Qué quieres hacer?")
    }
}





//La página va a cargar y lo primero que el usuario ve es este prompt en ventana
rtaMenuPrincipal = prompt( "¿Qué deseas hacer?\n" +
    "1. Registrar nuevo gasto\n" +
    "2. Ver todos los gastos\n" +
    "3. Filtrar gastos por categoría\n" +
    "4. Salir");


// ¡¡¡FUNCIONES!!!

function demoSimulador() {
    booleanito = true

    while (booleanito == true) {
        menuPrincipal();
    }
}


// Función para imprimir el primer menú que debe ver el usuario
function menuPrincipal() {
    rtaMenuPrincipal = prompt(`=============================================
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
        // Funcion para registrar nuevos datos
        // Pedimos al usuario los datos que necesitamos
        montico = (prompt('Ingresa el monto del gasto: '));
        categoriaaa = prompt('Ingresa la categoría: ');
        descripcionnn = prompt('Ingresa una descripción de tu gasto (opcional):  ');
        saveOrCancel = prompt('Ingrese S para guardar o C para cancelar: ');

        if (saveOrCancel == "S") {
            // Creamos un objeto con los datos necesarios y le asignamos el valor que guardaron las anteriores variables
            gasto = {
                monto: montico,
                categoria: categoriaaa,
                descripcion: descripcionnn
            }

            // Aquí metemos dentro de "gastos" lo que acabamos de obtener en "gasto"
            gastos.push(gasto);


            // Aquí solo imprimimos este mensaje
            console.log("Tu gasto ha sido registrado con éxito!", gasto);
        }
        else {
            console.log("Cancelado. Tus gastos fueron:");
            console.log(JSON.stringify(gastos, null, 2));
        }
    }
    else if (rtaMenuPrincipal == 2) {
        rtaListarGastos = prompt(`=============================================
                Listar Gastos
=============================================
Seleccione una opción para filtrar los gastos:

1. Ver todos los gastos
2. Filtrar por categoría
3. Filtrar por rango de fechas
4. Regresar al menú principal
=============================================`);



        // CONDICIONALES PARA LISTAR GASTOS
        if (rtaListarGastos == 1) {
            console.log(`Tus gastos son los siguientes: ` + gastos)
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
    else if (rtaMenuPrincipal == 3) {
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
            console.log("Regresando al menú principal...")
        }
    }
    else if (rtaMenuPrincipal == 4) {
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
    else if (rtaMenuPrincipal == 5) {
        rtaSalir = prompt("¿Desea salir del programa? (S/N):");

        // CONDICIONALES PARA SALIR
        if (rtaSalir == "S") {
            console.log("Chauuuu");
        }
        else {
            console.log("Que bueno tenerte aquí. ¿Qué quieres hacer?")
        }
    }
    else {
        console.log("Ingresa una opción válida...")
    }
}


// Inicializo un JSON en este mismo script
gastos = [];






demoSimulador()





// Inicializamos las listas que contendrán los ingredientes, categorías y demás.
let ingredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
]

let categorias = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
]

let hamburguesas = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
]

let chefs = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]



// Inicializo una bandera para frenar el bucle cuando sea necesario.
booleanito = true;

//Creamos un menú principal que se muestre en forma de prompt, para saber cuál opción desea usar el usuario.
rtaMenuPrincipal = prompt(`1. Ingredientes
2. Categorías
3. Hamburguesas
4. Chefs
`);
 
if (rtaMenuPrincipal == 1) {
    rtaIngredientes = prompt(`
    1. Ver ingredientes 
    2. Añadir Ingredientes
    3. Eliminar ingredientes
    4. Modificar ingredientes`);

    if (rtaIngredientes == 1){
        
        let allIngredientes = ""
        for (let i = 0; i < ingredientes.length; i++) {
            allIngredientes += `\n${i+1} - ${ingredientes[i].nombre} - ${ingredientes[i].descripcion} - ${ingredientes[i].precio} - ${ingredientes[i].stock}`;
            
        }
        alert(allIngredientes);
    }
    else if (rtaIngredientes == 2) {
        let nombreIng = prompt("Ingresa el nombre del ingrediente: ")
        let descripcionIng = prompt("Ingresa una descripción del ingrediente: ")
        let precioIng = parseInt(prompt("Ingresa el precio del ingredente: "))
        let stockIng = parseInt(prompt("Ingresa el stock del ingrediente: "))

        let nuevoIng = {
            nombre: nombreIng,
            descripcion: descripcionIng,
            precio: precioIng,
            stock: stockIng
        }
        
        ingredientes.push(nuevoIng);

        let nuevosIngredientes = `\n Nombre  -  Descripción  -  Precio  -  Stock`
        for (let i = 0; i < ingredientes.length; i++) {
            nuevosIngredientes += `\n${i+1} - ${ingredientes[i].nombre} -  ${ingredientes[i].descripcion} - ${ingredientes[i].precio} - ${ingredientes[i].stock}`;
        }
        alert(nuevosIngredientes)
    }
}


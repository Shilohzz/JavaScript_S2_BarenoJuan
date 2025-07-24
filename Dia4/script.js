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

        alert("Lista de ingredientes actualizada a continuación --->")
        alert(nuevosIngredientes)
    }
    else if (rtaIngredientes == 3) {
        let deleteIng = parseInt(prompt("Ingresa el número del ingrediente a eliminar: ")) - 1

        ingredientes.splice(deleteIng, 1)

        alert(JSON.stringify(ingredientes, null, 2))

        
    }
    else if (rtaIngredientes == 4) {
        let ingModificar = parseInt(prompt("Ingresa el índice del ingrediente a modificar: ")) - 1

        let nombreModificar = prompt("Ingresa el nuevo nombre: ")
        let descripcionModificar = prompt("Ingresa la nueva descripción: ")
        let precioModificar = parseInt(prompt("Ingresa el nuevo precio: "))
        let stockModificar = parseInt(prompt("Ingresa el nuevo stock: "))

        for (let i = 0; i < ingredientes.length; i++) {
            if (i == ingModificar) {
                ingredientes[i].nombre = nombreModificar
                ingredientes[i].descripcion = descripcionModificar
                ingredientes[i].precio = precioModificar
                ingredientes[i].stock = stockModificar

                alert(JSON.stringify(ingredientes, null, 2));
            }
        }
    }
}
else if (rtaMenuPrincipal == 2) {
    let rtaCategorias = prompt(`
        1. Ver categorías
        2. Añadir categorías
        3. Eliminar categorías
        4. Modificar categorías`);
    
    if (rtaCategorias == 1) {
        let listaCategorias = []
        for (let i = 0; i < categorias.length; i++) {
            listaCategorias += `\n ${i+1} ${categorias[i].nombre}  -  ${categorias[i].descripcion}`
        }
        alert(listaCategorias)
    }
    else if (rtaCategorias == 2) {

        let newCategoria = prompt("Ingresa la categoria: ")
        let nuevaDescripcion = prompt("Ingresa la descripción: ")

        let nuevaCategoria = {
            categoria: newCategoria,
            descripcion: nuevaDescripcion
        }

        categorias.push(nuevaCategoria);

        alert(JSON.stringify(categorias, null, 2));
    }
    else if (rtaCategorias == 3) {
        let categoriaDelete = parseInt(prompt("Ingresa el índice de la categoría a eliminar: ")) - 1;
        
        categorias.splice(categoriaDelete, 1);

        alert(JSON.stringify(categorias))
    }
    else if (rtaCategorias == 4) {
        let categoriaModificar = parseInt(prompt("Ingresa el índice de la categoría a modificar: ")) -1;

        let nuevaCategoria = prompt("Ingresa la nueva categoría: ");
        let categoriaDescripcion = prompt("Ingresa una descripción");
        for (let i = 0; i < categorias.length; i++) {
            if (i == categoriaModificar) {
                categorias[i].nombre = nuevaCategoria
                categorias[i].descripcion = categoriaDescripcion

                alert(JSON.stringify(categorias, null, 2));
            }
        }

    }

}


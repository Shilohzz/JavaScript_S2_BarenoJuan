// ####################
// ######DIA 4#########
// ####################
// ####################



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
        let listaCategorias = ""
        for (let i = 0; i < categorias.length; i++) {
            listaCategorias += `${i+1} ${categorias[i].nombre}  -  ${categorias[i].descripcion}\n\n`
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
else if (rtaMenuPrincipal == 3) {
    let rtaHamburguesas = parseInt(prompt(`
        1. Ver hamburguesas
        2. Añadir hamburguesas
        3. Eliminar hamburguesas
        4. Modificar hamburguesas`));

    if (rtaHamburguesas == 1) {

        let allHamburguesas = ""
        for (let i = 0; i < hamburguesas.length; i++) {
            allHamburguesas += `${hamburguesas[i].nombre} \n ${hamburguesas[i].categoria} \n${hamburguesas[i].ingredientes} \n${hamburguesas[i].precio} \n${hamburguesas[i].chef}\n\n`
        }
        alert(allHamburguesas) // Si le pongo JSON.stringify, va a poner texto plano y no me lee mis saltos de línea "\n". Por eso así.
    }    
    else if (rtaHamburguesas == 2) {
        let nombreH = prompt("Ingresa el nombre de la hamburguesa: ");
        let categoriaH = prompt("Ingresa la categoría de la hamburguesa: ");
        let ingredientesH = prompt("Ingresa los ingredientes: ");
        let precioH = parseInt(prompt("Ingresa el precio: "));
        let chefH = prompt("Ingresa el nombre el chef: ");

        let nuevaH = {
            nombre : nombreH,
            categoria: categoriaH,
            ingredientes: ingredientesH,
            precio: precioH,
            chef: chefH
        }

        hamburguesas.push(nuevaH)

        alert(JSON.stringify(hamburguesas))
    }
    else if (rtaHamburguesas == 3) {
        let eliminarH = parseInt(prompt("Ingresa el indice de la hamburguesa a eliminar: ")) -1;

        hamburguesas.splice(eliminarH, 1);

        alert(JSON.stringify(hamburguesas));
    }
    else if (rtaHamburguesas == 4) {
        let modificarH = parseInt(prompt("Ingresa el indice de la hamburguesa a modificar: ")) -1;

        let newNombreH = prompt("Ingresa el nombre de la hamburguesa: ");
        let newCategoriaH = prompt("Ingresa la categoría: ");
        let newIngredientesH = prompt("Ingresa los ingredientes: ");
        let newPrecioH = parseInt(prompt("Ingresa el nuevo precio: "));
        let newChefH = prompt("Ingresa el nuevo chef: ");

        let newH = {
            nombre: newNombreH,
            categoria: newCategoriaH,
            ingredientes: newIngredientesH,
            precio: newPrecioH,
            chef: newChefH
        }
        for (let i = 0; i < hamburguesas.length; i++) {
            if (modificarH == i) {
                hamburguesas[i] = newH
            }
        }
        alert(JSON.stringify(hamburguesas, null, 2));
    }
}
else if (rtaMenuPrincipal == 4) { //Puse eso de abajo así para que se alineara con las otras opciones en el prompt
    let rtaChef = prompt(`        1. Ver Chef 
        2. Añadir Chef
        3. Eliminar Chef
        4. Modificar Chef`);
    

    let allChef = ""
    if (rtaChef == 1) {
        

        for (let i = 0; i < chefs.length; i++) {
            allChef += `${chefs[i].nombre} - ${chefs[i].especialidad}.\n\n`
        }
        alert(allChef);
    }
    else if (rtaChef == 2) {

        let chefsito = prompt("Ingresa el nombre del chef: ");
        let especiality = prompt("Ingresa la especialidad del chef");

        let nuevoChef = {
            nombre: chefsito,
            especialidad:especiality
        }

        chefs.push(nuevoChef);

        alert(JSON.stringify(chefs, null, 2));
    }
    else if (rtaChef == 3) {
        let chefDel = parseInt(prompt("Ingresa el índice del chef a eliminar: ")) -1;

        chefs.splice(chefDel, 1);

        alert(JSON.stringify(chefs, null, 2));
    }
    else if (rtaChef == 4) {
        let nChef = parseInt(prompt("Ingresa el índice del chef a modificar: ")) -1;

        let nombreChef = prompt("Ingresa el nombre del chef: ");
        let especialidaddd = prompt("Ingresa la especialidad del chef: ");

        for (let i = 0; i < chefs.length; i++){
            if (nChef == i) {
                chefs[i].nombre = nombreChef
                chefs[i].especialidad = especialidaddd

                alert(JSON.stringify(chefs, null, 2));
            }
        }
    }
}

// DESARROLLADO POR: JUAN PABLO BAREÑO SIERRA
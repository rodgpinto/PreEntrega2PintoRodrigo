const menu = [
    {
        id: 1,
        calorias: 1500,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Pescado a la plancha con papas al natural",
        plato: "pescado",
        pais: "España",
        precio: 10000,
    },
    {
        id: 2,
        calorias: 1800,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Pescado a pizza",
        plato: "pescado",
        pais: "Italia",
        precio: 12000,
    },
    {
        id: 3,
        calorias: 700,
        aptoVegano: false,
        aptoCeliaco: true,
        contenidoDelPlato: "Pasta al pesto con espinacas",
        plato: "pasta",
        pais: "Italia",
        precio: 7000,
    },
    {
        id: 4,
        calorias: 500,
        aptoVegano: true,
        aptoCeliaco: true,
        contenidoDelPlato: "Tofu con sushi",
        plato: "sushi",
        pais: "Japón",
        precio: 13000,
    },
    {
        id: 5,
        calorias: 800,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Pollo al horno con puré de calabaza",
        plato: "pollo",
        pais: "México",
        precio: 6500,
    },
    {
        id: 6,
        calorias: 1600,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Pollo asado con papas fritas",
        plato: "pollo",
        pais: "México",
        precio: 7500,
    },
    {
        id: 7,
        calorias: 600,
        aptoVegano: true,
        aptoCeliaco: true,
        contenidoDelPlato: "Ensalada de quinoa con palta y frutas tropicales",
        plato: "ensalada",
        pais: "Perú",
        precio: 5000,
    },
    {
        id: 8,
        calorias: 1200,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Hamburguesa de pollo con papas fritas",
        plato: "hamburguesa",
        pais: "Estados Unidos",
        precio: 5000,
    },
    {
        id: 9,
        calorias: 2000,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Hamburguesa con queso cheddar, bacon y salsa barbacoa con papas fritas",
        plato: "hamburguesa",
        pais: "Estados Unidos",
        precio: 7500,
    },
    {
        id: 10,
        calorias: 1000,
        aptoVegano: false,
        aptoCeliaco: true,
        contenidoDelPlato: "Sushi de atún con wasabi",
        plato: "sushi",
        pais: "Japón",
        precio: 13000,
    },
    {
        id: 11,
        calorias: 700,
        aptoVegano: true,
        aptoCeliaco: true,
        contenidoDelPlato: "Ensalada de quinoa con espinacas y nueces",
        plato: "ensalada",
        pais: "Perú",
        precio: 6000,
    },
    {
        id: 12,
        calorias: 1100,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Pizza margherita con queso mozzarella",
        plato: "pizza",
        pais: "Italia",
        precio: 10000,
    },
    {
        id: 13,
        calorias: 1100,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Pizza de queso mozzarella con huevo, morron y jamón",
        plato: "pizza",
        pais: "Italia",
        precio: 11000,
    },
    {
        id: 14,
        calorias: 1300,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Tacos de carne asada con crema",
        plato: "tacos",
        pais: "México",
        precio: 9000,
    },
    {
        id: 15,
        calorias: 1000,
        aptoVegano: false,
        aptoCeliaco: true,
        contenidoDelPlato: "Sushi de salmón con palta",
        plato: "sushi",
        pais: "Japón",
        precio: 15000,
    },
    {
        id: 16,
        calorias: 1200,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Pescado a la plancha con papas al natural y espinacas",
        plato: "pescado",
        pais: "España",
        precio: 13000,
    },
    {
        id: 17,
        calorias: 1100,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Pizza de pepperoni con queso mozzarella",
        plato: "pizza",
        pais: "Italia",
        precio: 10000,
    },
    {
        id: 18,
        calorias: 1000,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Pizza de jamón con queso mozzarella",
        plato: "pizza",
        pais: "Italia",
        precio: 9000,
    },
    {
        id: 19,
        calorias: 1100,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Sushi de atún con palta",
        plato: "sushi",
        pais: "Japón",
        precio: 13000,
    },
    {
        id: 20,
        calorias: 1400,
        aptoVegano: false,
        aptoCeliaco: false,
        contenidoDelPlato: "Tacos de carne asada con crema y queso",
        plato: "tacos",
        pais: "México",
        precio: 14000,
    },
    {
        id: 21,
        calorias: 1900,
        aptoVegano: false,
        aptoCeliaco: true,
        contenidoDelPlato: "Pasta a la bolognesa",
        plato: "pasta",
        pais: "Italia",
        precio: 7500,
    },
    {
        id: 22,
        calorias: 1900,
        aptoVegano: false,
        aptoCeliaco: true,
        contenidoDelPlato: "Pasta con salsa rosa",
        plato: "pasta",
        pais: "Italia",
        precio: 7500,
    },
];

function principal() {
    listaDePlatos(function () {
        platoElegido()
    });

};

function listaDePlatos(callback) {
    let platoLista;
    do {
        alert("Bienvenido/a Coder-Food \n El menú incluye los siguientes platos:\n *Pizza \n *Sushi \n *Tacos \n *Pescado \n *Ensalada \n *Hamburguesa \n *Pollo \n *Pasta \n *Salir");
        platoLista = prompt("Elige un menu");
        if (platoLista !== null) {
            platoLista = platoLista.toLowerCase();
        };
        const menuLista = menu.filter(menu => menu.plato.toLowerCase() === platoLista);
        if (menuLista.length > 0) {
            let mensaje = "Platos relacionados con: " + platoLista + " " + "\n";
            menuLista.forEach(plato => {
                mensaje += "- " + plato.id + " " + plato.contenidoDelPlato + "\n" + "*Apto vegano: " + plato.aptoCeliaco + "\n" + "*Apto celiaco: " + plato.aptoVegano + "\n" + "*Precio: $" + plato.precio + "\n";
            }
            );

            prompt(mensaje);
            callback();
        } else if (platoLista !== "s" && platoLista !== "salir" && platoLista !== "S" && platoLista !== "Salir" && platoLista !== null) {
            alert("El plato no existe, vuelve a elegir un plato");
        };
    } while (platoLista !== "s" && platoLista !== "salir" && platoLista !== "S" && platoLista !== "Salir" && platoLista !== null);

    alert("Saliste");
};
function platoElegido() {
    const preciosPlatosElegidos = [];
    const platosElegidos = [];
    let platoElegido;
    let continuar;
    do {
        platoElegido = Number(prompt("Elige qué te gustaría pedir, utilizando el número del plato"));
        if (!isNaN(platoElegido)) {
            const menuElegido = menu.find(item => item.id === platoElegido);

            if (menuElegido !== undefined) {
                alert("Elegiste: " + menuElegido.contenidoDelPlato + "\nEl precio es de: $" + menuElegido.precio);
                preciosPlatosElegidos.push(menuElegido.precio);
                platosElegidos.push(menuElegido.contenidoDelPlato);

            } else {
                alert("El plato no existe");
            };
        } else { alert("Utiliza el número del plato que quieres pedir") }

        continuar = prompt("¿Deseas elegir otro plato? ('S' o 's' para sí, cualquier otra tecla para no)");

    } while (continuar.toLowerCase() === "s");

    let sumaPreciosMenu = preciosPlatosElegidos.reduce((total, precio) => total + precio, 0);
    let platosFinal = platosElegidos.join(', ');
    if (continuar.toLowerCase() !== "s") {
        alert("Elegiste: " + platosFinal + "." + "\nSuma de precios: $" + sumaPreciosMenu);
        listaDePlatos();
    };
}
principal();




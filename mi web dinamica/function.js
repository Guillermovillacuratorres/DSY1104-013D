const section = document.getElementById("prueba");
console.log(section);

const contenedorCard = document.createElement("div");
contenedorCard.className = "contenedor-card";


productos = [
    {
        "id":1,
        "nombre":"Teclado",
        "imagen":"img/teclado.jpg",
        "precio":"7000"
    },
    {
        "id":2,
        "nombre":"Monitor",
        "imagen":"img/monitor.webp",
        "precio":"500"
    },
    {   "id":3,
        "nombre":"cpu",
        "imagen":"img/cpu.webp",
        "precio":"1500"
    },
]


for (const i of productos) {
    section.appendChild(contenedorCard);

    const nuevoDiv = document.createElement("div");
    nuevoDiv.className = "card";
    contenedorCard.appendChild(nuevoDiv);

    const tituloProducto = document.createElement("h1");
    tituloProducto.textContent = i.nombre;
    nuevoDiv.appendChild(tituloProducto);

    const imgProducto = document.createElement("img");
    imgProducto.src = i.imagen;
    imgProducto.className = "imgProducto";
    nuevoDiv.appendChild(imgProducto);

    const precioProducto = document.createElement("h3");
    precioProducto.textContent = i.precio;
    nuevoDiv.appendChild(precioProducto);

    const btnAgregarCarro = document.createElement("button");
    btnAgregarCarro.textContent = "Agregar al carrito";
    btnAgregarCarro.className = "btn btn-primary mt-3";
    nuevoDiv.appendChild(btnAgregarCarro);

}



function name(params) {
    
}
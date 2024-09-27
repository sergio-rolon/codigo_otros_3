// Se crea array of arrays

const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./bota-negra.jpg",
  },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./zapato-rojo.jpg",
  },
];
// Recuperamos la lista de productos
const li = document.getElementById("lista-de-productos");

// Creamos función para mostrar la lista de productos que se la pase por parámetro
function displayProductos(productos) {
  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute("src", productos[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  }
}

// Función para crear el diseño y mostrar los productos
displayProductos(productos);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
  // Se cambio esta sentencia para que funcionara
  const texto = document.getElementById("txtInput").value;

  const productosFiltrados = filtrado(productos, texto.toLowerCase());

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute("src", productosFiltrados[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  }
};
// función expresada para filtrado de productos con base en búsqueda
// se cambio el paso del parámetro productos
const filtrado = (productos, texto) => {
  return productos.filter(
    (item) => item.tipo.includes(texto) || item.color.includes(texto)
  );
};

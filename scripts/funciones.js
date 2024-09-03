document.addEventListener('DOMContentLoaded', function(){

const productos = [
    {nombre: 'fernert', precio: 4000},
    {nombre: 'whiscola', precio: 4000},
    {nombre: 'gin', precio: 3500},
    {nombre: 'gancia', precio: 3500},
    {nombre: 'lata de cerveza', precio: 2000},
    {nombre: 'miller', precio: 2500},
    {nombre: 'corona', precio: 3000},
    {nombre: 'cosecha', precio: 7000},
    {nombre: 'speed', precio: 2000},
    {nombre: 'cosecha & speed', precio: 9000},
    {nombre: 'gaseosa (variedad)', precio: 1000},
    {nombre: 'agua', precio: 1000}
];

const listaProductos = document.getElementById('lista-productos');
const listaVentas = document.getElementById('lista-ventas');
const totalVentasSpan = document.getElementById('total-ventas');

let totalVentas = 0;


if (!listaProductos) {
  console.error('El elemento lista-productos no se encontró en el DOM.');
  return;
}

productos.forEach((producto) => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;

    li.addEventListener('click', () => {
    const ventaItem = document.createElement('li');
    ventaItem.textContent = `${producto.nombre} - $${producto.precio} - ${new Date().toLocaleTimeString()}`;
    listaVentas.appendChild(ventaItem);

        totalVentas += producto.precio;
        totalVentasSpan.textContent = totalVentas;
      });

      listaProductos.appendChild(li);
    });
});


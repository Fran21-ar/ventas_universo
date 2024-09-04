document.addEventListener('DOMContentLoaded', function(){

const productos = [
    {nombre: 'Fernert', precio: 4000},
    {nombre: 'Whiscola', precio: 4000},
    {nombre: 'Gancia', precio: 3500},
    {nombre: 'Gin Tonic', precio: 3500},
    {nombre: 'Lata de Cerveza', precio: 2000},
    {nombre: 'Miller', precio: 2500},
    {nombre: 'Corona', precio: 3000},
    {nombre: 'Cosecha', precio: 7000},
    {nombre: 'speed', precio: 2000},
    {nombre: 'cosecha & speed', precio: 9000},
    {nombre: 'Dadá', precio: 8000},
    {nombre: 'Los Aroldos', precio: 8000},
    {nombre: 'Smirnoff c/ seven', precio: 3500},
    {nombre: 'Smirnoff c/ speed', precio: 4000},
    {nombre: 'Whisky', precio: 3000},
    {nombre: 'Novecento', precio: 7500},
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


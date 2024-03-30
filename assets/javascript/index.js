let precio = 400000;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

document.getElementById("sumar").onclick = function () {
  sumarCantidad();
};

document.getElementById("restar").onclick = function () {
  restarCantidad();
};

function sumarCantidad() {
  let elementoCantidad = document.querySelector(".cantidad");
  let cantidad = parseInt(elementoCantidad.textContent);
  elementoCantidad.textContent = cantidad + 1;
  actualizarTotal();
}

function restarCantidad() {
  let elementoCantidad = document.querySelector(".cantidad");
  let cantidad = parseInt(elementoCantidad.textContent);
  if (cantidad > 0) {
    elementoCantidad.textContent = cantidad - 1;
    actualizarTotal();
  }
}

function actualizarTotal() {
  let cantidad = parseInt(document.querySelector(".cantidad").textContent);
  let total = precio * cantidad;
  document.querySelector(".valor-total").textContent = total;
  
}





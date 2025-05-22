fetch('https://fakestoreapi.com/carts')
  .then(res => res.json())
  .then(carts => {
    const container = document.getElementById('cartList');
    carts.forEach(cart => {
      const card = document.createElement('div');
      card.className = 'col-md-4 mb-3';
      card.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Carrito #${cart.id}</h5>
            <p class="card-text">Usuario: ${cart.userId}</p>
            <p class="card-text">Fecha: ${cart.date}</p>
            <button class="btn btn-info btn-sm" onclick="verDetalleCarrito(${cart.id})">Mas Informacion</button>
          </div>
        </div>`;
      container.appendChild(card);
    });
  });

function verDetalleCarrito(id) {
  fetch(`https://fakestoreapi.com/carts/${id}`)
    .then(res => res.json())
    .then(cart => {
      const modalBody = document.getElementById('modalCartBody');
      const productos = cart.products.map(p => `
        <li>ID Producto: ${p.productId}, Cantidad: ${p.quantity}</li>
      `).join('');

      modalBody.innerHTML = `
        <p><strong>ID del Carrito:</strong> ${cart.id}</p>
        <p><strong>Usuario:</strong> ${cart.userId}</p>
        <p><strong>Fecha:</strong> ${cart.date}</p>
        <p><strong>Productos:</strong></p>
        <ul>${productos}</ul>
      `;

      const cartModal = new bootstrap.Modal(document.getElementById('modalCart'));
      cartModal.show();
    });
}

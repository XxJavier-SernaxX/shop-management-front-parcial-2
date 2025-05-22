fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('productList');
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'col-md-3 mb-3';
      card.innerHTML = `
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" style="height: 200px; object-fit: contain;">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">$${product.price}</p>
            <button class="btn btn-info btn-sm" onclick="verDetalleProducto(${product.id})">Ver detalle</button>
          </div>
        </div>`;
      container.appendChild(card);
    });
  });

function verDetalleProducto(id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(product => {
      const modalBody = document.getElementById('modalProductBody');
      modalBody.innerHTML = `
        <img src="${product.image}" class="img-fluid mb-3" style="max-height: 200px; object-fit: contain;">
        <h5>${product.title}</h5>
        <p><strong>Precio:</strong> $${product.price}</p>
        <p><strong>Categoría:</strong> ${product.category}</p>
        <p><strong>Descripción:</strong> ${product.description}</p>
      `;
      const productModal = new bootstrap.Modal(document.getElementById('modalProduct'));
      productModal.show();
    });
}

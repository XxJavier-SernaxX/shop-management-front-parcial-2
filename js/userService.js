fetch('https://fakestoreapi.com/users')
  .then(res => res.json())
  .then(users => {
    const container = document.getElementById('userList');
    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'col-md-4 mb-3';
      card.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${user.name.firstname} ${user.name.lastname}</h5>
            <p class="card-text">Email: ${user.email}</p>
            <button class="btn btn-info btn-sm" onclick="verDetalleUsuario(${user.id})">Mas Informacion</button>
          </div>
        </div>`;
      container.appendChild(card);
    });
  });

function verDetalleUsuario(id) {
  fetch(`https://fakestoreapi.com/users/${id}`)
    .then(res => res.json())
    .then(user => {
      const modalBody = document.getElementById('modalUserBody');
      modalBody.innerHTML = `
        <p><strong>Nombre:</strong> ${user.name.firstname} ${user.name.lastname}</p>
        <p><strong>Correo:</strong> ${user.email}</p>
        <p><strong>Teléfono:</strong> ${user.phone}</p>
        <p><strong>Dirección:</strong> ${user.address.city}, ${user.address.street} ${user.address.number}</p>
      `;
      const userModal = new bootstrap.Modal(document.getElementById('modalUser'));
      userModal.show();
    });
}

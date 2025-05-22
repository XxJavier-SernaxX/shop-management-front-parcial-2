document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert('Completa todos los campos.');
    return;
  }

  try {
    const response = await fetch('https://fakestoreapi.com/users');
    const users = await response.json();

    const usuarioEncontrado = users.find(user => user.username === username && user.password === password);

    if (usuarioEncontrado) {
      alert('Inicio de sesión exitoso');
      window.location.href = 'dashboard.html';
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  } catch (error) {
    alert('Error al conectarse con la API.');
    console.error(error);
  }
});
const loginForm = document.querySelector('#login-form');
const formMessage = document.querySelector('.form-message');

loginForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const email = document.querySelector('#email');
	const password = document.querySelector('#password');
	const errors = {
		email: document.querySelector('[data-error-for="email"]'),
		password: document.querySelector('[data-error-for="password"]')
	};

	errors.email.textContent = '';
	errors.password.textContent = '';
	formMessage.textContent = '';

	if (!email.value.trim()) {
		errors.email.textContent = 'Escribe tu correo electronico.';
	} else if (!email.validity.valid) {
		errors.email.textContent = 'Introduce un correo valido.';
	}

	if (!password.value) {
		errors.password.textContent = 'Escribe tu contrasena.';
	} else if (password.value.length < 6) {
		errors.password.textContent = 'Debe tener al menos 6 caracteres.';
	}

	if (email.validity.valid && password.value.length >= 6) {
		formMessage.textContent = 'Formulario listo para iniciar sesion.';
	}
});

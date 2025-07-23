document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    
    // Mostrar/ocultar contraseña
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
    
    // Manejar el envío del formulario
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const remember = document.querySelector('input[name="remember"]').checked;
        
        // Validación simple del lado del cliente
        if (!username || !password) {
            showError('Por favor completa todos los campos');
            return;
        }
        
        // Simulación de autenticación (en producción sería una llamada a tu API)
        authenticateUser(username, password, remember);
    });
    
    // Función de autenticación
    function authenticateUser(username, password, remember) {
        // Aquí normalmente harías una petición a tu backend
        // Esto es solo un ejemplo con credenciales hardcodeadas
        const validCredentials = {
            username: 'admin',
            password: 'admin123' // En producción NUNCA hagas esto
        };
        
        // Simular retraso de red
        setTimeout(() => {
            if (username === validCredentials.username && password === validCredentials.password) {
                // Credenciales correctas
                createSession(username, remember);
                window.location.href = 'dashboard.html';
            } else {
                // Credenciales incorrectas
                showError('Usuario o contraseña incorrectos');
            }
        }, 800);
    }
    
    // Mostrar mensaje de error
    function showError(message) {
        // Aquí podrías implementar un sistema de notificaciones más elegante
        alert(message); // Temporal - reemplazar con UI adecuada
    }
});
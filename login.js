document.addEventListener('DOMContentLoaded', function() {
  // Mostrar/ocultar senha
  const passwordInput = document.querySelector('input[type="password"]');
  const showPasswordBtn = document.createElement('span');
  showPasswordBtn.innerHTML = 'Mostrar Senha';
  showPasswordBtn.style.position = 'absolute';
  showPasswordBtn.style.right = '4px';
  showPasswordBtn.style.top = '130%';
  showPasswordBtn.style.transform = 'translateY(-50%)';
  showPasswordBtn.style.cursor = 'pointer';
  showPasswordBtn.style.userSelect = 'none';
  showPasswordBtn.style.color = '#4CAF50';
  
  passwordInput.parentElement.appendChild(showPasswordBtn);
  
  showPasswordBtn.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          this.innerHTML = 'Mostrar Senha';
      } else {
          passwordInput.type = 'password';
          this.innerHTML = 'Mostrar Senha';
      }
  });

  // Lógica do formulário
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const rememberCheckbox = document.getElementById('remember');
  const popupLogin = document.getElementById('popup-login');
  const popupOverlay = document.getElementById('popup-overlay');

  // Carregar usuário salvo se existir
  const savedUser = localStorage.getItem('savedUser');
  if (savedUser) {
      usernameInput.value = savedUser;
      rememberCheckbox.checked = true;
  }

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      
      if (!username || !password) {
          alert('Por favor, preencha todos os campos.');
          return;
      }
      
      // Salvar usuário se o checkbox estiver marcado
      if (rememberCheckbox.checked) {
          localStorage.setItem('savedUser', username);
      } else {
          localStorage.removeItem('savedUser');
      }
      
      // Mostrar popup
      popupOverlay.style.display = 'block';
      popupLogin.style.display = 'block';
      
      // Redirecionar após 3 segundos
      setTimeout(function() {
          popupOverlay.style.display = 'none';
          popupLogin.style.display = 'none';
          window.location.href = 'pagina.html';
      }, 3000);
  });
});
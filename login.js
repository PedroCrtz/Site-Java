document.querySelectorAll("input[type='password']").forEach((input) => {
    const toggle = document.createElement("button");
    toggle.textContent = "Mostrar Senha";
    toggle.type = "button";
    toggle.style.position = "absolute";
    toggle.style.right = "10px";
    toggle.style.top = "130%";
    toggle.style.transform = "translateY(-50%)";
    toggle.style.background = "transparent";
    toggle.style.border = "none";
    toggle.style.color = "#fff";
    toggle.style.cursor = "pointer";
  
    input.parentElement.appendChild(toggle);
  
    toggle.addEventListener("click", () => {
      input.type = input.type === "password" ? "text" : "password";
    });
  });
  
  const form = document.querySelector("form");
  const nomeField = document.querySelector("input[name='nome'], input[placeholder='Nome']");
  const lembrarInput = document.querySelector(".senha-input");
  
  if (form && nomeField) {
    const nomeSalvo = localStorage.getItem("usuario");
    if (nomeSalvo) nomeField.value = nomeSalvo;
  
    form.addEventListener("submit", () => {
      if (lembrarInput && lembrarInput.checked) {
        localStorage.setItem("usuario", nomeField.value);
      } else {
        localStorage.removeItem("usuario");
      }
  
      localStorage.setItem("nomeUsuario", nomeField.value);
      localStorage.setItem("mostrarSaudacao", "true"); // Ativa popup na próxima página
    });
  }
  
  if (form) {
    form.addEventListener("submit", (e) => {
      const email = form.querySelector("input[type='email']");
      if (email && !email.value.includes("@")) {
        e.preventDefault();
        alert("Por favor, insira um email válido.");
      }
    });
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const fechar = document.getElementById("fechar");
    const mensagem = document.getElementById("mensagem-saudacao");
  
    const deveMostrar = localStorage.getItem("mostrarSaudacao");
  
    if (popup && mensagem && deveMostrar === "true") {
      const nomeUsuario = localStorage.getItem("nomeUsuario") || "visitante";
      const hora = new Date().getHours();
      let saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";
  
      mensagem.textContent = `${saudacao}, ${nomeUsuario}! Bem-vindo ao Automação Hoje 👋`;
  
      popup.style.display = "flex";
      localStorage.removeItem("mostrarSaudacao"); // Evita aparecer novamente
  
      fechar.onclick = () => popup.style.display = "none";
      window.onclick = (e) => {
        if (e.target === popup) popup.style.display = "none";
      };
    }
  });
  
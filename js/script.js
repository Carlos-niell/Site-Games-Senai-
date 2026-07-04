function topo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  const button = document.getElementById("voltar-topo");
  if (window.scrollY > 400) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

function showMessage(message, type = "success", targetId = "site-message") {
  let target = document.getElementById(targetId);
  if (!target) {
    target = document.createElement("div");
    target.id = targetId;
    target.className = "alert alert-success position-fixed bottom-0 end-0 m-3 shadow-lg";
    document.body.appendChild(target);
  }
  target.textContent = message;
  target.className = `alert alert-${type} position-fixed bottom-0 end-0 m-3 shadow-lg`;
  target.style.zIndex = 1050;
  target.style.minWidth = "260px";
  target.classList.remove("d-none");
  setTimeout(() => {
    target.classList.add("d-none");
  }, 3200);
}

function showProduct(name) {
  showMessage(`Você clicou em ${name}. Veja mais detalhes em breve!`, "info");
}

function subscribeNewsletter(event) {
  event.preventDefault();
  const emailInput = document.getElementById("newsletter-email");
  if (emailInput && emailInput.value.trim() !== "") {
    showMessage(`Obrigado! ${emailInput.value} foi inscrito na newsletter.`, "success");
    emailInput.value = "";
  }
}

function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const message = document.getElementById("login-message");

  if (!username || !password) {
    message.className = "alert alert-danger";
    message.textContent = "Por favor, preencha usuário e senha.";
    message.classList.remove("d-none");
    return;
  }

  if (username.toLowerCase() === "jogador" && password === "senai123") {
    message.className = "alert alert-success";
    message.textContent = "Login efetuado com sucesso! Redirecionando para a home...";
    message.classList.remove("d-none");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1600);
  } else {
    message.className = "alert alert-warning";
    message.textContent = "Usuário ou senha incorretos. Tente novamente.";
    message.classList.remove("d-none");
  }
}

function cadastro() {
  const username = document.getElementById("register-username").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value.trim();
  const message = document.getElementById("register-message");

  if (!username || !email || !password) {
    message.className = "alert alert-danger";
    message.textContent = "Preencha todos os campos para criar sua conta.";
    message.classList.remove("d-none");
    return;
  }

  if (password.length < 6) {
    message.className = "alert alert-warning";
    message.textContent = "A senha deve ter pelo menos 6 caracteres.";
    message.classList.remove("d-none");
    return;
  }

  message.className = "alert alert-success";
  message.textContent = `Conta criada com sucesso para ${username}! Faça login agora.`;
  message.classList.remove("d-none");
  document.getElementById("register-form").reset();
}

function toggleCadastro() {
  const form = document.getElementById("form-cadastrar");
  if (form.classList.contains("show")) {
    form.classList.remove("show");
  } else {
    form.classList.add("show");
  }
}

window.addEventListener("DOMContentLoaded", function () {
  const cadastroForm = document.getElementById("form-cadastrar");
  if (cadastroForm) {
    cadastroForm.classList.add("show");
  }
});

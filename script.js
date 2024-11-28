document.addEventListener("DOMContentLoaded", function () {
    // Obter o botão de menu e o menu
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.querySelector(".menu");

    // Alternar a visibilidade do menu quando o botão de menu for clicado
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle('visible'); // Usa a classe 'visible' para alternar a visibilidade
    });

    // Obter o botão de modo escuro
    const modeToggle = document.getElementById("modeToggle");

    // Alternar entre modo escuro e claro
    modeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        modeToggle.textContent = document.body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Escuro";
        modeToggle.setAttribute('aria-pressed', document.body.classList.contains("dark-mode") ? 'true' : 'false');
    });

    // Ajustar o tamanho da fonte
    document.getElementById("increaseFont").addEventListener("click", () => adjustFontSize(2));
    document.getElementById("decreaseFont").addEventListener("click", () => adjustFontSize(-2));

    // Validar o formulário antes de enviá-lo
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        validarFormulario(); 
    });
});

// Ajustar o tamanho da fonte
function adjustFontSize(increment) {
    const body = document.body;
    const currentFontSize = parseFloat(getComputedStyle(body).fontSize);
    const newFontSize = currentFontSize + increment;

    const minFontSize = 14;
    const maxFontSize = 22;

    if (newFontSize >= minFontSize && newFontSize <= maxFontSize) {
        body.style.fontSize = `${newFontSize}px`;
    }
}

// Função de validação do formulário
function validarFormulario() {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const errorDiv = document.getElementById("formError");

    // Verificar se o nome tem pelo menos 3 caracteres
    if (nome.value.length < 3) {
        errorDiv.textContent = "O nome deve ter pelo menos 3 caracteres.";
        return;
    }

    // Validar email com expressão regular
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        errorDiv.textContent = "Por favor, insira um email válido.";
        return;
    }

    errorDiv.textContent = "";
    alert("Formulário enviado com sucesso!");
}

// Alternar entre modo escuro e claro
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Aumentar o tamanho da fonte
const increaseFontSizeButton = document.getElementById('increase-font-size');
increaseFontSizeButton.addEventListener('click', () => {
    let currentFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentFontSize * 1.1) + 'px'; // Aumenta 10% no tamanho da fonte
});

// Diminuir o tamanho da fonte
const decreaseFontSizeButton = document.getElementById('decrease-font-size');
decreaseFontSizeButton.addEventListener('click', () => {
    let currentFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentFontSize * 0.9) + 'px'; // Diminui 10% no tamanho da fonte
});

function openModal(img) {
    // Mostra o modal
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var caption = document.getElementById("modalCaption");
  
    // Define a imagem e a legenda do modal
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = "Você abriu uma imagem";
  
    // Exibe o pop-up de informação
    alert("Você abriu uma imagem!");
  }
  
  // Função para fechar o modal
  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  
  
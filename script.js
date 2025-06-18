document.addEventListener("DOMContentLoaded", function () {
  const botaoAjuda = document.getElementById("botao-ajuda");
  const chat = document.getElementById("chat");
  const fecharChat = document.getElementById("fechar-chat");
  const formChat = document.getElementById("form-chat");
  const inputMensagem = document.getElementById("input-mensagem");
  const areaMensagens = document.getElementById("area-mensagens");

  function adicionarMensagem(texto, autor) {
    const mensagem = document.createElement("p");
    mensagem.textContent = texto;
    mensagem.classList.add("mensagem", autor);
    areaMensagens.appendChild(mensagem);

    areaMensagens.scrollTop = areaMensagens.scrollHeight;
  }

  function abrirChat() {
    chat.classList.add("ativo");
    areaMensagens.innerHTML = "";
    adicionarMensagem("Como podemos te ajudar?", "bot");
    inputMensagem.focus();
  }

  botaoAjuda.addEventListener("click", () => {
    abrirChat();
  });

  fecharChat.addEventListener("click", () => {
    chat.classList.remove("ativo");
  });

  formChat.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = inputMensagem.value.trim();
    if (texto === "") return;

    adicionarMensagem(texto, "usuario");

    inputMensagem.value = "";
    inputMensagem.focus();

    setTimeout(() => {
      adicionarMensagem(
        "Obrigada por compartilhar. Estamos aqui com você.",
        "bot"
      );
      adicionarMensagem("Conte-me o seu relato.", "bot");
    }, 1000);
  });
});






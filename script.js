document.addEventListener("DOMContentLoaded", function() {
  const botaoAjuda = document.getElementById("botao-ajuda");
  const chat = document.getElementById("chat");
  const fecharChat = document.getElementById("fechar-chat");
  const formChat = document.getElementById("form-chat");
  const inputMensagem = document.getElementById("input-mensagem");
  const chatMensagens = document.getElementById("chat-mensagens");

  let mensagensEnviadas = 0;  // Aqui estava faltando um ponto e vírgula no seu código original.

  botaoAjuda.addEventListener("click", function() {
    chat.style.display = "block";
    adicionarMensagem("Como podemos te ajudar?");
  });

  fecharChat.addEventListener("click", function() {
    chat.style.display = "none";
    chatMensagens.innerHTML = "";
    mensagensEnviadas = 0;
  });

  formChat.addEventListener("submit", function(event) {
    event.preventDefault();
    const mensagemUsuario = inputMensagem.value.trim();
    if (mensagemUsuario !== "") {
      adicionarMensagem(mensagemUsuario, true);
      inputMensagem.value = "";
      mensagensEnviadas++;

      if (mensagensEnviadas === 1) {
        setTimeout(function() {
          adicionarMensagem("Obrigada por compartilhar. Estamos aqui com você.");
          adicionarMensagem("Conte-me o seu relato.");
        }, 500);
      } else if (mensagensEnviadas === 2) {
        setTimeout(function() {
          adicionarMensagem("Entendi, estou passando você para uma de nossas atendentes para lhe ajudar com o que vc precisar.");
          adicionarMensagem("Em até 5 minutos você será atendida...");
        }, 500);
      }
    }
  });

  function adicionarMensagem(texto, isUser = false) {
    const novaMensagem = document.createElement("div");
    novaMensagem.classList.add("chat-message");
    if (isUser) {
      novaMensagem.style.textAlign = "right";
      novaMensagem.style.backgroundColor = "#d1f5d3";
      novaMensagem.style.margin = "5px 0";
    } else {
      novaMensagem.style.textAlign = "left";
      novaMensagem.style.backgroundColor = "#f0f0f0";
      novaMensagem.style.margin = "5px 0";
    }
    novaMensagem.textContent = texto;
    chatMensagens.appendChild(novaMensagem);
    chatMensagens.scrollTop = chatMensagens.scrollHeight;
  }
});


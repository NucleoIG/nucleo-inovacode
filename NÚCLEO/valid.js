const text = "Tecnologia • Programação • Redes";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 80);
    }
}

typingEffect();

// Mensagem interativa
function showMessage(tipo) {
    alert("Você clicou em " + tipo + " 🚀\nFuncionalidade será ligada ao sistema.");
}
function login() {
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;

    if(user === "" || pass === "") {
        alert("Preencha todos os campos!");
        return;
    }

   
    alert(`Bem-vindo, ${user}! 🚀`);
}





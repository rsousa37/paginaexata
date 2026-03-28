const curiosidades = [
    "O número 0 foi inventado na Índia por volta do século V.",
    "O Teorema de Pitágoras era conhecido pelos babilônios 1000 anos antes de Pitágoras.",
    "A soma dos ângulos internos de um triângulo é sempre 180°.",
    "O número π (Pi) é irracional, o que significa que suas casas decimais nunca terminam nem se repetem: 3,14159265358979323846..."
];
function mostrarCuriosidade() {
    const elementoTexto = document.getElementById('texto-curiosidade');
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    // Altera o texto na tela
    elementoTexto.textContent = curiosidades[indiceAleatorio];
    elementoTexto.style.color = "#3498db";
    elementoTexto.style.fontWeight = "bold";
}
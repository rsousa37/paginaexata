const { createApp } = Vue
createApp({
  data() {
    return {
      // tituloGaleria: "Exercícios de Geometria",
      curiosidadeAtual: "<strong>Clique no botão para uma curiosidade matemática!</strong>",
      curiosidades: [
        "<strong>O número 0 foi inventado na Índia.</strong",
        "<strong>A soma dos ângulos de um triângulo é 180°.</strong>",
        "<strong>O número Pi (π = 3,14159265358979323846…) tem infinitas casas decimais.</strong>"
      ]
    }
  },
  methods: {
    novaCuriosidade() {
      const indice = Math.floor(Math.random() * this.curiosidades.length);
      this.curiosidadeAtual = this.curiosidades[indice];
    }
  }
}).mount('#app')
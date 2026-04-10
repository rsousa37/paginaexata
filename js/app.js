const { createApp } = Vue
createApp({
  data() {
    return {
      tituloGaleria: "Exercícios de Geometria",
      curiosidadeAtual: "Clique no botão para uma curiosidade matemática!",
      curiosidades: [
        "O número 0 foi inventado na Índia.",
        "Um 'googol' é 1 seguido de 100 zeros.",
        "A soma dos ângulos de um triângulo é 180°.",
        "O Pi (π) tem infinitas casas decimais."
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
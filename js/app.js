const { createApp } = Vue
createApp({
  data() {
    return {
      // tituloGaleria: "Exercícios de Geometria",
      //curiosidadeAtual: "Clique no botão para uma curiosidade matemática!",
      curiosidades: [
        "O número 0 foi inventado na Índia.",
        "A soma dos ângulos de um triângulo é 180°.",
        "O número Pi (π = 3,14159265358979323846…) tem infinitas casas decimais."
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
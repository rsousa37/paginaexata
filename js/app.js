const { createApp } = Vue;

createApp({
  data() {
    return {
      tituloGaleria: "Curiosidade do Dia",
      // Deixe o campo atual vazio, pois o mounted vai preenchê-lo
      curiosidadeAtual: "", 
      curiosidades: [
        "O algarismo do número 0 foi inventado na Índia.",
        "A soma dos ângulos internos de um triângulo é igual 180°.",
        "O número Pi (π = 3,14159265358979323846…) tem infinitas casas decimais mas não é uma dízima periódica."
        "O matemática Euclides pode ter vivido em um período de até um século antes do aceito pela maioria dos estudiosos."
      ]
    }
  },
  // O "segredo" está aqui: esta função roda assim que o site carrega
  mounted() {
    this.novaCuriosidade();
  },
  methods: {
    novaCuriosidade() {
      const indice = Math.floor(Math.random() * this.curiosidades.length);
      this.curiosidadeAtual = this.curiosidades[indice];
    }
  }
}).mount('#app');
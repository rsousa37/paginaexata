const { createApp } = Vue;
createApp({
  data() {
    return {
      tituloGaleria: "Curiosidade do Dia",
      curiosidadeAtual: "", 
      curiosidades: [
        "O algarismo do número 0 foi inventado na Índia.",
        "A soma dos ângulos internos de um triângulo é igual 180°.",
        "O número Pi (π = 3,14159265358979323846…) tem infinitas casas decimais mas não é uma dízima periódica.",
        "O matemático Euclides pode ter vivido em um período de até um século antes do aceito pela maioria dos estudiosos.",
      ],
      // Dados da calculadora
      base: 0,
      altura: 0,
      forma: 'retangulo'
    };
  },
  mounted() {
    this.novaCuriosidade();
  },
  methods: {
    novaCuriosidade() {
      const indice = Math.floor(Math.random() * this.curiosidades.length);
      this.curiosidadeAtual = this.curiosidades[indice];
    }
  },
  computed: {
    resultado() {
      if (this.base <= 0 || this.altura <= 0) return null;
      if (this.forma === 'triangulo') {
        return (this.base * this.altura) / 2;
      } else {
        return this.base * this.altura;
      }
    }
  }
}).mount('#app');
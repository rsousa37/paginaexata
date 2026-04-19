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
      base: 0,
      altura: 0,
      forma: 'retangulo'
      darkMode: false
    };
  },
  mounted() {
    this.novaCuriosidade();
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      // Aplicamos ou removemos a classe diretamente no body do HTML
      if (this.darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    },
  methods: {
    novaCuriosidade() {
      const indice = Math.floor(Math.random() * this.curiosidades.length);
      this.curiosidadeAtual = this.curiosidades[indice];
      this.renderizarMatematica();
    },
    renderizarMatematica() {
      // Função centralizada para chamar o MathJax com segurança
      this.$nextTick(() => {
        if (window.MathJax && window.MathJax.typeset) {
          window.MathJax.typeset();
        }
      });
    }
  },
  watch: {
    // Sempre que a forma ou o resultado mudarem, re-renderiza o LaTeX
    forma() { this.renderizarMatematica(); },
    resultado(novoValor) {
      if (novoValor !== null) {
        this.renderizarMatematica();
      }
    }
  },
  computed: {
    resultado() {
      if (this.base <= 0 || this.altura <= 0) return null;
      return this.forma === 'triangulo' ? (this.base * this.altura) / 2 : this.base * this.altura;
    }
  }
}).mount('#app');
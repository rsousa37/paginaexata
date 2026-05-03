const { createApp } = Vue;
createApp({
  data() {
    return {
      tituloGaleria: "Curiosidade do Dia",
      curiosidadeAtual: "", 
      curiosidades: [
        "O algarismo do número 0 foi inventado na Índia.",
        "A soma dos ângulos internos de um triângulo é igual $180°$.",
        "O número \\( \\pi \\approx 3,141592653589 \\) tem infinitas casas decimais mas não é uma dízima periódica.",
        "O matemático Euclides pode ter vivido em um período de até um século antes do aceito pela maioria dos estudiosos.",
      ],
      base: 0,
      altura: 0,
      forma: 'retangulo', 
      // Inicializa checando se a classe já foi aplicada pelo script do head
      darkMode: localStorage.getItem('theme') === 'dark'
    };
  },
  mounted() {
    this.novaCuriosidade();
    // O tema já foi aplicado pelo script no HEAD, 
    // aqui apenas garantimos que o estado do Vue está sincronizado.
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    }
  },
  methods: { 
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      const theme = this.darkMode ? 'dark' : 'light';
      
      localStorage.setItem('theme', theme);
      
      if (this.darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    },
    novaCuriosidade() {
      const indice = Math.floor(Math.random() * this.curiosidades.length);
      this.curiosidadeAtual = this.curiosidades[indice];
      this.renderizarMatematica();
    },
    renderizarMatematica() {
      this.$nextTick(() => {
        // Usar typesetPromise evita o travamento da UI em celulares
        if (window.MathJax && window.MathJax.typesetPromise) {
          window.MathJax.typesetPromise();
        }
      });
    }
  },
  watch: {
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
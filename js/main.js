document.addEventListener('alpine:init', () => {
  Alpine.data('typewriter', () => ({
    texto: 'Rayie Árabe Gourmet',
    mostrado: '',
    init() {
      let i = 0
      const intervalo = setInterval(() => {
        this.mostrado += this.texto[i]
        i++
        if (i === this.texto.length) clearInterval(intervalo)
      }, 80)
    }
  }))
})
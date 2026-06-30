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
  Alpine.data('carta', () => ({
    carta: [],
    idioma: 'es',

    async cargarCarta() {
      try {
        const response = await fetch('carta.json')
        this.carta = await response.json()
        this.carta = this.carta.categorias
        
        } catch (error) {
          console.error('Error cargando carta:', error)
        }
      }
  }))
})


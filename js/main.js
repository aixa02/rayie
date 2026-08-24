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
    categoriaFiltro: 'todas',
    soloVeggie: false,

    async cargarCarta() {
      try {
        const response = await fetch('carta.json')
        const data = await response.json()
        this.carta = data.categorias
      } catch (error) {
        console.error('Error cargando carta:', error)
      }
    },

    get categoriasFiltradas() {
      return this.carta
        .filter(categoria => this.categoriaFiltro === 'todas' || categoria.id === this.categoriaFiltro)
        .map(categoria => ({
          ...categoria,
          platos: categoria.platos.filter(plato => !this.soloVeggie || plato.veggie)
        }))
        .filter(categoria => categoria.platos.length > 0)
    }
  }))
})


const app = new Vue({
  el: '#app',
  data: {
    currentPage: 0,
    preludeScore: 3,
    communicationScore: 3,
    intimacyScore: 3,
    techniqueScore: 3,
    creativityScore: 3,
    disturbanceScore: 3,
    harmonyScore: 3,
    comments: '',
    questions: [
      { title: 'Vorspiel', emoji: '🍭', property: 'preludeScore' },
      { title: 'Kommunikation', emoji: '👌', property: 'communicationScore' },
      { title: 'Intimität', emoji: '💋', property: 'intimacyScore' },
      { title: 'Technik', emoji: '👆', property: 'techniqueScore' },
      { title: 'Abwechslung und Kreativität', emoji: '👅', property: 'creativityScore' },
      { title: 'Abwesenheit von Störfaktoren', emoji: '🎆', property: 'disturbanceScore' },
      { title: 'Harmonie und Gesamtperformance', emoji: '🎢', property: 'harmonyScore' }
    ]
  },
  methods: {
    setValue (property, event) {
      this[property] = parseInt(event.target.value)
    },
    getProperty (property) {
      return this[property]
    },
    goToNextPage () {
      this.currentPage++
      window.scrollTo(0, 0)
    },
    goToPreviousPage () {
      this.currentPage--
      window.scrollTo(0, 0)
    },
    takeScreenshot () {
      const screenshotWrapper = document.querySelector('.screenshot-wrapper')

      html2canvas(screenshotWrapper).then(function (canvas) {
        canvas.toBlob(blob => {
          const anchor = document.createElement('a')
          anchor.download = 'my-rating-for-you.png'
          anchor.href = URL.createObjectURL(blob)
          anchor.click();
          URL.revokeObjectURL(anchor.href)
        }, 'image/png')
      })
    }
  }
})

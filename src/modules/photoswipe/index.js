import renderUI from './js/Ui'
import Pswp from './js/Pswp'
import Gallery from './js/Example'

export default function() {
  Gallery(6)
  renderUI()
  const galeria = new Pswp('.gallery')
  return galeria.start()
}

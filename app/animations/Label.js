import GSAP from 'gsap'
import Animation from '../classes/Animation'
import { calculate, split } from 'utils/text'

export default class Label extends Animation {
  constructor ({ element, elements }) {
    super({
      element,
      elements
    })

    split({ element: this.element, append: true })
    split({ element: this.element, append: true })

    this.elementLinesSpans = this.element.querySelectorAll('span span')
  }

  animateIn () {
    GSAP.set(this.element, {
      autoAlpha: 1
    })

    GSAP.fromTo(this.elementsLines, {
      y: '150%'
    }, {
      delay: 0.5,
      duration: 1.5,
      ease: 'expo.out',
      stagger: {
        axis: 'y',
        amount: 1
      },
      y: '0%'
    })
  }

  animateOut () {
    GSAP.set(this.element, {
      autoAlpha: 0
    })
  }

  onResize () {
    this.elementsLines = calculate(this.elementLinesSpans)
  }
}

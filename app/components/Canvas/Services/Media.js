import { Mesh, Program } from 'ogl'
import GSAP from 'gsap'

// import Detection from 'classes/Detection'

import vertex from 'shaders/plane-vertex.glsl'
import fragment from 'shaders/plane-fragment.glsl'

export default class Media {
  constructor ({ element, geometry, gl, index, scene, sizes }) {
    this.element = element
    this.gl = gl
    this.geometry = geometry
    this.scene = scene
    this.index = index
    this.sizes = sizes

    this.extra = {
      x: 0,
      y: 0
    }

    this.createTexture()
    this.createProgram()
    this.createMesh()
    this.createBounds({
      sizes: this.sizes
    })
  }

  createTexture () {
    const image = this.element.querySelector('.services__gallery__media__image')

    this.texture = window.TEXTURES[image.getAttribute('data-src')]
  }

  createProgram () {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
        uAlpha: { value: 0 },
        tMap: { value: this.texture }
      },
      transparent: false
    })
  }

  createMesh () {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    })

    this.mesh.setParent(this.scene)
  }

  createBounds ({ sizes }) {
    this.sizes = sizes

    this.bounds = this.element.getBoundingClientRect()

    this.updateScale()
    this.updateX()
    this.updateY()
  }

  // Animations

  show () {
    GSAP.fromTo(
      this.program.uniforms.uAlpha,
      {
        value: 0
      },
      {
        value: 1
      }
    )
  }

  hide () {
    GSAP.to(this.program.uniforms.uAlpha, {
      value: 0
    })
  }

  // Events

  onResize (sizes, scroll) {
    this.extra = 0

    this.createBounds(sizes)
    this.updateX(scroll)
    this.updateY(0)
  }

  // Loop.

  updateRotation () {
    const rotation = GSAP.utils.mapRange(-this.sizes.width / 2, this.sizes.width / 2, Math.PI * 0.08, -Math.PI * 0.08, this.mesh.position.x)
    this.mesh.rotation.z = rotation
  }

  updateScale () {
    this.height = this.bounds.height / window.innerHeight
    this.width = this.bounds.width / window.innerWidth

    this.mesh.scale.x = this.sizes.width * this.width
    this.mesh.scale.y = this.sizes.height * this.height
  }

  updateX (x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth

    this.mesh.position.x = (-this.sizes.width / 2) + (this.mesh.scale.x / 2) + (this.x * this.sizes.width) + this.extra
  }

  updateY (y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight

    // const extra = Detection.isPhone() ? 30 : 80

    this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) - (this.y * this.sizes.height)
    // this.mesh.position.y += Math.cos((this.mesh.position.x / this.sizes.width) * Math.PI * 0.1) * extra - extra
  }

  update (scroll) {
    // this.updateRotation()
    this.updateScale()
    this.updateX(scroll)
    this.updateY(0)
  }
}

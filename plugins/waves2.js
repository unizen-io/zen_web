import * as THREE from 'three'

const vShader = `attribute float scale;

void main() {

    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

    gl_PointSize = scale * ( 300.0 / - mvPosition.z );

    gl_Position = projectionMatrix * mvPosition;

}`

const fShader = `uniform vec3 color;

void main() {

    if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;

    gl_FragColor = vec4( color, 1.0 );

}`

const SEPARATION = 30; const AMOUNTX = 430; const AMOUNTY = 55

let container
let camera, scene, renderer

let particles; let count = 0

// const mouseX = 0; const mouseY = 0

init()
animate()

function init () {
  container = document.createElement('div')
  document.body.appendChild(container)

  camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000)
  camera.position.y = 550 // changes how far back you can see i.e the particles towards horizon
  camera.position.z = 300 // This is how close or far the particles are seen

  camera.rotation.x = 0.15

  scene = new THREE.Scene()

  //

  const numParticles = AMOUNTX * AMOUNTY

  const positions = new Float32Array(numParticles * 3)
  const scales = new Float32Array(numParticles)

  let i = 0; let j = 0

  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2) // x
      positions[i + 1] = 0 // y
      positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) - 10) // z

      scales[j] = 1

      i += 3
      j++
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))
  const material = new THREE.ShaderMaterial({

    uniforms: {
      color: { value: new THREE.Color(0xF1F3F5) }
    },
    vertexShader: vShader,
    fragmentShader: fShader

  })

  //

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  //

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0xFFFFFF, 1)
  container.appendChild(renderer.domElement)

  container.style.touchAction = 'none'

  //

  window.addEventListener('resize', onWindowResize, false)
}

function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

//

//

function animate () {
  requestAnimationFrame(animate)

  render()
}

function render () {
//   camera.position.x += (mouseX - camera.position.x) * 0.05
//   camera.position.y += (-mouseY - camera.position.y) * 0.01
//   camera.lookAt(scene.position)

  const positions = particles.geometry.attributes.position.array
  const scales = particles.geometry.attributes.scale.array

  let i = 0; let j = 0

  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      positions[i + 1] = (Math.sin((ix + count) * 0.20) * 50) + (Math.sin((iy + count) * 0.2) * 20)

      scales[j] = (Math.sin((ix + count) * 0.3) + 2) * 4 + (Math.sin((iy + count) * 0.5) + 2) * 4

      i += 3
      j++
    }
  }

  particles.geometry.attributes.position.needsUpdate = true
  particles.geometry.attributes.scale.needsUpdate = true

  renderer.render(scene, camera)

  count += 0.02
}

import '../style/style.scss'
import * as THREE from 'three'
import * as dat from 'dat.gui'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
  // Save sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
})


/**
 * Environnements
 */

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Test
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
	color: '#9e00ff'
})
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cube)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width, sizes.height)


/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {

	// Elapsed Time
	const elapsedTime = clock.getElapsedTime()

  // Render
  renderer.render(scene, camera)

  // Keep ticking
  window.requestAnimationFrame(tick)
}
tick()
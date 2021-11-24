import './style.css'
import * as THREE from 'three'

console.log(THREE)


// Scene
const scene = new THREE.Scene()

/**
 * Axes Helper
 */
 const axesHelper = new THREE.AxesHelper(2)
 scene.add(axesHelper)

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
//adding position method 1
// mesh.position.x = 0.12
// mesh.position.y = 0.2
// mesh.position.z = 1
mesh.position.set(0.7, - 0.6, 1)//changing the position method2

// mesh.scale.x = 2 setting the scale method 1 
// mesh.scale.y = 0.25
// mesh.scale.z = 0.5 
mesh.scale.set(2,0.25,0.5)// setting the scale method 2 

console.log(mesh.position.length())
console.log(mesh.position.normalize())

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
console.log(mesh.position.distanceTo(camera.position))

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
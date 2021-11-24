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

mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

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

camera.lookAt(new THREE.Vector3(0, - 1, 0))

/**
 * Objects
 */
 const group = new THREE.Group()
 group.scale.y = 2
 group.rotation.y = 0.2
 scene.add(group)
 
 const cube1 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1),
     new THREE.MeshBasicMaterial({ color: 0xff0000 })
 )
 cube1.position.x = - 1.5
 group.add(cube1)
 
 const cube2 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1),
     new THREE.MeshBasicMaterial({ color: 0xffd458 })
 )
 cube2.position.x = 0
 group.add(cube2)
 
 const cube3 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1),
     new THREE.MeshBasicMaterial({ color: 0xff04 })
 )
 cube3.position.x = 1.5
 group.add(cube3)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


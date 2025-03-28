import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';

// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bg") });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Background City Skyline
const cityTexture = new THREE.TextureLoader().load('https://images.unsplash.com/photo-1571974096721-d6fdcfc59f4a');
scene.background = cityTexture;

// Create a 3D House Model
const houseTexture = new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/8/85/Houses_Illustration.png');
const geometry = new THREE.BoxGeometry(3, 2, 2);
const material = new THREE.MeshStandardMaterial({ map: houseTexture });
const house = new THREE.Mesh(geometry, material);
scene.add(house);

// Lighting
const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(5, 5, 5);
scene.add(light);

// Camera Position
camera.position.z = 7;

// Mouse Interaction
document.addEventListener("mousemove", (event) => {
    let x = (event.clientX / window.innerWidth) * 2 - 1;
    let y = -(event.clientY / window.innerHeight) * 2 + 1;
    house.rotation.y = x * 0.5;
    house.rotation.x = y * 0.5;
});

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    house.rotation.y += 0.002;
    renderer.render(scene, camera);
}

animate();

// Responsive Resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

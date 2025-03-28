let scene, camera, renderer, houseModel;

function init3D() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("threeD-canvas"), alpha: true });

    renderer.setSize(window.innerWidth, 400);
    document.getElementById("threeD-container").appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: 0xff416c, wireframe: true });
    houseModel = new THREE.Mesh(geometry, material);
    scene.add(houseModel);

    camera.position.z = 5;
    animate3D();
}

function animate3D() {
    requestAnimationFrame(animate3D);
    houseModel.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function open3DModel(house) {
    if (house === "house1") houseModel.material.color.set(0xff416c);
    if (house === "house2") houseModel.material.color.set(0x4b8bff);
    if (house === "house3") houseModel.material.color.set(0x33ff99);
}

init3D();

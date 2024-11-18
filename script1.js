let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight,.1, 100);
camera.position.z = 5;
scene.add(camera);

let box = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color:"red" });
let mesh = new THREE.Mesh(box, material);
// 3.14  means = 180
// mesh.rotation.y =Math.PI/4 ;
// mesh.rotation.x =Math.PI/4 ;
scene.add(mesh);


const canvas = document.querySelector('canvas');
let renderer = new THREE.WebGLRenderer({ canvas: canvas,antialias:true }); // Corrected here
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera); // picture lena baba baar and print karte ra
let clock = new THREE.Clock(); //app ko start honw se kitna time hua hai
function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera); 
    mesh.rotation.y = clock.getElapsedTime()*4 // speed up
    // mesh.rotation.y += 0.01 // mere me 0.01 60 baar add hoga dependong on my laptop fps
    
}
animate();


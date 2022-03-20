        // Init Scene
        const scene = new THREE.Scene()

        // Init Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        
        // Init Renderer
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)

        //Init Controller
        const controller = new THREE.OrbitControls(camera,document.body)

        // Geometry
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshPhongMaterial({color: 0x00ff00})　// マテリアル
        const cube = new THREE.Mesh(geometry, material) 
        scene.add(cube)
        camera.position.z = 5

        //Light
        const directionalLight = new THREE.DirectionalLight('#aaaaff',1)
        directionalLight.position.set(0,10,10)
        scene.add(directionalLight)

        // Renderer
        function animate() {
          requestAnimationFrame(animate)

          cube.rotation.x +=0.01
          cube.rotation.y +=0.01

          // Update
          controller.update()

          renderer.render(scene, camera)
        }
        animate();

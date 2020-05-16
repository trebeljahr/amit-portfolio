import React, { useEffect, useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  HemisphereLight,
  Box3,
  Vector3,
  DirectionalLight,
  AmbientLight,
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

const Typewriter = () => {
  const mount = useRef(null)
  useEffect(() => {
    var scene = new Scene()
    var renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    mount.current.appendChild(renderer.domElement)
    const camera = new PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      10000
    )
    const ambientIntensity = 0.3
    const ambientColor = 0xffffff
    const directIntensity = 1.2 * Math.PI // TODO(#116)
    const directColor = 0xffffff

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = false
    controls.autoRotateSpeed = -10
    controls.screenSpacePanning = true

    const loader = new GLTFLoader()
    loader.load(
      "/typewriter/scene.gltf",
      gltf => {
        const object = gltf.scene || gltf.scenes[0]
        console.log(gltf)
        const box = new Box3().setFromObject(object)
        const size = box.getSize(new Vector3()).length()
        const center = box.getCenter(new Vector3())
        object.position.x += object.position.x - center.x
        object.position.y += object.position.y - center.y
        object.position.z += object.position.z - center.z
        controls.maxDistance = size * 10
        camera.near = size / 100
        camera.far = size * 100
        camera.updateProjectionMatrix()
        camera.position.copy(center)
        camera.position.x += size / 2.0
        camera.position.y += size / 5.0
        camera.position.z += size / 2.0
        camera.lookAt(center)
        const light1 = new AmbientLight(ambientColor, ambientIntensity)
        light1.name = "ambient_light"
        scene.add(light1)

        const light2 = new DirectionalLight(directColor, directIntensity)
        light2.position.set(0.5, 0, 0.866) // ~60º
        light2.name = "main_light"

        scene.add(light2)
        scene.add(object)
        animate()
      },
      undefined,
      error => {
        console.error(error)
      }
    )

    function animate() {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
  }, [])

  return (
    <div style={{ position: "absolute", top: 0, left: 0 }} ref={mount}></div>
  )
}

export default Typewriter

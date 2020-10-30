import * as React from "react";
import * as THREE from "three";
import { Light, Mesh, PerspectiveCamera, Scene, WebGL1Renderer } from "three";

export interface PalmSceneProps {}

export interface PalmSceneState {}

class PalmScene extends React.Component<PalmSceneProps, PalmSceneState> {
  constructor(props: PalmSceneProps) {
    super(props);
    // * Dummy state
    this.state = { blue: "blue" };

    console.log(props);
    console.log(this.state);
  }

  // * Properties
  camera!: PerspectiveCamera;
  container!: HTMLDivElement;
  cube!: Mesh;
  light!: Light;
  renderer!: WebGL1Renderer;
  scene!: Scene;

  // * -------------------------
  // * Lifecycle Events
  // * -------------------------
  componentDidMount(): void {
    this.init();
  }

  // * -------------------------
  // * Methods
  // * -------------------------
  createObjects(): void {
    this.light = new Light();

    const geometry = new THREE.BoxGeometry(50, 50, 50);
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.position.set(0, 0, 0);
    this.scene.add(this.cube);
  }

  init(): void {
    // * Setup base scene
    console.log("Setting up base scene ...");
    this.setupBaseScene();

    console.log("Creating objects ...");
    this.createObjects();

    console.log("Setting up listeners ...");
    this.setupListeners();

    console.log("Setting up bindings ...");
    this.tick = this.tick.bind(this);
    this.tick();
  }

  setupBaseScene(): void {
    // * Setup Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
    // * Setup Camera
    const height = window.innerHeight;
    const width = window.innerWidth;
    const aspectRatio = width / height;
    const fieldOfView = 60;
    const nearPlane = 1;
    const farPlane = 10000;
    this.camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );
    this.camera.position.set(0, 0, 200);
    // * Setup Renderer
    this.renderer = new THREE.WebGL1Renderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.shadowMap.enabled = true;
    // * Append to Container
    this.container.appendChild(this.renderer.domElement);
  }

  setupListeners(): void {
    window.addEventListener(
      "resize",
      () => {
        const height = window.innerHeight;
        const width = window.innerWidth;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
      },
      false
    );
  }

  tick(): void {
    this.update();

    requestAnimationFrame(this.tick);
  }

  update(): void {
    this.renderer.render(this.scene, this.camera);

    // * Additional updates
  }

  // * -------------------------
  // * Component Output
  // * -------------------------
  render() {
    return (
      <div
        id="scene"
        ref={(container) => {
          this.container = container;
        }}
      ></div>
    );
  }
}

export default PalmScene;

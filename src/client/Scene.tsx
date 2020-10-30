import * as React from "react";
import * as THREE from "three";
import {
  DirectionalLight,
  DirectionalLightHelper,
  HemisphereLight,
  Light,
  Mesh,
  PerspectiveCamera,
  Scene,
  WebGL1Renderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export interface PalmSceneProps {}

export interface PalmSceneState {}

class PalmScene extends React.Component<PalmSceneProps, PalmSceneState> {
  constructor(props: PalmSceneProps) {
    super(props);
    this.state = {};
    this.lightHelperEnabled = false;
  }

  // * Properties
  backdrop!: Mesh;
  camera!: PerspectiveCamera;
  container!: HTMLDivElement;
  cube!: Mesh;
  directionalLight!: DirectionalLight;
  hemisphereLight!: HemisphereLight;
  lightHelper!: DirectionalLightHelper;
  lightHelperEnabled!: boolean;
  orbitControls!: OrbitControls;
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
    // * Backdrop
    const backdropGeometry = new THREE.BoxGeometry(500, 500, 1);
    const backdropMaterial = new THREE.MeshPhongMaterial({ color: 0x60cbe6 });
    const backdrop = new THREE.Mesh(backdropGeometry, backdropMaterial);
    this.backdrop = backdrop;
    this.scene.add(this.backdrop);

    // * Light
    this.directionalLight = new DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(0, -900, 1200);
    this.scene.add(this.directionalLight);

    this.hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
    this.hemisphereLight.color.setHSL(0.6, 1, 0.6);
    this.hemisphereLight.groundColor.setHSL(0.095, 1, 0.75);
    this.hemisphereLight.position.set(0, 50, 0);
    this.hemisphereLight.intensity = 0.4;
    this.scene.add(this.hemisphereLight);

    if (this.lightHelperEnabled) {
      this.lightHelper = new THREE.DirectionalLightHelper(
        this.directionalLight,
        200
      );
      this.scene.add(this.lightHelper);
    }

    this.orbitControls = new OrbitControls(
      this.camera,
      this.renderer.domElement
    );

    const geometry = new THREE.BoxGeometry(50, 50, 50);
    const material = new THREE.MeshPhongMaterial({ color: "red" });
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.position.set(0, 0, 0);
    this.scene.add(this.cube);
  }

  init(): void {
    // * Setup base scene
    this.setupBaseScene();
    this.createObjects();
    this.setupListeners();

    this.tick = this.tick.bind(this);
    this.tick();
  }

  setupBaseScene(): void {
    // * Setup Scene
    this.scene = new THREE.Scene();
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
    this.orbitControls.update();

    if (this.lightHelperEnabled) {
      this.lightHelper.update();
    }
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

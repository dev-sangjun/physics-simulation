import { IBody } from "../bodies";
import { addAxes } from "./functions";
import { Rectangle, Circle } from "../bodies";
import { Point } from "../utils/types";

class CanvasStore {
  private static instance: CanvasStore;
  id: number = 0;

  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  axesCanvas: HTMLCanvasElement | null = null;
  axesCtx: CanvasRenderingContext2D | null = null;
  chartCanvas: HTMLCanvasElement | null = null;
  chartCtx: CanvasRenderingContext2D | null = null;

  bodies: Array<IBody> = [];
  hasAxes = false;
  origin = { x: 0, y: 0 };
  gridSize = 1;
  animating = false;

  applyGround = true;
  applyGravity = true;

  // Collisions
  collisions: boolean[] = [];

  // FPS Correction
  fps = 58;

  private constructor() {}
  static getInstance(): CanvasStore {
    if (!CanvasStore.instance) CanvasStore.instance = new CanvasStore();
    return CanvasStore.instance;
  }
  getId() {
    return this.id++;
  }
  initCanvas(
    canvas: HTMLCanvasElement,
    axesCanvas: HTMLCanvasElement,
    origin: Point,
    gridSize: number
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.axesCanvas = axesCanvas;
    this.axesCtx = axesCanvas.getContext("2d");
    this.origin = origin;
    this.gridSize = gridSize;

    // Add axes
    if (this.axesCtx) addAxes(axesCanvas, this.axesCtx, origin, gridSize);
  }
  initChart(chart: HTMLCanvasElement) {
    this.chartCanvas = chart;
    this.chartCtx = chart.getContext("2d");
  }
  addBody(body: IBody) {
    this.bodies.push(body);
    body.applyGround = this.applyGround;
    body.applyGravity = this.applyGravity;
    body.draw();
  }
  draw() {
    this.bodies.forEach((body: IBody) => body.draw());
  }
  animateAll() {
    this.animating = true;

    // Initialize collisions
    for (let i = 0; i < this.bodies.length; i++) {
      this.collisions[i] = false;
      this.bodies[i].animating = true;
    }
    this.animate();
  }
  private animate() {
    if (!this.canvas || !this.ctx) return;
    if (this.animating) {
      requestAnimationFrame(() => this.animate());
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = 0; i < this.bodies.length; i++) {
        this.bodies[i].colliding = this.collisions[i];
        this.bodies[i].update();
      }
    }
  }
  eraseAll() {
    this.animating = false;
    if (!this.canvas || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.bodies = [];
  }
  reset() {
    this.animating = false;
    if (!this.canvas || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.bodies.forEach((body: IBody) => {
      body.reset();
    });
  }
  setGround(applyGround: boolean) {
    console.log("Setting applyGround:", applyGround);
    this.applyGround = applyGround;
    this.bodies.forEach(body => (body.applyGround = applyGround));
  }
  setGravity(applyGravity: boolean) {
    console.log("Setting applyGravity:", applyGravity);
    this.applyGravity = applyGravity;
    this.bodies.forEach(body => (body.applyGravity = applyGravity));
  }
}

export default CanvasStore.getInstance();

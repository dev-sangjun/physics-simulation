import { IBody } from "./Body";
import { Rectangle, Circle } from "./bodies";
import { colliding } from "./utils/functions";
import { Point } from "./utils/types";

class CanvasStore {
  private static instance: CanvasStore;
  id: number = 0;
  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  axesCanvas: HTMLCanvasElement | null = null;
  axesCtx: CanvasRenderingContext2D | null = null;
  bodies: Array<IBody> = [];
  hasAxes: boolean = false;
  origin = { x: 0, y: 0 };
  gridSize = 1;
  animating = false;

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
    this.addAxes(origin, gridSize);
  }
  addBody(body: IBody) {
    this.bodies.push(body);
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
  private addText() {
    if (!this.axesCanvas || !this.axesCtx) return;
    const textShift = { x: 3, y: 10 };
    this.axesCtx.font = "10px Aerial";
    const originShift = {
      x: Math.floor(this.origin.x),
      y: Math.floor(this.origin.y),
    };
    for (let i = 0; i < this.axesCanvas.width; i++) {
      const num = i - originShift.x;
      this.axesCtx.fillText(
        `${num}`,
        i * this.gridSize + textShift.x,
        this.origin.y * this.gridSize + textShift.y
      );
    }
    for (let i = 0; i < this.axesCanvas.width; i++) {
      const num = originShift.y - i;
      if (num === 0) continue;
      this.axesCtx.fillText(
        `${num}`,
        this.origin.x * this.gridSize + textShift.x,
        i * this.gridSize + textShift.y
      );
    }
  }
  addAxes(origin: { x: number; y: number }, gridSize: number) {
    if (!this.axesCanvas || !this.axesCtx) return;
    this.origin = origin;
    this.gridSize = gridSize;

    // Draw regular grid lines
    this.axesCtx.strokeStyle = "#a6a6a6";
    this.axesCtx.lineWidth = 1;
    this.axesCtx.beginPath();
    for (let i = gridSize; i < this.axesCanvas.width; i += gridSize) {
      if (i === origin.x * gridSize) continue;
      this.axesCtx.moveTo(i, 0);
      this.axesCtx.lineTo(i, this.axesCanvas.height);
      this.axesCtx.stroke();
    }
    for (let i = gridSize; i < this.axesCanvas.height; i += gridSize) {
      if (i === origin.y * gridSize) continue;
      this.axesCtx.moveTo(0, i);
      this.axesCtx.lineTo(this.axesCanvas.width, i);
      this.axesCtx.stroke();
    }
    this.axesCtx.closePath();

    // Draw axes
    this.axesCtx.strokeStyle = "#000000";
    this.axesCtx.beginPath();
    this.axesCtx.moveTo(origin.x * gridSize, 0);
    this.axesCtx.lineTo(origin.x * gridSize, this.axesCanvas.height);
    this.axesCtx.stroke();
    this.axesCtx.moveTo(0, origin.y * gridSize);
    this.axesCtx.lineTo(this.axesCanvas.width, origin.y * gridSize);
    this.axesCtx.stroke();
    this.axesCtx.closePath();

    this.addText();
  }
}

export default CanvasStore.getInstance();

import { start } from "repl";
import { IBody, Rectangle, Circle } from "./Body";

class CanvasStore {
  private static instance: CanvasStore;
  axesCanvas: HTMLCanvasElement | undefined = undefined;
  axesCtx: CanvasRenderingContext2D | undefined = undefined;
  canvas: HTMLCanvasElement | undefined = undefined;
  ctx: CanvasRenderingContext2D | undefined = undefined;
  bodies: Array<IBody> = [];
  hasAxes: boolean = false;
  origin = { x: 0, y: 0 };
  gridSize = 1;
  lastUpdated?: number;
  fps = 58;
  animationStarted = false;
  time = 0;
  private constructor() {}
  static getInstance(): CanvasStore {
    if (!CanvasStore.instance) CanvasStore.instance = new CanvasStore();
    return CanvasStore.instance;
  }
  setCanvas(canvas: HTMLCanvasElement, axesCanvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.axesCanvas = axesCanvas;
    this.hasAxes = false;
  }
  setContext(ctx: CanvasRenderingContext2D, axesCtx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.axesCtx = axesCtx;
  }
  addBody(body: IBody) {
    this.bodies.push(body);
    body.draw();
  }
  animate() {
    if (!this.canvas || !this.ctx) return;
    if (!this.lastUpdated) {
      this.lastUpdated = performance.now();
    }
    const dt = (performance.now() - this.lastUpdated) / 1000;
    this.lastUpdated = performance.now();
    if (this.animationStarted) this.fps = 1 / dt;
    else this.animationStarted = true;

    requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.bodies.forEach((body: IBody) => body.update());
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

    console.log(gridSize);
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

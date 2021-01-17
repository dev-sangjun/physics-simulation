import { start } from "repl";
import { IBody, Rectangle, Circle } from "./Body";

class CanvasStore {
  private static instance: CanvasStore;
  canvas: HTMLCanvasElement | undefined = undefined;
  ctx: CanvasRenderingContext2D | undefined = undefined;
  bodies: Array<IBody> = [];
  hasAxes: boolean = false;
  private constructor() {}
  static getInstance(): CanvasStore {
    if (!CanvasStore.instance) CanvasStore.instance = new CanvasStore();
    return CanvasStore.instance;
  }
  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.hasAxes = false;
  }
  setContext(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.addBorder();
  }
  private addBorder() {
    if (!this.canvas || !this.ctx) return;
    this.ctx.strokeStyle = "#000000";
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.closePath();
  }
  addBody(body: IBody) {
    this.bodies.push(body);
    body.draw(body.params);
  }
  addAxes() {
    if (!this.canvas || !this.ctx) return;
    const gridSize = 25;
    const origin = {
      x: 5 * gridSize,
      y: 5 * gridSize,
    };

    // Draw regular grid lines
    this.ctx.strokeStyle = "#e9e9e9";
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    for (let i = gridSize; i < this.canvas.width; i += gridSize) {
      if (i === origin.x) continue;
      this.ctx.moveTo(i, 0);
      this.ctx.lineTo(i, this.canvas.height);
      this.ctx.stroke();
    }
    for (let i = gridSize; i < this.canvas.height; i += gridSize) {
      if (i === origin.y) continue;
      this.ctx.moveTo(0, i);
      this.ctx.lineTo(this.canvas.width, i);
      this.ctx.stroke();
    }
    this.ctx.closePath();

    // Draw axes
    this.ctx.strokeStyle = "#000000";
    this.ctx.beginPath();
    this.ctx.moveTo(origin.x, 0);
    this.ctx.lineTo(origin.x, this.canvas.height);
    this.ctx.stroke();
    this.ctx.moveTo(0, origin.y);
    this.ctx.lineTo(this.canvas.width, origin.y);
    this.ctx.stroke();
    this.ctx.closePath();

    this.addBorder();
  }
}

export default CanvasStore;

// if (!this.canvas || !this.ctx) return;

// //https://usefulangle.com/post/19/html5-canvas-tutorial-how-to-draw-graphical-coordinate-system-with-grids-and-axis
// const drawAxis = (
//   axis: "x" | "y",
//   gridSize: number,
//   axisDistance: number
// ) => {
//   if (!this.canvas || !this.ctx) return;
//   const startPoint = { number: 1, suffix: "m" };
//   const numLines = Math.floor(
//     axis === "x"
//       ? this.canvas.height / gridSize
//       : this.canvas.width / gridSize
//   );
//   this.ctx!.beginPath();
//   this.ctx!.lineWidth = 1;

//   for (let i = 0; i <= numLines; i++) {
//     this.ctx!.beginPath();
//     this.ctx.lineWidth = 1;

//     // if the line is the axis, color == black
//     if (i == axisDistance) this.ctx.strokeStyle = "#000000";
//     else this.ctx.strokeStyle = "#e9e9e9";

//     if (i == numLines) {
//       this.ctx.moveTo(
//         axis === "x" ? 0 : gridSize * i,
//         axis === "x" ? gridSize * i : 0
//       );
//       this.ctx.lineTo(
//         axis === "x" ? this.canvas.width : gridSize * i,
//         axis === "x" ? gridSize * i + 0.5 : this.canvas.height
//       );
//     } else {
//       this.ctx.moveTo(
//         axis === "x" ? 0 : gridSize * i + 0.5,
//         axis === "x" ? gridSize * i + 0.5 : 0
//       );
//       this.ctx.lineTo(
//         axis === "x" ? this.canvas.width : gridSize * i + 0.5,
//         axis === "x" ? gridSize * i + 0.5 : this.canvas.height
//       );
//     }
//     this.ctx.stroke();

//     for (let i = 1; i < numLines - axisDistance; i++) {
//       this.ctx.beginPath();
//       this.ctx.lineWidth = 1;
//       this.ctx.strokeStyle = "#000000";

//       // Draw a tick mark 6px long (-3 to 3)
//       this.ctx.moveTo(
//         axis === "x" ? gridSize * i + 0.5 : -3,
//         axis === "x" ? -3 : gridSize * i + 0.5
//       );
//       this.ctx.lineTo(
//         axis === "x" ? gridSize * i + 0.5 : 3,
//         axis === "x" ? 3 : gridSize * i + 0.5
//       );
//       this.ctx.stroke();

//       // Text value at that point
//       this.ctx.font = "10px Arial";
//       this.ctx.textAlign = "start";
//       this.ctx.fillText(
//         axis === "x"
//           ? startPoint.number * i + startPoint.suffix
//           : -startPoint.number * i + startPoint.suffix,
//         axis === "x" ? gridSize * i - 2 : 8,
//         axis === "x" ? 15 : gridSize * i + 3
//       );
//     }

//     // Ticks marks along the negative X-axis
//     for (let i = 1; i < axisDistance; i++) {
//       this.ctx.beginPath();
//       this.ctx.lineWidth = 1;
//       this.ctx.strokeStyle = "#000000";

//       // Draw a tick mark 6px long (-3 to 3)
//       this.ctx.moveTo(
//         axis === "x" ? -gridSize * i + 0.5 : -3,
//         axis === "x" ? -3 : -gridSize * i + 0.5
//       );
//       this.ctx.lineTo(
//         axis === "x" ? -gridSize * i + 0.5 : 3,
//         axis === "x" ? 3 : -gridSize * i + 0.5
//       );
//       this.ctx.stroke();

//       // Text value at that point
//       this.ctx.font = "10px Arial";
//       this.ctx.textAlign = "end";
//       this.ctx.fillText(
//         -startPoint.number * i + startPoint.suffix,
//         -gridSize * i + 3,
//         15
//       );
//       this.ctx.fillText(
//         axis === "x"
//           ? -startPoint.number * i + startPoint.suffix
//           : startPoint.number * i + startPoint.suffix,
//         axis === "x" ? -gridSize * i + 3 : 8,
//         axis === "x" ? 15 : -gridSize * i + 3
//       );
//     }
//   }
// };

// const gridSize = 25;
// const xAxisDistance = 10;
// const yAxisDistance = 10;
// drawAxis("x", gridSize, xAxisDistance);
// drawAxis("y", gridSize, yAxisDistance);
// this.ctx.translate(yAxisDistance * gridSize, xAxisDistance * gridSize);

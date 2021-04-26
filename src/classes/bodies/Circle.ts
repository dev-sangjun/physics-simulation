import CanvasStore from "../CanvasStore";
// import { BodyParams, IBody } from "./Body";
// import { Point, Vector, ParamType } from "../utils/types";
// import { calcVelocity, getVelocity } from "../utils/functions";
// import { GRAVITY } from "../utils/constants";

// export type CircleParams = BodyParams & {
//   o: Point;
//   r: number;
//   m: number;
// };

// export default class Circle implements IBody {
//   id: number;
//   originalParams: CircleParams;
//   params: CircleParams;
//   color: string;
//   animating: boolean = false;
//   colliding: boolean = false;
//   applyGround = true;
//   applyGravity = true;
//   constructor(
//     public ctx: CanvasRenderingContext2D,
//     params: Record<ParamType, number | Point | Vector>,
//     color: string
//   ) {
//     this.id = CanvasStore.getId();
//     this.ctx = ctx;
//     const circleParams = {
//       o: {
//         x: params.x as number,
//         y: params.y as number,
//       },
//       r: params.r as number,
//       m: params.m as number,
//       v: { x: params.v_x, y: params.v_y } as Vector,
//       a: { x: params.a_x, y: params.a_y } as Vector,
//     };
//     this.originalParams = JSON.parse(JSON.stringify(circleParams));
//     this.params = circleParams;
//     this.color = color;
//   }
//   draw() {
//     let { o, r, v, a } = this.params;
//     const { origin, gridSize } = CanvasStore;

//     // change coordinate systems
//     o = {
//       x: (o.x + origin.x) * gridSize,
//       y: (origin.y - o.y) * gridSize,
//     };
//     r *= gridSize;
//     this.ctx.fillStyle = this.color;
//     this.ctx.beginPath();
//     this.ctx.arc(o.x, o.y, r, 0, 2 * Math.PI);
//     this.ctx.fill();
//     this.ctx.closePath();
//   }

//   update() {
//     if (this.params.o.y - this.params.r >= 0) {
//       const offset =
//         getVelocity(this.params.v, this.originalParams.a, 1 / CanvasStore.fps)
//           .y / CanvasStore.fps;
//       if (this.params.o.y - this.params.r + offset > 0)
//         this.params.o.y += offset;
//       else this.params.o.y = this.params.r;

//       this.params.v = getVelocity(this.params.v, GRAVITY, 1 / CanvasStore.fps);
//       // CanvasStore.time += 1 / CanvasStore.fps;
//     }
//     this.draw();
//   }
//   reset() {
//     this.params = JSON.parse(JSON.stringify(this.originalParams));
//     this.draw();
//   }
//   isInBoundary(p: Point) {
//     const xDist = p.x - this.params.o.x;
//     const yDist = p.y - this.params.o.y;
//     return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)) <= this.params.r;
//   }
// }

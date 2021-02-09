import CanvasStore from "../CanvasStore";
import { IBody } from "../Body";
import { Point, Vector, BodyParams, ParamType } from "../utils/types";
import { calcVelocity, calcDropVelocity } from "../utils/functions";
import { GRAVITY } from "../utils/constants";

export type RectangleParams = BodyParams & {
  x: number;
  y: number;
  w: number;
  h: number;
  m: number;
};

export default class Rectangle implements IBody {
  id: number;
  ctx: CanvasRenderingContext2D;
  originalParams: RectangleParams;
  params: RectangleParams;
  animating: boolean = false;
  colliding: boolean = false;

  constructor(
    ctx: CanvasRenderingContext2D,
    params: Record<ParamType, number | Point | Vector>
  ) {
    this.id = CanvasStore.getId();
    this.ctx = ctx;
    this.originalParams = {
      x: params.x as number,
      y: params.y as number,
      w: params.w as number,
      h: params.h as number,
      m: params.m as number,
      v: { x: params.v_x, y: params.v_y } as Vector,
      a: { x: params.a_x, y: params.a_y } as Vector,
    };
    this.params = JSON.parse(JSON.stringify(this.originalParams));
  }
  draw() {
    let { x, y, w, h } = this.params;
    const { origin, gridSize } = CanvasStore;

    // change coordinate systems
    x = (x + origin.x) * gridSize;
    y = (origin.y - y) * gridSize;
    w *= gridSize;
    h *= -gridSize;

    this.ctx.fillStyle = "red";
    this.ctx.beginPath();
    this.ctx.fillRect(x, y, w, h);
    this.ctx.closePath();
  }
  update() {
    if (this.animating) {
      const v = calcVelocity(this.params.v, GRAVITY, 1 / CanvasStore.fps);
      const dx = v.x / CanvasStore.fps;
      const dy = v.y / CanvasStore.fps;
      console.log(dy);
      this.params.x += dx;
      if (this.params.y + dy > 0) this.params.y += dy;
      else {
        this.params.y = 0;
        this.params.v = {
          x: this.params.v.x,
          y: calcDropVelocity(this.originalParams.y),
        };
      }
      this.params.v = calcVelocity(this.params.v, GRAVITY, 1 / CanvasStore.fps);
    }
    this.draw();
  }
  reset() {
    this.animating = false;
    this.params = JSON.parse(JSON.stringify(this.originalParams));
    console.log(this.params, CanvasStore.fps);
    this.draw();
  }
  isInBoundary(p: Point) {
    const isX = p.x >= this.params.x && p.x <= this.params.x + this.params.w;
    const isY = p.y >= this.params.y && p.x <= this.params.y + this.params.h;
    return isX && isY;
  }
}

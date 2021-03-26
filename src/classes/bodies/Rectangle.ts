import CanvasStore from "../CanvasStore";
import { BodyParams, IBody } from "./Body";
import { Point, Vector, ParamType } from "../utils/types";
import { addVector, getVelocity, calcDropVelocity } from "../utils/functions";
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
  color: string;
  animating = false;
  colliding = false;
  applyGround = true;
  applyGravity = true;
  constructor(
    ctx: CanvasRenderingContext2D,
    params: Record<ParamType, number | Point | Vector>,
    color: string
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
    this.color = color;
  }
  draw() {
    let { x, y, w, h } = this.params;
    const { origin, gridSize } = CanvasStore;

    // change coordinate systems
    x = (x + origin.x) * gridSize;
    y = (origin.y - y) * gridSize;
    w *= gridSize;
    h *= -gridSize;

    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.fillRect(x, y, w, h);
    this.ctx.closePath();
  }
  update() {
    if (this.animating) {
      const v = getVelocity(
        this.params.v,
        this.applyGravity
          ? addVector(this.originalParams.a, GRAVITY)
          : this.originalParams.a,
        1 / CanvasStore.fps
      );
      const dx = v.x / CanvasStore.fps;
      const dy = v.y / CanvasStore.fps;
      this.params.x += dx;

      // Bounces off the ground only if applyGround === true
      if (this.applyGround) {
        if (this.params.y + dy > 0) this.params.y += dy;
        else {
          this.params.y = 0;
          this.params.v = {
            x: this.params.v.x,
            y: this.applyGravity
              ? -calcDropVelocity(
                  this.originalParams.y,
                  this.originalParams.v.y,
                  true
                )
              : -this.originalParams.v.y,
          };
        }
      } else {
        this.params.y += dy;
      }

      this.params.v = getVelocity(
        this.params.v,
        this.applyGravity
          ? addVector(this.originalParams.a, GRAVITY)
          : this.originalParams.a,
        1 / CanvasStore.fps
      );
    }
    this.draw();
  }
  reset() {
    this.animating = false;
    this.params = JSON.parse(JSON.stringify(this.originalParams));
    this.draw();
  }
  isInBoundary(p: Point) {
    const isX = p.x >= this.params.x && p.x <= this.params.x + this.params.w;
    const isY = p.y >= this.params.y && p.x <= this.params.y + this.params.h;
    return isX && isY;
  }
}

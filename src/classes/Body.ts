import CanvasStore from "./CanvasStore";

export type BodyType =
  | "rectangle"
  | "circle"
  | "slope"
  | "line"
  | "spring"
  | "ground";
export type ParamType = "x" | "y" | "o" | "w" | "h" | "r" | "m" | "v" | "a";
export interface IBody {
  ctx: CanvasRenderingContext2D;
  originalParams: RectangleParams | CircleParams;
  params: RectangleParams | CircleParams;
  animating: boolean;
  draw: () => void;
  update: () => void;
  reset: () => void;
}
export type Point = {
  x: number;
  y: number;
};

export type Vector = {
  x: number;
  y: number;
};

type BodyParams = {
  v: Vector;
  a: Vector;
};

type RectangleParams = BodyParams & {
  x: number;
  y: number;
  w: number;
  h: number;
  m: number;
};

type CircleParams = BodyParams & {
  o: Point;
  r: number;
};

const GRAVITY: Vector = {
  x: 0,
  y: -9.80665,
};

const calcVelocity = (v0: Vector, a: Vector, t: number): Vector => {
  return {
    x: v0.x + a.x * t,
    y: v0.y + a.y * t,
  };
};

export class Rectangle implements IBody {
  originalParams: RectangleParams;
  params: RectangleParams;
  animating: boolean = false;
  draw: () => void;
  update: () => void;
  reset: () => void;
  constructor(
    public ctx: CanvasRenderingContext2D,
    params: Record<ParamType, number | Point | Vector>
  ) {
    this.ctx = ctx;
    const rectangleParams = {
      x: params.x as number,
      y: params.y as number,
      w: params.w as number,
      h: params.h as number,
      m: params.m as number,
      v: params.v as Vector,
      a: params.a as Vector,
    };
    this.originalParams = JSON.parse(JSON.stringify(rectangleParams));
    this.params = rectangleParams;
    this.draw = () => {
      let { x, y, w, h, m, v, a } = this.params;
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
    };
    this.update = () => {
      if (this.params.y >= 0) {
        const offset =
          calcVelocity(this.params.v, GRAVITY, 1 / CanvasStore.fps).y /
          CanvasStore.fps;
        if (this.params.y + offset > 0) this.params.y += offset;
        else this.params.y = 0;

        this.params.v = calcVelocity(
          this.params.v,
          GRAVITY,
          1 / CanvasStore.fps
        );
        // CanvasStore.time += 1 / CanvasStore.fps;
      }
      this.draw();
    };
    this.reset = () => {
      this.params = JSON.parse(JSON.stringify(this.originalParams));
      this.draw();
    };
  }
}

export class Circle implements IBody {
  originalParams: CircleParams;
  params: CircleParams;
  animating: boolean = false;
  draw: () => void;
  update: () => void;
  reset: () => void;
  constructor(
    public ctx: CanvasRenderingContext2D,
    params: Record<ParamType, number | Point | Vector>
  ) {
    this.ctx = ctx;
    const circleParams = {
      o: {
        x: params.x as number,
        y: params.y as number,
      },
      r: params.r as number,
      m: params.m as number,
      v: params.v as Vector,
      a: params.a as Vector,
    };
    this.originalParams = JSON.parse(JSON.stringify(circleParams));
    this.params = circleParams;
    this.draw = () => {
      let { o, r, v, a } = this.params;
      const { origin, gridSize } = CanvasStore;

      // change coordinate systems
      o = {
        x: (o.x + origin.x) * gridSize,
        y: (origin.y - o.y) * gridSize,
      };
      r *= gridSize;
      this.ctx.fillStyle = "red";
      this.ctx.beginPath();
      this.ctx.arc(o.x, o.y, r, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
    };
    this.update = () => {
      if (this.params.o.y - this.params.r >= 0) {
        const offset =
          calcVelocity(this.params.v, GRAVITY, 1 / CanvasStore.fps).y /
          CanvasStore.fps;
        if (this.params.o.y - this.params.r + offset > 0)
          this.params.o.y += offset;
        else this.params.o.y = this.params.r;

        this.params.v = calcVelocity(
          this.params.v,
          GRAVITY,
          1 / CanvasStore.fps
        );
        // CanvasStore.time += 1 / CanvasStore.fps;
      }
      this.draw();
    };
    this.reset = () => {
      this.params = JSON.parse(JSON.stringify(this.originalParams));
      this.draw();
    };
  }
}

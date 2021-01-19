import CanvasStore from "./CanvasStore";

export interface IBody {
  ctx: CanvasRenderingContext2D;
  originalParams: RectangleParams | CircleParams;
  params: RectangleParams | CircleParams;
  draw: () => void;
  update: () => void;
  reset: () => void;
}

type Vector = {
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
  o: {
    x: number;
    y: number;
  };
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
  draw: () => void;
  update: () => void;
  reset: () => void;
  constructor(
    public ctx: CanvasRenderingContext2D,
    public params: RectangleParams
  ) {
    this.ctx = ctx;
    this.originalParams = params;
    this.params = params;
    this.draw = () => {
      let { x, y, w, h, m, v, a } = this.params as RectangleParams;
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
        CanvasStore.time += 1 / CanvasStore.fps;
      }
      this.draw();
    };
    this.reset = () => {
      this.params = this.originalParams;
    };
  }
}

export class Circle implements IBody {
  originalParams: CircleParams;
  draw: () => void;
  update: () => void;
  reset: () => void;
  constructor(
    public ctx: CanvasRenderingContext2D,
    public params: CircleParams
  ) {
    this.ctx = ctx;
    this.originalParams = params;
    this.params = params;
    this.draw = () => {
      let { o, r, v, a } = this.params as CircleParams;
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
      this.params.o.y -= 0.1;
      this.draw();
    };
    this.reset = () => {
      this.params = this.originalParams;
    };
  }
}

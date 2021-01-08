export interface IBody {
  ctx: CanvasRenderingContext2D;
  params: RectangleParams | CircleParams;
  draw: (params: RectangleParams | CircleParams) => void;
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
};

type CircleParams = BodyParams & {
  o: {
    x: number;
    y: number;
  };
  r: number;
};

export class Rectangle implements IBody {
  draw: (params: RectangleParams | CircleParams) => void;
  constructor(
    public ctx: CanvasRenderingContext2D,
    public params: RectangleParams
  ) {
    this.ctx = ctx;
    this.params = params;
    this.draw = params => {
      const { x, y, w, h, v, a } = params as RectangleParams;
      this.ctx.strokeStyle = "red";
      this.ctx.beginPath();
      this.ctx.strokeRect(x, y, w, h);
      this.ctx.closePath();
    };
  }
}

export class Circle implements IBody {
  draw: (params: RectangleParams | CircleParams) => void;
  constructor(
    public ctx: CanvasRenderingContext2D,
    public params: CircleParams
  ) {
    this.ctx = ctx;
    this.params = params;
    this.draw = params => {
      const { o, r, v, a } = params as CircleParams;
      this.ctx.strokeStyle = "yellow";
      this.ctx.beginPath();
      this.ctx.arc(o.x, o.y, r, 0, 2 * Math.PI);
      this.ctx.stroke();
      this.ctx.closePath();
    };
  }
}

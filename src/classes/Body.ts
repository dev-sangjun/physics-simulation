import Vector from "./Vector";

interface Body {
  v: Vector;
  a: Vector;
}

class Rectangle implements Body {
  constructor(
    public x: number,
    public y: number,
    public w: number,
    public h: number,
    public v: Vector,
    public a: Vector
  ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.v = v;
    this.a = a;
  }
}

class Circle implements Body {
  constructor(
    public o: {
      x: number;
      y: number;
    },
    public r: number,
    public v: Vector,
    public a: Vector
  ) {
    this.o = o;
    this.r = r;
    this.v = v;
    this.a = a;
  }
}

export { Rectangle, Circle };

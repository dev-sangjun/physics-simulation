import Vector from "./Vector";

class Body {
  v: Vector;
  a: Vector;
  constructor(v: Vector, a: Vector) {
    this.v = v;
    this.a = a;
  }
}

class Rectangle extends Body {
  x: number;
  y: number;
  w: number;
  h: number;
  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    v: Vector,
    a: Vector
  ) {
    super(v, a);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

class Circle extends Body {
  o: {
    x: number;
    y: number;
  };
  r: number;
  constructor(
    o: {
      x: number;
      y: number;
    },
    r: number,
    v: Vector,
    a: Vector
  ) {
    super(v, a);
    this.o = o;
    this.r = r;
  }
}

export { Body, Rectangle, Circle };

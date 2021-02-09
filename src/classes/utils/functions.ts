import { IBody } from "../Body";
import { Point, Vector, Distance } from "./types";
import { Rectangle, Circle } from "../bodies";
import { GRAVITY } from "./constants";

export const calcVelocity = (v0: Vector, a: Vector, t: number): Vector => ({
  x: v0.x + a.x * t,
  y: v0.y + a.y * t,
});

export const calcAcceleration = (a: Vector, t: number): Vector => ({
  x: a.x * t,
  y: a.y * t,
});

export const calcMomentum = (m: number, v: Vector): Vector => ({
  x: m * v.x,
  y: m * v.y,
});

export const calcDropVelocity = (h: number) => {
  const t = Math.sqrt((2 * h) / -GRAVITY.y);
  return -GRAVITY.y * t * calcVelocityCorrection(h);
};

const getDistance = (p1: Point, p2: Point): Distance => {
  const distX = Math.abs(p1.x - p2.x);
  const distY = Math.abs(p1.y - p2.y);
  return {
    scalar: Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)),
    x: distX,
    y: distY,
  };
};

const getCenterPoint = (b: IBody): Point => {
  if (b instanceof Rectangle) {
    const { params } = b;
    return { x: params.x + params.w * 0.5, y: params.y + params.h * 0.5 };
  }
  if (b instanceof Circle) {
    return b.params.o;
  }
  return { x: 0, y: 0 };
};

const RectCircleColliding = (r: Rectangle, c: Circle, d: Distance) => {
  const rect = r.params;
  const circle = c.params;
  if (d.x > rect.w / 2 + circle.r) return false;
  if (d.y > rect.h / 2 + circle.r) return false;
  return d.x <= rect.w / 2 || d.y <= rect.h / 2;
};

const RectRectColliding = (r1: Rectangle, r2: Rectangle, d: Distance) => {
  const rect1 = r1.params;
  const rect2 = r2.params;
  if (d.x > rect1.w / 2 + rect2.w / 2) return false;
  if (d.y > rect1.h / 2 + rect2.h / 2) return false;
  return d.x <= rect1.w / 2 + rect2.w / 2 || d.y <= rect1.h / 2 + rect2.h / 2;
};

export const colliding = (b1: IBody, b2: IBody) => {
  const distance = getDistance(getCenterPoint(b1), getCenterPoint(b2));

  // Different Computation needed depending on the body type
  if (b1 instanceof Rectangle && b2 instanceof Circle)
    return RectCircleColliding(b1, b2, distance);
  if (b1 instanceof Circle && b2 instanceof Rectangle)
    return RectCircleColliding(b2, b1, distance);
  if (b1 instanceof Rectangle && b2 instanceof Rectangle)
    return RectRectColliding(b1, b2, distance);
};

const calcVelocityCorrection = (y: number) => {
  if (y < 1) return 1.07;
  if (y < 3) return 1.0375;
  if (y < 5) return 1.027;
  if (y < 7) return 1.024;
  if (y < 9) return 1.021;
  if (y < 11) return 1.018;
  if (y < 13) return 1.017;
  if (y < 15) return 1.0155;
  if (y < 17) return 1.0145;
  if (y < 19) return 1.01325;
  if (y < 21) return 1.013;
  if (y < 23) return 1.0125;
  if (y < 25) return 1.012125;
  return 1.011;
};

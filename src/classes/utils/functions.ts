import { IBody } from "../bodies/Body";
import { Point, Vector } from "./types";
import { Rectangle, Circle } from "../bodies";
import { GRAVITY } from "./constants";
import { Y_PLOT_COUNT } from "../../components/Chart";
import { off } from "process";

export const addVector = (a: Vector, b: Vector): Vector => ({
  x: a.x + b.x,
  y: a.y + b.y,
});

// From apex to ground
export const calcFallTime = (body: IBody) => {
  if (body instanceof Rectangle) {
    const { y, v, a } = body.originalParams;
    const a_ = body.applyGravity ? a.y + GRAVITY.y : a.y;
    const t_ = v.y > 0 ? Math.abs(v.y / GRAVITY.y) : 0;
    const y_ =
      v.y > 0 ? Math.abs(v.y) * t_ + (1 / 2) * GRAVITY.y * (t_ * t_) : 0;
    if (v.y !== 0) {
      const d = y + y_;
      return Math.sqrt(Math.abs((2 * d) / a_));
    } else {
      const t = Math.abs(Math.sqrt(-2 * GRAVITY.y * y) / GRAVITY.y);
      return t;
    }
  } else if (body instanceof Circle) {
    const { o, a } = body.originalParams;
    return Math.sqrt(
      (2 * o.y) / Math.abs(body.applyGravity ? a.y + GRAVITY.y : a.y)
    );
  }
  return 0;
};

const calcTimeOffset = (v_y: number, y: number) => {
  if (v_y > 0) {
    return v_y / GRAVITY.y;
  } else if (v_y < 0) {
    const t = Math.sqrt((-2 * y) / GRAVITY.y);
    const t_ = (-v_y - Math.sqrt(v_y * v_y - 2 * GRAVITY.y * y)) / GRAVITY.y;
    const offset = Math.abs(t - t_);
    return offset;
  } else {
    return 0;
  }
};

const isFalling = (
  y: number,
  v_y: number,
  fallTime: number,
  t: number,
  t_offset: number
) => {
  if (v_y > 0) {
    return t < Math.abs(t_offset)
      ? false
      : Math.floor((t + t_offset) / fallTime) % 2 === 0;
  } else if (v_y < 0) {
    // Fall time in phase 0
    return t < t_offset
      ? true
      : Math.floor((t + t_offset) / fallTime) % 2 === 0;
  } else {
    return Math.floor(t / fallTime) % 2 === 0;
  }
};

// const y_up =
// v.y > 0 ? Math.abs(v.y) * t_up + (1 / 2) * GRAVITY.y * (t_up * t_up) : 0;

export const calcPosition = (body: IBody, t: number): Vector => {
  const fallTime = calcFallTime(body);
  if (body instanceof Rectangle) {
    const { x, y, v, a } = body.originalParams;
    const a_ = body.applyGravity ? addVector(a, GRAVITY) : a;
    const x_ = (1 / 2) * (a_.x * Math.pow(t, 2)) + v.x * t + x;
    const t_offset = calcTimeOffset(v.y, y);
    const t_ = body.applyGround ? (t + t_offset) % fallTime : t;
    const falling = body.applyGround
      ? isFalling(y, v.y, fallTime, t, t_offset)
      : true;
    if (v.y > 0 && t < Math.abs(t_offset)) {
      const y_ = v.y * t + (1 / 2) * a_.y * (t * t) + y;
      return { x: x_, y: y_ };
    } else if (v.y > 0 && falling) {
      const offset = Math.abs(t_offset);
      const y_up =
        Math.abs(v.y) * offset + (1 / 2) * GRAVITY.y * (offset * offset);
      const y_ = (1 / 2) * a_.y * (t_ * t_) + y + y_up;
      return { x: x_, y: y_ };
    } else if (v.y < 0) {
      if (falling) {
        const fallTime_ = Math.abs(
          (-v.y + Math.sqrt(v.y * v.y - 2 * GRAVITY.y * y)) / GRAVITY.y
        );
        if (t < fallTime_) {
          const y_ = v.y * t + (1 / 2) * a_.y * (t * t) + y;
          return { x: x_, y: y_ };
        } else {
          const y_up =
            Math.abs(v.y) * t_offset +
            (1 / 2) * GRAVITY.y * (t_offset * t_offset);
          const y_ = (1 / 2) * a_.y * (t_ * t_) + y + y_up;
          return { x: x_, y: y_ };
        }
      } else {
        // not falling
        const y_ =
          -calcDropVelocity(y, v.y, false) * t_ + (1 / 2) * a_.y * (t_ * t_);
        return { x: x_, y: y_ };
      }
    } else if (falling) {
      const y_ = v.y * t_ + (1 / 2) * a_.y * (t_ * t_) + y;
      return { x: x_, y: y_ };
    } else {
      const y_ =
        -calcDropVelocity(y, v.y, false) * t_ + (1 / 2) * a_.y * (t_ * t_);
      return { x: x_, y: y_ };
    }
  } else if (body instanceof Circle) {
  }
  return { x: 0, y: 0 };
};
export const getVelocity = (v: Vector, a: Vector, t: number) => ({
  x: v.x + a.x * t,
  y: v.y + a.y * t,
});
export const getAcceleration = (a: Vector, t: number): Vector => ({
  x: a.x * t,
  y: a.y * t,
});

export const getMomentum = (m: number, v: Vector): Vector => ({
  x: m * v.x,
  y: m * v.y,
});

export const calcVelocity = (body: IBody, t: number): Vector => {
  const fallTime = calcFallTime(body);
  if (body instanceof Rectangle) {
    const { y, v, a } = body.originalParams;
    const a_ = body.applyGravity ? addVector(a, GRAVITY) : a;
    const t_offset = calcTimeOffset(v.y, y);
    const t_ = body.applyGround ? (t + t_offset) % fallTime : t;
    const falling = body.applyGround
      ? isFalling(y, v.y, fallTime, t, t_offset)
      : true;
    if ((v.y > 0 && t < Math.abs(t_offset)) || (v.y < 0 && t < t_offset))
      return { x: v.x + a_.x * t, y: v.y + a_.y * t };
    else if (falling) {
      return { x: v.x + a_.x * t, y: a_.y * t_ };
    } else
      return {
        x: v.x + a_.x * t,
        y: -calcDropVelocity(y, v.y, false) + a_.y * t_,
      };
  } else if (body instanceof Circle) {
  }
  return { x: 0, y: 0 };
};

export const getMagnitude = (v: Vector) => Math.sqrt(v.x * v.x + v.y * v.y);

export const getKE = (m: number, v: Vector): number => {
  const v_mag = getMagnitude(v);
  return (1 / 2) * m * (v_mag * v_mag);
};

export const getPE = (m: number, h: number): number => {
  return m * -GRAVITY.y * h;
};

export const getPositionData = (body: IBody, chartMode: "X" | "Y") => {
  const data: Vector[] = [];
  if (body instanceof Rectangle) {
    for (let i = 0; i < 15; i += 0.01) {
      const pos = calcPosition(body, i);
      data.push({ x: i, y: chartMode === "X" ? pos.x : pos.y });
    }
    return data;
  } else if (body instanceof Circle) {
  }
  return [];
};

export const getEnergyData = (
  body: IBody,
  chartMode: "Kinetic" | "Potential"
) => {
  const data: Vector[] = [];
  if (body instanceof Rectangle) {
    for (let i = 0; i < 15; i += 0.01) {
      const { m } = body.originalParams;
      data.push({
        x: i,
        y:
          chartMode === "Kinetic"
            ? getKE(m, calcVelocity(body, i))
            : getPE(m, calcPosition(body, i).y),
      });
    }
    return data;
  } else if (body instanceof Circle) {
  }
  return [];
};

// export const getPositions = (
//   body: IBody,
//   timeRange: number,
//   chartMode: "X" | "Y"
// ): number[] => {
//   let positions: number[] = [];
//   const { v } = body.originalParams;
//   const t = calcFallTime(body);
//   console.log("fall time", t);
//   const period = t / Y_PLOT_COUNT;
//   for (
//     let i = 0;
//     i <= timeRange;
//     i += body.applyGround && chartMode === "Y" ? period : 1
//   ) {
//     const { x, y } = calcPosition(body, i);
//     positions.push(chartMode === "X" ? x : y);
//   }
//   return positions;
// };

export const calcDropVelocity = (
  h: number,
  v_y: number,
  applyCorrection: boolean
) => {
  const t_up = Math.abs(v_y / GRAVITY.y);
  const h_ = h + Math.abs(v_y) * t_up + (1 / 2) * GRAVITY.y * Math.pow(t_up, 2);
  const t = Math.sqrt((2 * h_) / -GRAVITY.y);
  return GRAVITY.y * t * (applyCorrection ? calcVelocityCorrection(h_) : 1);
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

// const getDistance = (p1: Point, p2: Point): Distance => {
//   const distX = Math.abs(p1.x - p2.x);
//   const distY = Math.abs(p1.y - p2.y);
//   return {
//     scalar: Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)),
//     x: distX,
//     y: distY,
//   };
// };

// const getCenterPoint = (b: IBody): Point => {
//   if (b instanceof Rectangle) {
//     const { params } = b;
//     return { x: params.x + params.w * 0.5, y: params.y + params.h * 0.5 };
//   }
//   if (b instanceof Circle) {
//     return b.params.o;
//   }
//   return { x: 0, y: 0 };
// };

// const RectCircleColliding = (r: Rectangle, c: Circle, d: Distance) => {
//   const rect = r.params;
//   const circle = c.params;
//   if (d.x > rect.w / 2 + circle.r) return false;
//   if (d.y > rect.h / 2 + circle.r) return false;
//   return d.x <= rect.w / 2 || d.y <= rect.h / 2;
// };

// const RectRectColliding = (r1: Rectangle, r2: Rectangle, d: Distance) => {
//   const rect1 = r1.params;
//   const rect2 = r2.params;
//   if (d.x > rect1.w / 2 + rect2.w / 2) return false;
//   if (d.y > rect1.h / 2 + rect2.h / 2) return false;
//   return d.x <= rect1.w / 2 + rect2.w / 2 || d.y <= rect1.h / 2 + rect2.h / 2;
// };

// export const colliding = (b1: IBody, b2: IBody) => {
//   const distance = getDistance(getCenterPoint(b1), getCenterPoint(b2));

//   // Different Computation needed depending on the body type
//   if (b1 instanceof Rectangle && b2 instanceof Circle)
//     return RectCircleColliding(b1, b2, distance);
//   if (b1 instanceof Circle && b2 instanceof Rectangle)
//     return RectCircleColliding(b2, b1, distance);
//   if (b1 instanceof Rectangle && b2 instanceof Rectangle)
//     return RectRectColliding(b1, b2, distance);
// };

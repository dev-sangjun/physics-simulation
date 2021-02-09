import { RectangleParams, CircleParams } from "./bodies";
import { Point } from "./utils/types";

export interface IBody {
  id: number;
  ctx: CanvasRenderingContext2D;
  originalParams: RectangleParams | CircleParams;
  params: RectangleParams | CircleParams;
  animating: boolean;
  colliding: boolean;
  draw: () => void;
  update: () => void;
  reset: () => void;
  isInBoundary: (p: Point) => boolean;
}

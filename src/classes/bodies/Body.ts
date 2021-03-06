import { RectangleParams, CircleParams } from ".";
import { Point } from "../utils/types";

export interface IBody {
  id: number;
  ctx: CanvasRenderingContext2D;
  originalParams: RectangleParams | CircleParams;
  params: RectangleParams | CircleParams;
  color: string;
  animating: boolean;
  colliding: boolean;
  applyGround: boolean;
  applyGravity: boolean;
  draw: () => void;
  update: () => void;
  reset: () => void;
  isInBoundary: (p: Point) => boolean;
}

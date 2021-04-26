import { RectangleParams } from "./Rectangle";
import { Point, Vector } from "../utils/types";

export type BodyParams = { v: Vector; a: Vector };

export interface IBody {
  id: number;
  ctx: CanvasRenderingContext2D;
  originalParams: RectangleParams;
  params: RectangleParams;
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

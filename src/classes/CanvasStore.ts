import { IBody, Rectangle, Circle } from "./Body";

class CanvasStore {
  private static instance: CanvasStore;
  ctx: CanvasRenderingContext2D | undefined = undefined;
  bodies: Array<IBody> = [];
  private constructor() {}
  static getInstance(): CanvasStore {
    if (!CanvasStore.instance) CanvasStore.instance = new CanvasStore();
    return CanvasStore.instance;
  }
  setContext(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }
  addBody(body: IBody) {
    this.bodies.push(body);
    body.draw(body.params);
  }
}

export default CanvasStore;

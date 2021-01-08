class CanvasStore {
  ctx: CanvasRenderingContext2D | undefined = undefined;
  private static instance: CanvasStore;
  private constructor() {}
  static getInstance(): CanvasStore {
    if (!CanvasStore.instance) CanvasStore.instance = new CanvasStore();
    return CanvasStore.instance;
  }
  setContext(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }
}

export default CanvasStore;

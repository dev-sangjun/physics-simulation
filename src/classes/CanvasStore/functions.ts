
export const addAxes = (
  axesCanvas: HTMLCanvasElement,
  axesCtx: CanvasRenderingContext2D,
  origin: { x: number; y: number },
  gridSize: number
) => {
  // Draw regular grid lines
  axesCtx.strokeStyle = "#a6a6a6";
  axesCtx.lineWidth = 1;
  axesCtx.beginPath();
  for (let i = gridSize; i < axesCanvas.width; i += gridSize) {
    if (i === origin.x * gridSize) continue;
    axesCtx.moveTo(i, 0);
    axesCtx.lineTo(i, axesCanvas.height);
    axesCtx.stroke();
  }
  for (let i = gridSize; i < axesCanvas.height; i += gridSize) {
    if (i === origin.y * gridSize) continue;
    axesCtx.moveTo(0, i);
    axesCtx.lineTo(axesCanvas.width, i);
    axesCtx.stroke();
  }
  axesCtx.closePath();

  // Draw axes
  axesCtx.strokeStyle = "#000000";
  axesCtx.beginPath();
  axesCtx.moveTo(origin.x * gridSize, 0);
  axesCtx.lineTo(origin.x * gridSize, axesCanvas.height);
  axesCtx.stroke();
  axesCtx.moveTo(0, origin.y * gridSize);
  axesCtx.lineTo(axesCanvas.width, origin.y * gridSize);
  axesCtx.stroke();
  axesCtx.closePath();

  // Add texts
  const textShift = { x: 3, y: 10 };
  axesCtx.font = "10px Aerial";
  const originShift = {
    x: Math.floor(origin.x),
    y: Math.floor(origin.y),
  };
  for (let i = 0; i < axesCanvas.width; i++) {
    const num = i - originShift.x;
    axesCtx.fillText(
      `${num}`,
      i * gridSize + textShift.x,
      origin.y * gridSize + textShift.y
    );
  }
  for (let i = 0; i < axesCanvas.width; i++) {
    const num = originShift.y - i;
    if (num === 0) continue;
    axesCtx.fillText(
      `${num}`,
      origin.x * gridSize + textShift.x,
      i * gridSize + textShift.y
    );
  }
};
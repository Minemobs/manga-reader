export function unscramble(
  rawSrc: string,
  width: number,
  height: number,
  ctx: CanvasRenderingContext2D,
  image: ImageBitmap,
) {
  const srcURL = new URL(rawSrc);
  switch (srcURL.host) {
    case "shonenjumpplus.com":
    case "cdn-ak-img.shonenjumpplus.com":
      return unscrambleSJP(width, height, ctx, image);
    default:
      return undefined;
  }
}

function unscrambleSJP(
  width: number,
  height: number,
  ctx: CanvasRenderingContext2D,
  image: ImageBitmap,
) {
  const DIVIDE_NUM = 4;
  const MULTIPLE = 8;

  const cellWidth = Math.floor(width / (DIVIDE_NUM * MULTIPLE)) * MULTIPLE;
  const cellHeight = Math.floor(height / (DIVIDE_NUM * MULTIPLE)) * MULTIPLE;
  ctx!.drawImage(image, 0, 0, width, height);

  for (let i = 0; i < DIVIDE_NUM ** 2; i++) {
    const sourceX = (i % DIVIDE_NUM) * cellWidth;
    const sourceY = Math.floor(i / DIVIDE_NUM) * cellHeight;
    const destinationIndex =
      (i % DIVIDE_NUM) * DIVIDE_NUM + Math.floor(i / DIVIDE_NUM);
    const destinationX = (destinationIndex % DIVIDE_NUM) * cellWidth;
    const destinationY = Math.floor(destinationIndex / DIVIDE_NUM) * cellHeight;
    ctx!.drawImage(
      image,
      sourceX,
      sourceY,
      cellWidth,
      cellHeight,
      destinationX,
      destinationY,
      cellWidth,
      cellHeight,
    );
  }
}

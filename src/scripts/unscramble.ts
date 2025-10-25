export function unscramble(
  rawSrc: string,
  ctx: CanvasRenderingContext2D,
  image: ImageBitmap,
) {
  const srcURL = new URL(rawSrc);
  switch (srcURL.host) {
    case "shonenjumpplus.com":
    case "cdn-ak-img.shonenjumpplus.com":
      unscrambleSJP(ctx, image);
      break;
    case "ynjn.jp":
    case "public.ynjn.jp":
      unscrambleYNJN(ctx, image);
      break;
    default:
      return undefined;
  }
}

function unscrambleYNJN(
  ctx: CanvasRenderingContext2D,
  image: ImageBitmap,
) {
  const CELL_SIZE = 4;

  const cellWidth = Math.floor(image.width / CELL_SIZE);
  const cellHeight = Math.floor(image.height / CELL_SIZE);
  ctx.clearRect(0, 0, image.width, image.height);
  ctx.drawImage(image, 0, 0, image.width, image.height);

  for (let i = 0; i < CELL_SIZE * CELL_SIZE; i++) {
    const sy = Math.floor(i / CELL_SIZE) * cellHeight;
    const sx = (i % CELL_SIZE) * cellWidth;
    const cellY = Math.floor(i / CELL_SIZE); // idk what this is supposed to be
    const idk = (i % CELL_SIZE) * CELL_SIZE + cellY; // same for this one
    const dx = (idk % CELL_SIZE) * cellWidth;
    const dy = Math.floor(idk / CELL_SIZE) * cellHeight;
    //console.log(sx, sy, cellY, idk, dx, dy);
    ctx.drawImage(image, sx, sy, cellWidth, cellHeight, dx, dy, cellWidth, cellHeight);
  }
}

function unscrambleSJP(
  ctx: CanvasRenderingContext2D,
  image: ImageBitmap,
) {
  const DIVIDE_NUM = 4;
  const MULTIPLE = 8;

  const cellWidth = Math.floor(image.width / (DIVIDE_NUM * MULTIPLE)) * MULTIPLE;
  const cellHeight = Math.floor(image.height / (DIVIDE_NUM * MULTIPLE)) * MULTIPLE;
  ctx.clearRect(0, 0, image.width, image.height);
  ctx.drawImage(image, 0, 0, image.width, image.height);

  for (let i = 0; i < DIVIDE_NUM ** 2; i++) {
    const sourceX = (i % DIVIDE_NUM) * cellWidth;
    const sourceY = Math.floor(i / DIVIDE_NUM) * cellHeight;
    const destinationIndex =
      (i % DIVIDE_NUM) * DIVIDE_NUM + Math.floor(i / DIVIDE_NUM);
    const destinationX = (destinationIndex % DIVIDE_NUM) * cellWidth;
    const destinationY = Math.floor(destinationIndex / DIVIDE_NUM) * cellHeight;
    ctx.drawImage(
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

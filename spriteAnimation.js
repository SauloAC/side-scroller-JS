const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerSprite = new Image();
playerSprite.src = "assets/sprites/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 24;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position = Math.floor(gameFrame / staggerFrames) % 6;
  frameX = spriteWidth * position;
  // animate player ctx.drawImage(image, source-x, source-y, source-Width, source-Height, dx, dy, dWidth, dHeight);
  ctx.drawImage(
    playerSprite,
    frameX,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  // if (gameFrame % staggerFrames == 0) {
  //   if (frameX < 6) frameX++;
  //   else frameX = 0;
  // }

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();

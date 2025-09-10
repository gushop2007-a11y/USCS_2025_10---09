let canv = document.getElementById("myCanvas");
let ctx = canv.getContext("2d");

let posX = 300;
let posY = 200;

let speedY = Math.random() * 10 - 5; 
let speedX = Math.random() * 10 - 5;

let img = new Image();
img.src = "bola.png";

const imgWidth = 200;
const imgHeight = 200;

img.onload = function() {
    setInterval(Desenha, 20);
};

function Desenha() {
    ctx.clearRect(0, 0, canv.width, canv.height);

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, canv.width, canv.height);

    posX += speedX;
    posY += speedY;

    if (posX > canv.width - imgWidth || posX < 0) speedX = -speedX;
    if (posY > canv.height - imgHeight || posY < 0) speedY = -speedY;

    ctx.drawImage(img, posX, posY, imgWidth, imgHeight);
}
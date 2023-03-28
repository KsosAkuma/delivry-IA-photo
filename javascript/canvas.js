const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.opacity = "0.04"
canvas.style.zIndex = '-1'
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const cols = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
const numCols = cols.length;

const spacing = 40;
const thickness = 6;
const speed = 0.05;

const arcWidth = 100;
const arcHeight = 60;

const numRows = Math.ceil(canvas.height / spacing) + 1;
const numColsPerRow = Math.ceil(canvas.width / spacing) + 1;

let time = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numColsPerRow; j++) {
            const col = cols[Math.floor(Math.random() * numCols)];
            const x = j * spacing - (time * speed * spacing) % spacing - thickness / 2;
            const y = i * spacing - (time * speed * spacing) % spacing - thickness / 2;
            const opacity = (Math.sin((i + j) / 4 + time) + 1) / 2;
            ctx.fillStyle = col;
            ctx.globalAlpha = opacity;
            drawArc(x, y, col);
        }
    }

    time += 0.1;
    requestAnimationFrame(draw);
}

function drawArc(x, y, col) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + arcWidth / 2, y + arcHeight / 2);
    ctx.lineTo(x, y + arcHeight);
    ctx.lineTo(x - arcWidth / 2, y + arcHeight / 2);
    ctx.closePath();
    ctx.strokeStyle = col;
    ctx.lineWidth = thickness;
    ctx.stroke();
}

draw();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let circles = [];
let canvasWidth = 800;
let canvasHeight = 500;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

class Circle {
  constructor(x, y, radius, speed) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;

    this.dx = (Math.random() > 0.5 ? 1 : -1) * speed;
    this.dy = (Math.random() > 0.5 ? 1 : -1) * speed;
  }

  draw(ctx) {
    ctx.beginPath();

    // ✨ Glass circle
    let gradient = ctx.createRadialGradient(
      this.posX, this.posY, this.radius * 0.2,
      this.posX, this.posY, this.radius
    );

    gradient.addColorStop(0, "rgba(255,255,255,0.6)");
    gradient.addColorStop(1, "rgba(255,255,255,0.1)");

    ctx.fillStyle = gradient;
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.lineWidth = 2;

    ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.closePath();
  }

  update() {
    // Rebotes con corrección
    if (this.posX + this.radius > canvasWidth) {
      this.posX = canvasWidth - this.radius;
      this.dx *= -1;
    }

    if (this.posX - this.radius < 0) {
      this.posX = this.radius;
      this.dx *= -1;
    }

    if (this.posY + this.radius > canvasHeight) {
      this.posY = canvasHeight - this.radius;
      this.dy *= -1;
    }

    if (this.posY - this.radius < 0) {
      this.posY = this.radius;
      this.dy *= -1;
    }

    this.posX += this.dx;
    this.posY += this.dy;

    this.draw(ctx);
  }
}

// 🎯 Generar círculos
function generateCircles(n) {
  circles = [];

  for (let i = 0; i < n; i++) {
    let radius = Math.random() * 30 + 20;

    let x = Math.random() * (canvasWidth - 2 * radius) + radius;
    let y = Math.random() * (canvasHeight - 2 * radius) + radius;

    let speed = Math.random() * 3 + 1;

    circles.push(new Circle(x, y, radius, speed));
  }
}

// 🔘 BOTÓN
document.getElementById("applyBtn").addEventListener("click", () => {
  let n = parseInt(document.getElementById("numCircles").value);
  canvasWidth = parseInt(document.getElementById("canvasWidth").value);
  canvasHeight = parseInt(document.getElementById("canvasHeight").value);

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  generateCircles(n);
});

// 🔄 Animación
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  circles.forEach(c => c.update());
}

// Inicial
generateCircles(5);
animate();
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let canvasWidth = 800;
let canvasHeight = 500;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let circles = [];

class Circle {
  constructor(x, radius, speed) {
    this.posX = x;
    this.posY = 0; // 💡 empiezan desde arriba

    this.radius = radius;

    this.dx = (Math.random() > 0.5 ? 1 : -1) * speed;
    this.dy = 0;

    this.gravity = 0.5;
    this.friction = 0.7;

    this.bounceCount = 0;
    this.maxBounces = 6;
  }

  draw(ctx) {
    ctx.beginPath();

    // ✨ efecto glass
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
    // 🌍 gravedad
    this.dy += this.gravity;

    // mover
    this.posX += this.dx;
    this.posY += this.dy;

    // 🧱 rebotes laterales
    if (this.posX + this.radius > canvasWidth) {
      this.posX = canvasWidth - this.radius;
      this.dx *= -1;
    }

    if (this.posX - this.radius < 0) {
      this.posX = this.radius;
      this.dx *= -1;
    }

    // 🪀 rebote en el suelo
    if (this.posY + this.radius > canvasHeight) {
      this.posY = canvasHeight - this.radius;

      this.dy *= -this.friction; // pierde energía
      this.bounceCount++;

      // 💤 detener después de varios rebotes
      if (this.bounceCount > this.maxBounces || Math.abs(this.dy) < 0.5) {
        this.dy = 0;
        this.dx = 0;
      }
    }

    this.draw(ctx);
  }
}

// 🎯 generar círculos
function generateCircles(n) {
  circles = [];

  for (let i = 0; i < n; i++) {
    let radius = Math.random() * 30 + 20;

    let x = Math.random() * (canvasWidth - 2 * radius) + radius;

    let speed = Math.random() * 3 + 1;

    circles.push(new Circle(x, radius, speed));
  }
}

// 🔘 botón
document.getElementById("generateBtn").addEventListener("click", () => {
  let n = parseInt(document.getElementById("numCircles").value);
  canvasWidth = parseInt(document.getElementById("canvasWidth").value);
  canvasHeight = parseInt(document.getElementById("canvasHeight").value);

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  generateCircles(n);
});

// 🔄 animación
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  circles.forEach(c => c.update());
}

// inicial
generateCircles(5);
animate();
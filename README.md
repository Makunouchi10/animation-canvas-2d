# 🚀 POO con Canvas - Simulación de Física con Bolas Rebotadoras

![POO Canvas Demo](demo.gif) <!-- Agrega tu GIF aquí -->

## 📖 Descripción

Demostración interactiva de **Programación Orientada a Objetos (POO)** usando **HTML5 Canvas** y **JavaScript puro**. Simula bolas que caen con **gravedad realista**, rebotan en las paredes y el suelo perdiendo energía progresivamente hasta detenerse.

¡Perfecto para aprender física básica en Canvas y principios OOP!

## ✨ Características

- ✅ **Física realista**: Gravedad (0.5), fricción (0.7), rebotes con pérdida de energía
- ✅ **Hasta 100 bolas simultáneas** configurables
- ✅ **Canvas redimensionable** en tiempo real
- ✅ **Efectos visuales**: Glassmorphism, gradientes radiales, animación 60fps
- ✅ **100% responsive** con Bootstrap
- ✅ **Sin dependencias externas** (solo CDN Bootstrap)

## 🚀 Inicio Rápido

1. Clona o descarga el repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo! 🎉

```bash
# Windows
start index.html

# O simplemente haz doble clic en index.html
```

## 🎮 Controles

| Control | Descripción | Rango |
|---------|-------------|-------|
| **Cantidad** | Número de bolas | 1-100 |
| **Ancho** | Ancho del canvas (px) | - |
| **Alto** | Alto del canvas (px) | - |
| **Aplicar cambios** | Genera nuevas bolas y ajusta canvas | - |

## 🔧 ¿Cómo Funciona?

### Clase `Circle` (POO)
```javascript
class Circle {
  constructor(x, radius, speed) {
    this.posX = x; this.posY = 0;
    this.radius = radius;
    this.dx = ...; this.dy = 0;
    this.gravity = 0.5;
    this.friction = 0.7;
    // ...
  }
  
  update() { /* física + draw */ }
}
```

**Física implementada**:
- `dy += gravity` (caída)
- Rebotes: `dy *= -friction`, `dx *= -1`
- Detención: `bounceCount > maxBounces`

### Loop de Animación
```javascript
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(...);
  circles.forEach(c => c.update());
}
```

## 🛠️ Tecnologías

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Canvas](https://img.shields.io/badge/Canvas-%23000000.svg?style=flat&logo=html5&logoColor=white)

## 📸 Capturas

<!-- Agrega screenshots aquí -->

## 🤝 Contribuir

¡Bienvenido! Crea un PR con mejoras:
- Más físicas (colisiones entre bolas)
- Efectos (sombras, trails)
- Modos (explosiones, imanes)

## 📄 Licencia

MIT License - ¡Usa libremente!

---

👨‍💻 **Desarrollado por: Tu Nombre**  
📧 **osva@example.com**  
🌐 **TEMA 2 - Graficación**


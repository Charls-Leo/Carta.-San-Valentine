# 💌 Carta Interactiva de San Valentín

Una experiencia web interactiva creada como una carta digital de San Valentín ❤️  
Incluye animaciones, videos por páginas, secciones bloqueadas con contraseña, una propuesta romántica interactiva y una animación final con confeti.

Este proyecto está pensado como una **sorpresa progresiva**, donde el usuario descubre el contenido paso a paso.

---

## ✨ Características principales

- 📩 Sobre animado que se abre al hacer click
- 🎶 Música de fondo automática tras la interacción inicial
- 🎥 Carta dividida en páginas usando **videos**
- 🔒 Sección protegida con contraseña
- 💘 Propuesta interactiva con respuestas forzadas (modo San Valentín 😄)
- 🎉 Pantalla final de aceptación con video + confeti animado
- ❤️ Efecto de corazones al hacer click en cualquier parte
- 📱 Diseño totalmente responsive (móvil, tablet y desktop)

---
```
## 🗂️ Estructura del proyecto

📁 proyecto/
│
├── index.html # Estructura principal
├── style.css # Estilos, animaciones y responsive
├── script.js # Lógica e interacciones
│
├── 📁 videos/
│ ├── 1.mp4 # Página 1 (introducción)
│ ├── 2.mp4 # Página 2 (sesión bloqueada)
│ ├── 3.mp4 # Página 3 (continuación)
│ └── 4.mp4 # Video final de aceptación ❤️
│
├── 📁 music/
│ └── Best.Part.mp3 # Música de fondo
```

---

## 🧠 Flujo general de la experiencia

1. El usuario ve un **sobre animado**
2. Al hacer click:
   - Se reproduce música
   - El sobre se abre
   - Se pasa a la pantalla de videos
3. Los videos funcionan como **páginas de una carta**
4. La página 2 está **bloqueada con contraseña**
5. En la página de la propuesta aparecen los botones **Sí / No**
6. Cualquier camino lleva finalmente a la **pantalla de aceptación**
7. Se reproduce el video final con **confeti animado**

---

## 🎥 Sistema de páginas por video

Cada página de la carta es un video distinto.

| Página | Archivo de video | Descripción |
|------|------------------|-------------|
| 1 | `1.mp4` | Introducción |
| 2 | `2.mp4` | Sesión bloqueada 🔒 |
| 3 | `3.mp4` | Continuación |
| Final | `4.mp4` | Aceptación ❤️ |

La navegación se controla desde `script.js` usando un objeto:

```js
const videos = {
  1: "videos/1.mp4",
  2: "videos/2.mp4",
  3: "videos/3.mp4"
};
```

---

## 🔒 Sistema de contraseña

La página 2 requiere una contraseña para avanzar.

### Configuración en script.js:
```
const PASSWORD_CORRECTA = "amor2025";
```
Funcionalidades:
- Modal con input de contraseña
- Validación al presionar botón o Enter
- Animación de error si es incorrecta
- Avance automático si es correcta

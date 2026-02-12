# 💌 Proyecto San Valentín - Carta Interactiva con Flores

Una experiencia web romántica dividida en dos partes:
1. **Carta animada** con sobre, videos por páginas, propuesta interactiva
2. **Flores creciendo** con texto animado final

---

## 📂 Estructura del Proyecto

```
proyecto-san-valentine/
│
├── 📁 carta/
│   ├── index.html          # Página principal de la carta
│   ├── style.css           # Estilos de la carta
│   ├── script.js           # Lógica de navegación y animaciones
│   │
│   ├── 📁 videos/          # DEBES CREAR ESTA CARPETA
│   │   ├── 1.mp4           # Página 1 (introducción)
│   │   ├── 3.mp4           # Página 2 (propuesta)
│   │   ├── 1-Cap2.mp4      # Capítulo 2 - Página 1
│   │   ├── 2-Cap2.mp4      # Capítulo 2 - Página 2
│   │   ├── 3-Cap2.mp4      # Capítulo 2 - Página 3
│   │   └── 4.mp4           # Video de aceptación con confeti
│   │
│   └── 📁 music/           # DEBES CREAR ESTA CARPETA
│       └── Best.Part.mp3   # Música de fondo
│
└── 📁 flores/
    ├── index.html          # Página de flores
    ├── style.css           # Estilos de flores + texto
    └── java.js             # Animación de entrada
```

---

## 🚀 Cómo usar

### 1. Preparar las carpetas
Crea las carpetas faltantes dentro de `carta/`:
- `videos/`
- `music/`

### 2. Agregar tus archivos multimedia
Coloca tus videos y música en las carpetas correspondientes con los nombres exactos mencionados arriba.

### 3. Abrir el proyecto
Abre `carta/index.html` en tu navegador para iniciar la experiencia.

---

## 🎯 Flujo de la experiencia

1. **Pantalla inicial:** Sobre animado flotante
2. **Click en el sobre:** Se abre y reproduce música de fondo
3. **Navegación por videos:** Avanza por las páginas de la carta
4. **Página 2 bloqueada:** Requiere contraseña (030126)
5. **Propuesta interactiva:** Botones "Sí" / "No" con confirmaciones progresivas
6. **Video de aceptación:** Con animación de confeti
7. **Botón "Final 🌸":** Redirige a la página de flores
8. **Flores creciendo:** Animación de flores con texto final romántico

---

## ⚙️ Configuración

### Cambiar la contraseña
En `carta/script.js` línea 49:
```javascript
const PASSWORD_CORRECTA = "030126"; // Cambia por tu contraseña
```

### Personalizar el texto final
En `flores/index.html` líneas 11-12:
```html
<h1 class="texto-animado">Gracias por ser mi San Valentine ❤️</h1>
<p class="subtexto-animado">Eres la persona más especial de mi vida</p>
```

### Ajustar rutas de videos
Si cambias los nombres de tus videos, modifica el objeto `videos` en `carta/script.js` líneas 53-61.

---

## 🎨 Características

### Carta (Parte 1)
- ✅ Sobre animado con flotación
- ✅ Música de fondo automática
- ✅ Navegación entre páginas (videos)
- ✅ Sistema de contraseña
- ✅ Propuesta con confirmaciones forzadas
- ✅ Animación de confeti
- ✅ Corazones al hacer click
- ✅ Totalmente responsive

### Flores (Parte 2)
- ✅ Animación de flores creciendo
- ✅ Texto superpuesto semitransparente
- ✅ Efectos de brillo en el texto
- ✅ Fondo nocturno con estrellas
- ✅ Animación de entrada suave

---

## 🔧 Solución de problemas

### Los videos no se reproducen
- Verifica que los archivos están en `carta/videos/`
- Verifica que los nombres son exactamente como se especifica
- Asegúrate de que sean archivos `.mp4`

### La música no suena
- Algunos navegadores bloquean autoplay de audio
- El usuario debe interactuar primero (click en el sobre)
- Verifica que el archivo está en `carta/music/Best.Part.mp3`

### No redirige a flores
- Verifica que las rutas de carpetas sean correctas
- La estructura debe ser exactamente como se muestra arriba
- Abre `carta/index.html` (no flores directamente)

---

## 💝 Créditos

Proyecto creado con amor para San Valentín 2025 ❤️

---

## 📝 Notas adicionales

- **Navegadores recomendados:** Chrome, Firefox, Edge (última versión)
- **No requiere servidor:** Funciona abriendo el HTML directamente
- **Optimizado para móviles:** Responsive design completo
- **Sin dependencias externas:** Todo el código está incluido

---

¡Disfruta tu carta digital! 💕🌸
onload = () => {
    // 1. Quitar la clase not-loaded (tu código original para las flores)
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  
    // 2. Configuración del texto (EDITA ESTO)
    const titulo = "Para Ti 🌸";
    const mensaje = "Las flores no se esfuerzan por ser hermosas… simplemente lo son. Como tú en mi vida.";
  
    // Referencias a los elementos
    const box = document.getElementById('message-box');
    const titleElement = document.getElementById('typewriter-title');
    const textElement = document.getElementById('typewriter-text');
  
    // Función para escribir letra por letra
    const typeWriter = (text, element, speed, callback) => {
      let i = 0;
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else if (callback) {
          callback(); // Llamar a la siguiente función si existe
        }
      }
      type();
    };
  
    // 3. Secuencia de animación
    // Esperamos 1.5 segundos (mientras cargan las flores) para mostrar la caja
    setTimeout(() => {
      box.classList.add('visible'); // Hace visible la caja
      
      // Empieza a escribir el Título
      typeWriter(titulo, titleElement, 100, () => {
        
        // Cuando termine el título, espera un poco y escribe el Mensaje
        setTimeout(() => {
          typeWriter(mensaje, textElement, 50, null);
        }, 500);
        
      });
    }, 1500);
  };
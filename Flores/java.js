onload = () => {
    // 1. Quitar la clase not-loaded (tu código original para las flores)
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  
    // 2. Configuración del texto (EDITA ESTO)
    const titulo = "Para Ti 🌸";
    const mensaje = "Quiero que sepas lo mucho que me importas, lo mucho que te quiero, lo mucho que me encantas."
                    + "Espero que te hayan gustado mucho las flores que te envié, te confieso que eres la primera chica a la que le regalo flores y me fascina la idea de poder contar que a la primera mujer a la que le di flores fuiste tú. Es algo que con gusto contaré alegremente por el resto de mis días. Y como las flores se secan y mueren, creí que sería buena idea darte unas que no perecerán nunca, al igual que nunca morirá el gran afecto y admiración que tengo hacia ti..\n\n"
                    + "Sé que no es mucho, sé que hasta ahora no te he podido dar ni un 10% de todo lo que mereces, pero prometo que en algún momento te podré dar el mundo entero, como tienes merecido por ser una chica tan especial."
                    + "Te quiero demasiado mi Ale, hasta el infinito y más 🤎♾️✨";
  
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

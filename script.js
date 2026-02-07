// ========== ELEMENTOS DEL DOM ==========
const pantallaInicial = document.getElementById('pantalla-inicial');
const pantallaVideos = document.getElementById('pantalla-videos');
const sello = document.getElementById('Sello');
const contenedor = document.getElementById('AbrirContenedor');
const h1 = document.querySelector('h1');
const pSorpresa = document.querySelector('.psorpresa');
const corazonesContainer = document.getElementById('corazones-container');

// Elementos de navegación
const videoCarta = document.getElementById('video-carta');
const btnAnterior = document.getElementById('btn-anterior');
const btnSiguiente = document.getElementById('btn-siguiente');
const paginaActual = document.getElementById('pagina-actual');

// Botones de propuesta (página 2)
const botonesPropuesta = document.getElementById('botones-propuesta');
const btnPropuestaSi = document.getElementById('btn-propuesta-si');
const btnPropuestaNo = document.getElementById('btn-propuesta-no');

// Modal de contraseña
const modalPassword = document.getElementById('modal-password');
const inputPassword = document.getElementById('input-password');
const btnVerificar = document.getElementById('btn-verificar');
const cerrarModal = document.getElementById('cerrar-modal');
const mensajeError = document.getElementById('mensaje-error');

// Modal de confirmación
const modalConfirmacion = document.getElementById('modal-confirmacion');
const confirmacionPregunta = document.getElementById('confirmacion-pregunta');
const confirmacionSubtitulo = document.getElementById('confirmacion-subtitulo');
const confirmacionNota = document.getElementById('confirmacion-nota');
const btnConfirmarSi = document.getElementById('btn-confirmar-si');
const btnConfirmarNo = document.getElementById('btn-confirmar-no');

// Pantalla de aceptación
const pantallaAceptacion = document.getElementById('pantalla-aceptacion');
const videoAceptacion = document.getElementById('video-aceptacion');
const confettiCanvas = document.getElementById('confeti-canvas');
const ctx = confettiCanvas.getContext('2d');

// Audio de fondo
const backgroundMusic = document.getElementById('background-music');

// ========== CONFIGURACIÓN ==========
const PASSWORD_CORRECTA = "amor2025"; // Cambia esto por la contraseña que quieras
let paginaActualNum = 1;
const totalPaginas = 3; // Ajusta según el número de videos que tengas

// Videos disponibles (ajusta las rutas según tu estructura)
const videos = {
    1: "videos/1.mp4",
    2: "videos/3.mp4",
    3: "videos/siguiente.mp4" // Video de la página 3 (bloqueada)
};

// Estado de confirmación para la pregunta de San Valentín
let estadoConfirmacion = 0; // 0: inicial, 1-4: niveles de confirmación

// Textos para cada nivel de confirmación
const mensajesConfirmacion = [
    {
        pregunta: "¿Estás segura?",
        subtitulo: "Piénsalo bien...",
        si: "Sí, ¡sí quiero!❤️",
        no: "No, sigo sin querer"
    },
    {
        pregunta: "¿Completamente segura?",
        subtitulo: "Es tu última oportunidad de pensarlo...",
        si: "¡ME CONVENCISTE, sí quiero!❤️",
        no: "No me convences..."
    },
    {
        pregunta: "¿Segura segura?",
        subtitulo: "De verdad, piénsalo dos veces...",
        si: "¡Cambié de parecer, sí quieroo!❤️",
        no: "Nada aún, no..."
    },
    {
        pregunta: "¿Segurísima segurísima?",
        subtitulo: "Esta es la última vez que pregunto...",
        si: "¡COMPLETAMENTE SEGURA, SÍ QUIERO! ❤️",
        no: "¡SÍ, ahora sí quiero! ❤️" // Ya no hay opción de no
    }
];

// ========== FUNCIÓN: CREAR CORAZONES AL HACER CLICK ==========
function crearCorazon(x, y) {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-click');
    corazon.innerHTML = '❤️';
    corazon.style.left = x + 'px';
    corazon.style.top = y + 'px';
    
    const randomX = (Math.random() - 0.5) * 40;
    corazon.style.transform = `translateX(${randomX}px)`;
    
    corazonesContainer.appendChild(corazon);
    
    setTimeout(() => {
        corazon.remove();
    }, 2000);
}

// Event listener para clicks en todo el documento
document.addEventListener('click', (e) => {
    crearCorazon(e.clientX, e.clientY);
});

// ========== FUNCIÓN: ABRIR CARTA Y CAMBIAR A PANTALLA DE VIDEOS ==========
function abrirCarta() {
    // Animar el sello
    sello.classList.add('sello-clicked');
        setTimeout(() => {
        sello.style.visibility = 'hidden';
        sello.style.pointerEvents = 'none';

    }, 600);

    
    // Reproducir música de fondo
    backgroundMusic.play().catch(error => {
        console.log('Error al reproducir audio:', error);
        // Algunos navegadores requieren interacción del usuario primero
    });
    
    // Mover título y subtítulo hacia arriba
    h1.style.transform = 'translateY(-120px)';
    pSorpresa.style.transform = 'translateY(-120px)';
    
    // Abrir el sobre
    contenedor.classList.add('sobre-abierto');
    
    // Después de 1 segundo, hacer desaparecer toda la pantalla inicial
    setTimeout(() => {
        pantallaInicial.classList.add('desaparecer');
        
        // Después de que desaparezca, mostrar la pantalla de videos
        setTimeout(() => {
            pantallaInicial.style.display = 'none';
            pantallaVideos.classList.remove('oculta');
            
            // Pequeño delay para la animación de aparición
            setTimeout(() => {
                pantallaVideos.classList.add('mostrar');
                videoCarta.play(); // Asegurar que el video se reproduzca
            }, 50);
        }, 1000);
    }, 800);
}

// Event listener para el sello
sello.addEventListener('click', (e) => {
    e.stopPropagation();
    abrirCarta();
});

// También se puede abrir haciendo click en el contenedor
contenedor.addEventListener('click', (e) => {
    if (e.target !== sello && !sello.contains(e.target)) {
        abrirCarta();
    }
});

// ========== FUNCIÓN: CAMBIAR VIDEO ==========
function cambiarVideo(numeroPagina) {
    if (videos[numeroPagina]) {
        videoCarta.src = videos[numeroPagina];
        videoCarta.load();
        videoCarta.play();
    }
    
    // Mostrar/ocultar botones de propuesta según la página
    if (numeroPagina === 2) {
        botonesPropuesta.classList.remove('oculta');
    } else {
        botonesPropuesta.classList.add('oculta');
    }
}

// ========== FUNCIÓN: ACTUALIZAR NAVEGACIÓN ==========
function actualizarNavegacion() {
    // Actualizar texto de página actual
    paginaActual.textContent = `Página ${paginaActualNum}`;
    
    // Deshabilitar botón anterior si estamos en la primera página
    btnAnterior.disabled = paginaActualNum === 1;
    
    // El botón siguiente siempre está habilitado (pero puede abrir modal)
    btnSiguiente.disabled = false;
}

// ========== NAVEGACIÓN: PÁGINA ANTERIOR ==========
btnAnterior.addEventListener('click', () => {
    if (paginaActualNum > 1) {
        paginaActualNum--;
        cambiarVideo(paginaActualNum);
        actualizarNavegacion();
    }
});

// ========== NAVEGACIÓN: PÁGINA SIGUIENTE ==========
btnSiguiente.addEventListener('click', () => {
    // Si estamos en la página 2, mostrar modal de contraseña
    if (paginaActualNum === 2) {
        mostrarModalPassword();
    } 
    // Si estamos en página 1, ir a página 2 sin problemas
    else if (paginaActualNum < 2) {
        paginaActualNum++;
        cambiarVideo(paginaActualNum);
        actualizarNavegacion();
    }
});

// ========== MODAL DE CONTRASEÑA ==========
function mostrarModalPassword() {
    modalPassword.classList.remove('oculta');
    setTimeout(() => {
        modalPassword.classList.add('mostrar');
    }, 10);
    inputPassword.value = '';
    mensajeError.classList.add('oculta');
    inputPassword.focus();
}

function cerrarModalPassword() {
    modalPassword.classList.remove('mostrar');
    setTimeout(() => {
        modalPassword.classList.add('oculta');
    }, 300);
}

// Cerrar modal al hacer click en la X
cerrarModal.addEventListener('click', cerrarModalPassword);

// Cerrar modal al hacer click fuera del contenido
modalPassword.addEventListener('click', (e) => {
    if (e.target === modalPassword) {
        cerrarModalPassword();
    }
});

// Verificar contraseña
btnVerificar.addEventListener('click', verificarPassword);

// Permitir Enter para verificar
inputPassword.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        verificarPassword();
    }
});

function verificarPassword() {
    const passwordIngresada = inputPassword.value;
    
    if (passwordIngresada === PASSWORD_CORRECTA) {
        // Contraseña correcta - ir a la siguiente página
        mensajeError.classList.add('oculta');
        cerrarModalPassword();
        paginaActualNum++;
        cambiarVideo(paginaActualNum);
        actualizarNavegacion();
    } else {
        // Contraseña incorrecta - mostrar error
        mensajeError.classList.remove('oculta');
        inputPassword.value = '';
        inputPassword.focus();
        
        // Hacer vibrar el input (efecto visual de error)
        inputPassword.style.animation = 'shake 0.5s';
        setTimeout(() => {
            inputPassword.style.animation = '';
        }, 500);
    }
}

// Animación de shake para el error
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// ========== BOTONES DE PROPUESTA (PÁGINA 2) ==========

// Botón SÍ - Mostrar video de aceptación con confeti
btnPropuestaSi.addEventListener('click', () => {
    mostrarVideoAceptacion();
});

// Botón NO - Mostrar modal de confirmación
btnPropuestaNo.addEventListener('click', () => {
    estadoConfirmacion = 0; // Resetear al primer nivel
    mostrarModalConfirmacion();
});

// ========== MODAL DE CONFIRMACIÓN ==========
function mostrarModalConfirmacion() {
    actualizarModalConfirmacion();
    modalConfirmacion.classList.remove('oculta');
    setTimeout(() => {
        modalConfirmacion.classList.add('mostrar');
    }, 10);
}

function cerrarModalConfirmacion() {
    modalConfirmacion.classList.remove('mostrar');
    setTimeout(() => {
        modalConfirmacion.classList.add('oculta');
    }, 300);
}

function actualizarModalConfirmacion() {
    const mensaje = mensajesConfirmacion[estadoConfirmacion];
    confirmacionPregunta.textContent = mensaje.pregunta;
    confirmacionSubtitulo.textContent = mensaje.subtitulo;
    btnConfirmarSi.textContent = mensaje.si;
    btnConfirmarNo.textContent = mensaje.no;
    
    // En el último nivel, mostrar la nota y cambiar estilo del botón No
    if (estadoConfirmacion === 3) {
        confirmacionNota.classList.remove('oculta');
        btnConfirmarNo.classList.add('btn-si');
        btnConfirmarNo.classList.remove('btn-no');
    } else {
        confirmacionNota.classList.add('oculta');
        btnConfirmarNo.classList.remove('btn-si');
        btnConfirmarNo.classList.add('btn-no');
    }
}

// Evento del botón SÍ en modal de confirmación
btnConfirmarSi.addEventListener('click', () => {
    cerrarModalConfirmacion();
    mostrarVideoAceptacion();
});

// Evento del botón NO en modal de confirmación
btnConfirmarNo.addEventListener('click', () => {
    if (estadoConfirmacion < 3) {
        estadoConfirmacion++;
        actualizarModalConfirmacion();
    } else {
        // En el último nivel, el botón "No" también lleva al video de aceptación
        cerrarModalConfirmacion();
        mostrarVideoAceptacion();
    }
});

// ========== FUNCIÓN: MOSTRAR VIDEO DE ACEPTACIÓN CON CONFETI ==========
function mostrarVideoAceptacion() {
    // Ocultar pantalla de videos
    pantallaVideos.style.display = 'none';
    
    // Mostrar pantalla de aceptación
    pantallaAceptacion.classList.remove('oculta');
    setTimeout(() => {
        pantallaAceptacion.classList.add('mostrar');
        videoAceptacion.play();
        iniciarConfeti();
    }, 100);
}

// ========== ANIMACIÓN DE CONFETI ==========

// Configuración del canvas
function resizeCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Partículas de confeti
const confettiParticles = [];
const confettiColors = ['#ff66b2', '#ff4081', '#d62828', '#ffd700', '#ffed4e', '#ffc8dd'];

class ConfettiParticle {
    constructor() {
        this.x = Math.random() * confettiCanvas.width;
        this.y = -10;
        this.size = Math.random() * 8 + 4;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
    }
    
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        
        if (this.y > confettiCanvas.height) {
            this.y = -10;
            this.x = Math.random() * confettiCanvas.width;
        }
    }
    
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function iniciarConfeti() {
    // Limpiar partículas anteriores
    confettiParticles.length = 0;
    
    // Crear partículas
    for (let i = 0; i < 150; i++) {
        confettiParticles.push(new ConfettiParticle());
    }
    
    // Animar
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    
    confettiParticles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    requestAnimationFrame(animateConfetti);
}

// ========== INICIALIZACIÓN ==========
// Actualizar navegación al cargar
actualizarNavegacion();

// Efecto de partículas de corazones al cargar (opcional)
window.addEventListener('load', () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            crearCorazon(x, y);
        }, i * 200);
    }
});

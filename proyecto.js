/* ==========================================================
   JAR Design — Página de cada proyecto (proyecto.html?id=...)
   Los datos están en proyectos-datos.js
   ========================================================== */

const idProyecto = new URLSearchParams(window.location.search).get("id");
const indiceProyecto = PROYECTOS.findIndex((p) => p.id === idProyecto);
const proyecto = PROYECTOS[indiceProyecto];

if (proyecto) {
  pintarProyecto();
} else {
  mostrarNoEncontrado();
}

ocultarBotonFlotanteEn([".proyecto-final", ".pie"]);


/* ---------- 1. Banner, descripción y botón de WhatsApp ---------- */

function pintarProyecto() {
  document.title = `${proyecto.nombre} — JAR Design`;

  document.getElementById("proyectoPortadaImg").src = proyecto.portada;
  document.getElementById("proyectoMeta").textContent = metaDe(proyecto);
  document.getElementById("proyectoNombre").textContent = proyecto.nombre;

  const texto = document.getElementById("proyectoTexto");
  proyecto.descripcion.forEach((parrafo) => {
    const p = document.createElement("p");
    p.textContent = parrafo;
    texto.appendChild(p);
  });

  document.getElementById("proyectoWhatsapp").href =
    enlaceWhatsapp(`Hola JAR Design, vi el ${proyecto.nombre} en su página y quiero un proyecto así.`);

  pintarMosaico();
  pintarNavegacion();
}

function mostrarNoEncontrado() {
  document.title = "Proyecto no encontrado — JAR Design";
  document.querySelector("main").innerHTML = `
    <section class="seccion proyecto-final no-encontrado">
      <h1 class="seccion__titulo">Proyecto no <em>encontrado</em></h1>
      <p class="seccion__intro">Puede que el enlace esté mal escrito o que el proyecto ya no esté publicado.</p>
      <a class="boton" href="proyectos.html">Ver todos los proyectos</a>
    </section>
  `;
}


/* ---------- 2. Galería tipo mosaico ---------- */

function pintarMosaico() {
  const mosaico = document.getElementById("mosaico");
  // Con pocas fotos se usan menos columnas para que no quede vacío
  mosaico.style.setProperty("--n", Math.min(proyecto.fotos.length, 4));

  proyecto.fotos.forEach((foto, i) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "mosaico__foto";
    boton.setAttribute("aria-label", `Ampliar foto ${i + 1} de ${proyecto.fotos.length}`);
    boton.innerHTML = `<img src="${foto}" alt="${proyecto.nombre}, foto ${i + 1}" loading="lazy">`;
    // Al cargar, la foto toma su forma real (antes ocupa un espacio vertical para que nada salte)
    const img = boton.querySelector("img");
    img.addEventListener("load", () => {
      img.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
    });
    boton.addEventListener("click", () => abrirVisor(i));
    mosaico.appendChild(boton);
  });
}


/* ---------- 3. Visor de fotos en pantalla completa ---------- */

const visor = document.getElementById("visor");
const visorFoto = document.getElementById("visorFoto");
const visorContador = document.getElementById("visorContador");
let fotoActual = 0;

function mostrarFoto(i) {
  const total = proyecto.fotos.length;
  fotoActual = (i + total) % total; // da la vuelta al llegar al final
  visorFoto.classList.add("visor__foto--cambiando");
  visorFoto.onload = () => visorFoto.classList.remove("visor__foto--cambiando");
  visorFoto.src = proyecto.fotos[fotoActual];
  visorFoto.alt = `${proyecto.nombre}, foto ${fotoActual + 1}`;
  visorContador.textContent = `${fotoActual + 1} / ${total}`;
  // Carga de una vez la siguiente para que pase rápido
  new Image().src = proyecto.fotos[(fotoActual + 1) % total];
}

function abrirVisor(i) {
  mostrarFoto(i);
  visor.showModal();
}

document.getElementById("visorCerrar").addEventListener("click", () => visor.close());
document.getElementById("visorAnterior").addEventListener("click", () => mostrarFoto(fotoActual - 1));
document.getElementById("visorSiguiente").addEventListener("click", () => mostrarFoto(fotoActual + 1));

// Cerrar al tocar el fondo oscuro
visor.addEventListener("click", (e) => {
  if (e.target === visor) visor.close();
});

// Flechas del teclado (Esc ya cierra solo)
visor.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") mostrarFoto(fotoActual - 1);
  if (e.key === "ArrowRight") mostrarFoto(fotoActual + 1);
});

// Deslizar con el dedo en celular
let toqueInicioX = null;
visor.addEventListener("touchstart", (e) => { toqueInicioX = e.touches[0].clientX; }, { passive: true });
visor.addEventListener("touchend", (e) => {
  if (toqueInicioX === null) return;
  const distancia = e.changedTouches[0].clientX - toqueInicioX;
  if (Math.abs(distancia) > 50) mostrarFoto(fotoActual + (distancia < 0 ? 1 : -1));
  toqueInicioX = null;
});


/* ---------- 4. Proyecto anterior / siguiente ---------- */

function pintarNavegacion() {
  const total = PROYECTOS.length;
  const anterior = document.getElementById("proyectoAnterior");
  const siguiente = document.getElementById("proyectoSiguiente");

  if (total < 2) {
    anterior.hidden = true;
    siguiente.hidden = true;
    return;
  }

  const enlazar = (enlace, p) => {
    enlace.href = `proyecto.html?id=${encodeURIComponent(p.id)}`;
    enlace.querySelector("strong").textContent = p.nombre;
  };

  enlazar(siguiente, PROYECTOS[(indiceProyecto + 1) % total]);
  // Con solo dos proyectos, "anterior" y "siguiente" serían el mismo
  if (total === 2) anterior.hidden = true;
  else enlazar(anterior, PROYECTOS[(indiceProyecto - 1 + total) % total]);
}

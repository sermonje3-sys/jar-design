/* ==========================================================
   JAR Design — Página de proyectos (lista de banners)
   Los datos están en proyectos-datos.js
   ========================================================== */

/* ---------- 1. Un banner por proyecto, que lleva a su página ---------- */

const listaProyectos = document.getElementById("proyectosLista");

PROYECTOS.forEach((p) => {
  const banner = document.createElement("a");
  banner.className = "proyecto";
  banner.href = `proyecto.html?id=${encodeURIComponent(p.id)}`;
  banner.setAttribute("aria-label", `${p.nombre}, ${metaDe(p)}. Ver proyecto`);
  banner.innerHTML = `
    <img src="${p.portada}" alt="" loading="lazy">
    <span class="proyecto__texto">
      <span class="proyecto__meta">${metaDe(p)}</span>
      <span class="proyecto__nombre">${p.nombre}</span>
      <span class="proyecto__ver">Ver proyecto</span>
    </span>
  `;
  listaProyectos.appendChild(banner);
});


/* ---------- 2. Ocultar "Contáctanos" en el cierre y el pie de página ---------- */

ocultarBotonFlotanteEn([".proyectos-cierre", ".pie"]);

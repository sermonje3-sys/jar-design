/* ==========================================================
   JAR Design — Código compartido por todas las páginas
   ========================================================== */

const WHATSAPP = "573175140460";

function enlaceWhatsapp(mensaje) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

// Esconde el botón flotante "Contáctanos" mientras se ven estas zonas
// (porque ya tienen sus propios botones de WhatsApp)
function ocultarBotonFlotanteEn(zonas) {
  const botonFlotante = document.querySelector(".btn-flotante");
  const visibles = new Set();
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => (e.isIntersecting ? visibles.add(e.target) : visibles.delete(e.target)));
    botonFlotante.classList.toggle("btn-flotante--oculto", visibles.size > 0);
  }, { threshold: 0.15 });

  zonas
    .map((zona) => document.querySelector(zona))
    .filter(Boolean)
    .forEach((zona) => observador.observe(zona));
}

/* ==========================================================
   JAR Design — Página de inicio
   ========================================================== */

// WhatsApp y el botón flotante están en comun.js


/* ---------- 1. La portada desaparece al bajar ---------- */

const hero = document.querySelector(".hero");
const bajar = document.querySelector(".bajar");
const menuFijo = document.getElementById("menuFijo");
let esperandoCuadro = false;

function actualizarPortada() {
  esperandoCuadro = false;
  // 0 = arriba del todo, 1 = la portada ya quedó tapada
  const progreso = Math.min(window.scrollY / hero.offsetHeight, 1);
  hero.style.setProperty("--p", progreso.toFixed(3));
  bajar.style.setProperty("--p", progreso.toFixed(3));
  hero.classList.toggle("hero--oculto", progreso >= 1);
  // El menú fijo aparece cuando la portada casi desaparece
  menuFijo.classList.toggle("menu-fijo--visible", progreso >= 0.9);
}

window.addEventListener("scroll", () => {
  if (!esperandoCuadro) {
    esperandoCuadro = true;
    requestAnimationFrame(actualizarPortada);
  }
}, { passive: true });

window.addEventListener("resize", actualizarPortada);
actualizarPortada();

// Resalta en el menú la sección que se está viendo
const enlacesMenu = document.querySelectorAll(".menu-fijo__nav a");
const observadorMenu = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (!e.isIntersecting) return;
    enlacesMenu.forEach((a) => a.setAttribute("aria-current", String(a.hash === `#${e.target.id}`)));
  });
}, { rootMargin: "-45% 0px -50% 0px" });

["catalogo", "nosotros", "testimonios", "contacto"]
  .forEach((id) => observadorMenu.observe(document.getElementById(id)));


/* ---------- 2. Catálogo ---------- */

// Muebles. Para agregar uno nuevo, copia una línea y cambia los datos.
// linea: "propio" o "exterior" (Solattu)
const TOSCANA   = { nombre: "Toscana", categoria: "Comedor", precio: "$19.800.000", imagen: "img/toscana.jpg", imagenDetalle: "img/toscana-detalle.jpg", linea: "propio", desc: "Diseño y fabricación propia de JAR Design. Descripción por completar." };
const PRAGA     = { nombre: "Praga", categoria: "Comedor", precio: "$11.900.000", imagen: "img/praga.jpg", imagenDetalle: "img/praga-detalle.jpg", linea: "propio", desc: "Diseño y fabricación propia de JAR Design. Descripción por completar." };
const AMALFI    = { nombre: "Amalfi", categoria: "Sala de exterior", precio: "$19.568.000", imagen: "img/amalfi.jpg", linea: "exterior", desc: "Curvas suaves y cuerdas tejidas en poliéster le dan a este set su sello distintivo: liviano, delicado y cargado de personalidad. Su estructura resiste el sol y la intemperie sin perder elegancia, ideal para una sala de exterior con carácter propio." };
const TARRAGONA = { nombre: "Tarragona", categoria: "Terraza", precio: "$11.768.000", imagen: "img/tarragona.jpg", linea: "exterior", desc: "Minimalismo cálido en cada línea. Su estructura en aluminio y sus cojines en tela resistente al agua y al sol crean un espacio sereno y contemporáneo, perfecto para quienes prefieren la sobriedad con un toque de sofisticación." };
const CANGGU    = { nombre: "Canggú", categoria: "Terraza / Jardín", precio: "$8.532.000", imagen: "img/canggu.jpg", linea: "exterior", desc: "Inspirado en los bosques tropicales, este set combina fibras tejidas a mano con la calidez de la madera artesanal. Una invitación a la calma, pensado para las tardes al aire libre entre plantas y buena compañía." };
const CADAQUES  = { nombre: "Cadaqués", categoria: "Sala - Comedor", precio: "$11.169.000", imagen: "img/cadaques.jpg", linea: "exterior", desc: "Diseño de patas y brazos abiertos que dan elegancia al espacio. La colección de exterior Cadaqués con marco negro viene con cojines de color gris, y el marco blanco viene con cojines en color taupe. Incluye sala (sofá doble + 2 sillones) y comedor para 6 puestos." };
const NIZA      = { nombre: "Niza", categoria: "Sala - Comedor", precio: "$15.455.000", imagen: "img/niza.jpg", linea: "exterior", desc: "Las curvas de los brazos caracterizan a este modelo compuesto por láminas delgadas de aluminio color plata, con un acabado cepillado que carga el diseño de modernidad. En la parte superior del descansabrazos, un detalle en simulación madera realza el diseño y le da calidez. Incluye sala (sofá doble o triple) y comedor para 6 puestos." };
const POMPANO   = { nombre: "Pompano", categoria: "Sala - Comedor", precio: "$20.407.000", imagen: "img/pompano.jpg", linea: "exterior", desc: "La mezcla de madera teca y aluminio crean un mueble fino y potente, perfecto para ambientes modernos. Su tonalidad única perlada le aporta contraste a la vida agitada, invitando a la calma y la relajación. Incluye sala (sofá triple, gris o negro) y comedor para 8 puestos expansible a 10." };

// Categorías de la isla. Se ven 4 fotos; si hay más, aparece "Ver más".
// Si una categoría no tiene fotos, muestra "Foto próximamente".
// pedido: lo que dice el mensaje de WhatsApp al tocar "Cotiza ...".
const catalogo = {
  salas: {
    cotizar: "Cotiza tu sala a la medida", pedido: "una sala a la medida", icono: "sofa",
    fotos: [],
  },
  comedores: {
    cotizar: "Cotiza tu comedor a la medida", pedido: "un comedor a la medida", icono: "silla",
    fotos: [TOSCANA, PRAGA, { ...TOSCANA, imagen: "img/toscana-detalle.jpg" }, { ...PRAGA, imagen: "img/praga-detalle.jpg" }],
  },
  exterior: {
    cotizar: "Cotiza tus muebles de exterior", pedido: "muebles de exterior", icono: "silla",
    fotos: [AMALFI, TARRAGONA, CANGGU, CADAQUES, NIZA, POMPANO],
  },
  cortinas: {
    cotizar: "Cotiza tus cortinas", pedido: "cortinas", icono: "cortina",
    fotos: [],
  },
  mobiliario: {
    cotizar: "Cotiza tu mobiliario personalizado", pedido: "mobiliario personalizado", icono: "mueble",
    fotos: [],
  },
};

const ICONOS = {
  sofa: '<path d="M10 24v-6a4 4 0 014-4h20a4 4 0 014 4v6" /><path d="M6 36V27a3 3 0 016 0v3h24v-3a3 3 0 016 0v9z" /><path d="M10 36v4M38 36v4" />',
  silla: '<path d="M14 6h20v18H14z" /><path d="M12 24h24v5H12z" /><path d="M14 29l-2 13M34 29l2 13" />',
  cortina: '<path d="M4 8h40" /><path d="M8 8v30c3 2 6 2 9 0V8" /><path d="M31 8v30c3 2 6 2 9 0V8" /><path d="M12.5 9v29M35.5 9v29" />',
  mueble: '<path d="M10 6h28v34H10z" /><path d="M24 6v34" /><path d="M20 21v5M28 21v5" /><path d="M12 40v3M36 40v3" />',
};

const NOMBRE_LINEA = { propio: "Línea propia", exterior: "Exterior Solattu" };
const FOTOS_VISIBLES = 4;

const galeria = document.getElementById("galeria");
const verMas = document.getElementById("verMas");
const catalogoCta = document.getElementById("catalogoCta");
const opcionesIsla = document.querySelectorAll(".isla__opcion");
const opcionesSubIsla = document.querySelectorAll(".sub-isla__opcion");
const botonMobiliario = document.querySelector('.isla__opcion[data-grupo="mobiliario"]');
const subIsla = document.getElementById("subIsla");
// Categorías que van dentro de "Mobiliario" (en la sub-isla)
const GRUPO_MOBILIARIO = [...opcionesSubIsla].map((o) => o.dataset.categoria);
const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
let categoriaActual = null;
let cambioPendiente = null;

function crearFoto(mueble, i) {
  const foto = document.createElement("button");
  foto.type = "button";
  foto.className = "foto";
  foto.style.setProperty("--i", i);
  foto.setAttribute("aria-label", `${mueble.nombre}, ${mueble.categoria}. Ver detalle`);
  foto.innerHTML = `
    <img src="${mueble.imagen}" alt="" loading="lazy">
    <span class="foto__texto">
      <span class="foto__nombre">${mueble.nombre}</span>
      <span class="foto__detalle">${mueble.categoria}</span>
    </span>
  `;
  foto.addEventListener("click", () => abrirDetalle(mueble));
  return foto;
}

function crearFotoVacia(icono, i) {
  const foto = document.createElement("div");
  foto.className = "foto foto--vacia";
  foto.style.setProperty("--i", i);
  foto.innerHTML = `<svg viewBox="0 0 48 48" aria-hidden="true">${ICONOS[icono]}</svg><span>Foto próximamente</span>`;
  return foto;
}

function mostrarCategoria(clave) {
  const cat = catalogo[clave];
  categoriaActual = clave;
  galeria.innerHTML = "";

  if (cat.fotos.length) {
    cat.fotos.slice(0, FOTOS_VISIBLES).forEach((mueble, i) => galeria.appendChild(crearFoto(mueble, i)));
  } else {
    for (let i = 0; i < FOTOS_VISIBLES; i++) galeria.appendChild(crearFotoVacia(cat.icono, i));
  }

  const restantes = cat.fotos.length - FOTOS_VISIBLES;
  verMas.hidden = restantes <= 0;
  verMas.textContent = `Ver más (${restantes})`;
  catalogoCta.innerHTML = `${cat.cotizar} <span aria-hidden="true">→</span>`;
  catalogoCta.href = enlaceWhatsapp(`Hola JAR Design, quiero cotizar ${cat.pedido}.`);
}

// Abre o cierra la sub-isla de Mobiliario
function abrirSubIsla(abrir) {
  subIsla.classList.toggle("sub-isla--abierta", abrir);
  subIsla.inert = !abrir;
  botonMobiliario.setAttribute("aria-expanded", String(abrir));
}

// Marca los botones de la isla y la sub-isla según la categoría elegida
function marcarOpciones(clave) {
  const enMobiliario = GRUPO_MOBILIARIO.includes(clave);
  opcionesIsla.forEach((o) => {
    const activa = o === botonMobiliario ? enMobiliario : o.dataset.categoria === clave;
    o.setAttribute("aria-pressed", String(activa));
  });
  opcionesSubIsla.forEach((o) => o.setAttribute("aria-pressed", String(o.dataset.categoria === clave)));
  abrirSubIsla(enMobiliario);
}

// Las fotos salen y entran las de la nueva categoría
function cambiarCategoria(clave) {
  if (clave === categoriaActual) return;
  marcarOpciones(clave);
  if (GRUPO_MOBILIARIO.includes(clave)) ultimaDeMobiliario = clave;

  clearTimeout(cambioPendiente);
  galeria.classList.add("galeria--saliendo");
  cambioPendiente = setTimeout(() => {
    galeria.classList.remove("galeria--saliendo");
    mostrarCategoria(clave);
  }, sinMovimiento.matches ? 0 : 380);
}

// En celular la isla se desliza para centrar la opción elegida
function centrarEnIsla(opcion) {
  const isla = opcion.parentElement;
  isla.scrollTo({ left: opcion.offsetLeft - (isla.clientWidth - opcion.offsetWidth) / 2, behavior: "smooth" });
}

// Recuerda qué tipo de mobiliario se vio por última vez
let ultimaDeMobiliario =
  GRUPO_MOBILIARIO.find((k) => catalogo[k].fotos.length) || GRUPO_MOBILIARIO[0];

opcionesIsla.forEach((opcion) => {
  opcion.addEventListener("click", () => {
    centrarEnIsla(opcion);
    // "Mobiliario" abre la sub-isla y muestra el último tipo elegido
    cambiarCategoria(opcion === botonMobiliario ? ultimaDeMobiliario : opcion.dataset.categoria);
  });
});

opcionesSubIsla.forEach((opcion) => {
  opcion.addEventListener("click", () => {
    centrarEnIsla(opcion);
    cambiarCategoria(opcion.dataset.categoria);
  });
});

verMas.addEventListener("click", () => {
  catalogo[categoriaActual].fotos
    .slice(FOTOS_VISIBLES)
    .forEach((mueble, i) => galeria.appendChild(crearFoto(mueble, i)));
  verMas.hidden = true;
});

// Empieza en la primera categoría que tenga fotos
const categoriaInicial = Object.keys(catalogo).find((k) => catalogo[k].fotos.length) || "salas";
marcarOpciones(categoriaInicial);
mostrarCategoria(categoriaInicial);


/* ---------- 3. Detalle del mueble ---------- */

const detalle = document.getElementById("detalle");

function abrirDetalle(p) {
  document.getElementById("detalleFoto").src = p.imagenDetalle || p.imagen;
  document.getElementById("detalleFoto").alt = p.nombre;
  const linea = document.getElementById("detalleLinea");
  linea.textContent = NOMBRE_LINEA[p.linea];
  linea.className = `etiqueta etiqueta--${p.linea}`;
  document.getElementById("detalleNombre").textContent = p.nombre;
  document.getElementById("detalleCategoria").textContent = p.categoria;
  document.getElementById("detallePrecio").textContent = p.precio;
  document.getElementById("detalleDesc").textContent = p.desc;
  document.getElementById("detalleWhatsapp").href =
    enlaceWhatsapp(`Hola JAR Design, me interesa el modelo ${p.nombre} (${p.categoria}) del catálogo.`);

  detalle.showModal();
}

document.getElementById("detalleCerrar").addEventListener("click", () => detalle.close());

// Cerrar al hacer clic por fuera
detalle.addEventListener("click", (e) => {
  if (e.target === detalle) detalle.close();
});


/* ---------- 4. Ocultar "Contáctanos" donde ya hay botones de WhatsApp ---------- */

ocultarBotonFlotanteEn(["#contacto", ".pie"]);

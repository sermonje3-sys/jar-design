/* ==========================================================
   JAR Design — Lista de proyectos especiales
   Se usa en proyectos.html (banners) y en proyecto.html (página de cada uno).

   Para agregar un proyecto:
   1. Pon sus fotos en la carpeta img/proyectos/<id>/ (01.jpg, 02.jpg, ...)
   2. Copia un bloque de abajo y cambia los datos.
   - id: nombre corto sin espacios ni tildes (va en la dirección: proyecto.html?id=karibana)
   - tipo y lugar: salen arriba del nombre ("Apartamento · Cartagena"); el lugar es opcional
   - portada: la foto del banner (mejor horizontal)
   - descripcion: cada texto entre comillas es un párrafo
   - fotos: en el orden en que salen en la galería
   ========================================================== */

// "Tipo · Lugar" (si no hay lugar, solo el tipo)
function metaDe(p) {
  return [p.tipo, p.lugar].filter(Boolean).join(" · ");
}

// Lista de fotos 01.jpg, 02.jpg, ... de una carpeta
function fotosDe(carpeta, cantidad) {
  return Array.from({ length: cantidad }, (_, i) => `${carpeta}/${String(i + 1).padStart(2, "0")}.jpg`);
}

// OJO: las descripciones son BORRADORES escritos a partir de las fotos. Revísalas y ajústalas.
const PROYECTOS = [
  {
    id: "vallejo-bosque-verde",
    nombre: "Proyecto Vallejo Bosque Verde",
    tipo: "Residencial",
    lugar: "",
    portada: "img/proyectos/vallejo-bosque-verde/15.jpg",
    descripcion: [
      "Un apartamento con varios espacios diseñados a la medida: la alcoba principal, la zona social, el cine en casa y una habitación infantil con identidad propia.",
      "En la alcoba principal, un cabecero en paneles de tres tonos marca el carácter del espacio. La sala reúne un sofá seccional, una mesa de centro en madera de formas curvas y sillas azules que le dan color al conjunto.",
      "Los muebles lacados en blanco, el centro de entretenimiento y la consola con espejo redondo aportan orden y luz. Para ver películas, un juego de sillas reclinables en azul.",
      "La habitación infantil es un viaje al espacio: planetas, estrellas y un astronauta sobre fondo azul, un techo con iluminación indirecta y una zona de estudio con repisas iluminadas.",
    ],
    fotos: fotosDe("img/proyectos/vallejo-bosque-verde", 21),
  },
  {
    id: "bosque-verde",
    nombre: "Proyecto Bosque Verde",
    tipo: "Residencial",
    lugar: "",
    portada: "img/proyectos/bosque-verde/10.jpg",
    descripcion: [
      "Un apartamento de tonos neutros con acentos en negro brillante, rojo y rosado, donde cada espacio tiene su propio carácter.",
      "La alcoba juvenil combina un cabecero capitoneado, un tocador con espejo ovalado y una silla rosada; la alcoba principal suma una zona de estudio con repisas y televisor.",
      "En la zona social, sofás en tonos crema y sillas rojas rodean una mesa de centro negra de líneas curvas. El comedor reúne una mesa en negro brillante con sillas en crema, y los muebles de televisión combinan madera oscura con acabados brillantes.",
      "Los baños con muebles blancos, el baño social con un espejo redondo iluminado y la zona de lavandería completan el proyecto.",
    ],
    fotos: fotosDe("img/proyectos/bosque-verde", 22),
  },
  {
    id: "libbe",
    nombre: "Proyecto LIBBE",
    tipo: "Residencial",
    lugar: "",
    portada: "img/proyectos/libbe/06.jpg",
    descripcion: [
      "Un apartamento contemporáneo donde la madera, los tonos grises y la luz natural conectan todos los espacios.",
      "El comedor, con mesa en madera oscura y sillas tapizadas, se abre hacia un jardín vertical que lleva la naturaleza al interior. En la sala, un sofá en L, una mesa de centro redonda y un mueble de televisión en negro pensado para el cine en casa.",
      "La alcoba principal tiene un cabecero tapizado a todo lo ancho, y la cocina combina gabinetes blancos con una isla y una nevera integrada en madera.",
      "El vestier, con repisas iluminadas para el calzado, completa un proyecto pensado al detalle.",
    ],
    fotos: fotosDe("img/proyectos/libbe", 13),
  },
  {
    id: "serrania-de-los-nogales",
    nombre: "Proyecto Serranía de los Nogales",
    tipo: "Residencial",
    lugar: "Rosales, Bogotá",
    portada: "img/proyectos/serrania-de-los-nogales/05.jpg",
    descripcion: [
      "Un apartamento en Rosales, Bogotá, diseñado para toda la familia, incluidos sus gatos.",
      "Repisas en forma de árbol y muebles en madera con nichos y pasos para gatos recorren la sala y el pasillo, integrados a la decoración.",
      "La sala, en tonos claros y con cortinas verticales, se abre al comedor bajo una lámpara colgante. El cine en casa tiene paneles acústicos hexagonales, luz indirecta y sillas reclinables.",
      "Un bar con vitrinas iluminadas y una biblioteca en madera completan el proyecto.",
    ],
    // De la carpeta original se dejaron fuera 5 fotos: tres con franjas negras,
    // una captura de pantalla del celular y una tira angosta de baja resolución.
    fotos: fotosDe("img/proyectos/serrania-de-los-nogales", 16),
  },
  {
    id: "lafori",
    nombre: "Proyecto Lafori",
    tipo: "Residencial",
    lugar: "Bogotá",
    portada: "img/proyectos/lafori/04.jpg",
    descripcion: [
      "Un apartamento en Bogotá con terraza propia, donde la sala, el comedor y la zona social exterior se piensan como un solo recorrido.",
      "En la sala, sofás capitoneados en gris y sillas tapizadas en tonos claros. El comedor combina una mesa en madera con sillas de espaldar alto, y la cocina abierta suma una barra con butacos.",
      "La sala de televisión, con un sofá en L en azul y un tapete de colores, es el espacio para la música y el cine.",
      "La terraza tiene pérgola en madera, comedor y salas de exterior en aluminio con detalles en madera, y una mesa con fuego para disfrutar la vista de la ciudad.",
    ],
    fotos: fotosDe("img/proyectos/lafori", 20),
  },
  {
    id: "cerro-mar-el-penon",
    nombre: "Proyecto Cerro Mar",
    tipo: "Residencial",
    lugar: "El Peñón, Girardot",
    portada: "img/proyectos/cerro-mar-el-penon/12.jpg",
    descripcion: [
      "Un espacio para el descanso en El Peñón, Girardot, con vista al agua y una paleta de blancos, grises y madera clara.",
      "La sala se organiza alrededor de un sofá empotrado con iluminación LED en la base y una celosía en madera que divide los ambientes sin quitarles luz.",
      "Un mueble en madera y blanco integra el televisor con cajones y una barra con silla alta. El comedor combina una mesa en vidrio con sillas tejidas.",
      "La terraza, con muebles tejidos para exterior, aprovecha la vista, y las cortinas enrollables controlan la luz del día.",
    ],
    // Las fotos 20 y 21 de la carpeta original no se usan: tienen franjas negras y muy baja resolución
    fotos: fotosDe("img/proyectos/cerro-mar-el-penon", 19),
  },
  {
    id: "villegas-penon",
    nombre: "Proyecto Villegas",
    tipo: "Residencial",
    lugar: "El Peñón, Girardot",
    portada: "img/proyectos/villegas-penon/05.jpg",
    descripcion: [
      "Una casa en El Peñón, Girardot, de arquitectura blanca y líneas limpias.",
      "La sala se arma alrededor de un sofá empotrado en L, con base blanca y cojines en tonos tierra, bajo cortinas enrollables que filtran la luz.",
      "Puertas amplias en blanco, cerraduras digitales y ventanales corredizos conectan los espacios interiores con el exterior.",
    ],
    fotos: fotosDe("img/proyectos/villegas-penon", 14),
  },
  {
    id: "anapoima",
    nombre: "Proyecto Anapoima",
    tipo: "Casa de campo",
    lugar: "Anapoima",
    portada: "img/proyectos/anapoima/03.jpg",
    descripcion: [
      "Una casa de campo en Anapoima, pensada para la vida al aire libre alrededor de la piscina.",
      "Bajo una gran pérgola con techo en caña, el comedor exterior combina una mesa negra con sillas tejidas, y las salas de exterior se arman con sofás y sillas en tonos claros.",
      "Asoleadoras junto a la piscina y sillas colgantes tejidas completan un espacio para descansar y compartir.",
    ],
    fotos: fotosDe("img/proyectos/anapoima", 10),
  },
  {
    id: "turrisystem",
    nombre: "Proyecto TurriSystem",
    tipo: "Oficinas",
    lugar: "Ibagué",
    portada: "img/proyectos/turrisystem/06.jpg",
    descripcion: [
      "Oficinas corporativas en Ibagué con carácter industrial: techos a la vista, pisos en baldosa geométrica y una paleta de grises, negro y azul con toques de color.",
      "La recepción combina un mueble en gris con paneles de listones y un sofá hecho con el frente de un carro clásico. En la sala de espera, un gran sofá curvo en azul, una mesa de centro redonda y puffs invitan a conversar.",
      "La sala de juntas reúne una mesa larga en negro con una franja clara y conexiones integradas, junto a muebles bajos con repisas; en la pared, unas líneas que evocan un circuito electrónico.",
      "Los puestos de trabajo, los baños con espejos iluminados y una zona de casilleros de colores con mesa de ping-pong completan un espacio pensado para trabajar y compartir.",
    ],
    // La foto 28 de la carpeta original no se usa: es muy angosta y de baja resolución
    fotos: fotosDe("img/proyectos/turrisystem", 27),
  },
  {
    id: "servicios-y-logistica",
    nombre: "Proyecto Servicios y Logística",
    tipo: "Oficinas",
    lugar: "",
    portada: "img/proyectos/servicios-y-logistica/01.jpg",
    descripcion: [
      "Oficinas pensadas para el trabajo diario y para recibir clientes, con una paleta de madera clara y blanco que se repite en todos los espacios.",
      "La recepción combina un mueble en madera y blanco con apliques de luz circulares. La sala de juntas y los puestos de trabajo aprovechan la luz natural de los ventanales.",
      "La zona de café integra cajones y puertas abatibles para mantener todo en orden, y los baños cuentan con gabinetes con espejo e iluminación LED.",
      "Puertas en vidrio y una biblioteca con repisas completan un espacio funcional y acogedor.",
    ],
    fotos: fotosDe("img/proyectos/servicios-y-logistica", 13),
  },
  {
    id: "empresarial-zona-t",
    nombre: "Proyecto Empresarial Zona T",
    tipo: "Oficinas",
    lugar: "Zona T, Bogotá",
    portada: "img/proyectos/empresarial-zona-t/26.jpg",
    descripcion: [
      "Oficinas en la Zona T de Bogotá, con una paleta de madera clara, gris y blanco que le da calidez al espacio de trabajo.",
      "La recepción y los puestos de trabajo combinan superficies en madera con frentes en ángulo, y los paneles de listones verticales separan los ambientes.",
      "Obras de arte llenas de color, nichos iluminados y una cocineta con nevera roja le dan personalidad a cada rincón.",
      "La oficina principal tiene un escritorio en madera frente a una pared de listones en tonos azules, y una zona de descanso con sofás azules, repisas iluminadas para las colecciones y un mueble con bar y televisor. La sala de juntas suma una mesa gris con detalle en madera y una pantalla grande.",
    ],
    fotos: fotosDe("img/proyectos/empresarial-zona-t", 26),
  },
  {
    id: "karibana",
    nombre: "Proyecto Karibana",
    tipo: "Apartamento",
    lugar: "Cartagena",
    portada: "img/proyectos/karibana/05.jpg",
    descripcion: [
      "Un apartamento frente al mar en Karibana, Cartagena, pensado para disfrutar la vista al Caribe desde cada espacio.",
      "En la sala, un sofá amplio en tonos claros y un mueble bajo en madera acompañan los ventanales, con persianas que filtran la luz sin perder el paisaje.",
      "El comedor combina una mesa en madera con sillas blancas de líneas curvas, y en el balcón una mesa con sillas invita a tomar un café mirando el mar.",
    ],
    fotos: fotosDe("img/proyectos/karibana", 6),
  },
  {
    id: "de-la-espriella",
    nombre: "Proyecto De la Espriella",
    tipo: "Residencial",
    lugar: "",
    portada: "img/proyectos/de-la-espriella/03.jpg",
    descripcion: [
      "Una sala amplia y luminosa, diseñada alrededor de un sofá seccional blanco.",
      "La mesa de centro en vidrio y los acentos oscuros equilibran el conjunto, mientras las cortinas filtran la luz natural de los ventanales.",
      "Un sofá capitoneado en tonos claros y un mueble bajo en negro completan el proyecto.",
    ],
    fotos: fotosDe("img/proyectos/de-la-espriella", 5),
  },
];

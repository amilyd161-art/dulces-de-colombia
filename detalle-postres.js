// Datos de cada postre (se escriben una sola vez, aunque aparezcan en varios departamentos)
// La clave de cada postre es también el nombre de su foto: imagenes/postres/<clave>.jpg
// Si un postre no tiene "texto", la ventana muestra "Pronto sabrás más sobre este postre."
const DETALLE = {

  // =====================================================================
  //  AMAZONÍA (ya estaba)
  // =====================================================================
  "copoazu": { nombre: "Dulce de copoazú", emoji: "🌰", color: "#c9a77a",
    texto: "Fruto amazónico emparentado con el cacao. Su pulpa cremosa, de aroma intenso y sabor entre ácido y dulce, se cocina con azúcar o panela hasta lograr un dulce suave y aromático." },
  "araza": { nombre: "Dulce de arazá", emoji: "🍋", color: "#e8c93a",
    texto: "Pequeña fruta amarilla de sabor muy ácido y perfume fuerte. Al cocinarla con azúcar se equilibra y se convierte en un dulce vivo, entre agrio y dulce." },
  "camu-camu": { nombre: "Dulce de camu camu", emoji: "🍒", color: "#a8324f",
    texto: "Diminuta fruta rojiza, muy ácida y conocida por su alto contenido de vitamina C. En dulce gana equilibrio sin perder su carácter fresco." },
  "cocona": { nombre: "Dulce de cocona", emoji: "🍅", color: "#e07a2f",
    texto: "Fruto de la familia del tomate y el lulo, de sabor cítrico y refrescante. Cocinado con azúcar da un dulce de textura suave y toque ácido." },
  "maranon": { nombre: "Dulce de marañón", emoji: "🍑", color: "#d9533a",
    texto: "El marañón es la fruta carnosa de la que cuelga la nuez del anacardo. Su pulpa jugosa y algo astringente se cocina en dulce, dorado y aromático." },
  "bocadillo-guayaba": { nombre: "Bocadillo de guayaba", emoji: "🍐", color: "#d9677a",
    texto: "Dulce compacto hecho con pulpa de guayaba y azúcar, que se corta en bloques. Un clásico de todo el país." },
  "pina-amazonica": { nombre: "Dulce de piña amazónica", emoji: "🍍", color: "#e6b422",
    texto: "Piña cultivada en la región, jugosa y aromática, cocida con azúcar o panela hasta quedar tierna y brillante." },
  "papaya-verde": { nombre: "Dulce de papaya verde", emoji: "🥭", color: "#7fae5a",
    texto: "Papaya sin madurar, firme y de sabor neutro, que se corta en tiras o cubos y se cocina lentamente en almíbar hasta volverse tierna." },
  "tupiro": { nombre: "Dulce de túpiro", emoji: "🍊", color: "#d9893a",
    texto: "Fruto amazónico de la familia del lulo, de pulpa ácida y aromática. En dulce se vuelve suave, con un fondo cítrico." },
  "seje": { nombre: "Dulce de seje", emoji: "🫐", color: "#5e3a5a",
    texto: "El seje es una palma amazónica de frutos morados, con pulpa espesa y de sabor profundo. Preparado en dulce, ofrece un sabor intenso y particular." },
  "moriche": { nombre: "Dulce de moriche", emoji: "🌴", color: "#e0902f",
    texto: "Palma de los Llanos y la Amazonía cuyos frutos, de cáscara escamosa y pulpa anaranjada, se cocinan en dulce con un sabor intenso y mantecoso." },
  "pina": { nombre: "Dulce de piña", emoji: "🍍", color: "#e8c040",
    texto: "Dulce sencillo y aromático de piña, cocida con azúcar o panela hasta quedar brillante." },
  "manjar-agridulce": { nombre: "Manjar agridulce amazónico", emoji: "🍮", color: "#d8b98a",
    texto: "Preparación cremosa que combina notas dulces y ácidas de frutas amazónicas." },
  "chilacuan": { nombre: "Dulce de chilacuán", emoji: "🍈", color: "#d89a3e",
    texto: "Fruto emparentado con la papaya y de aroma intenso. Cocinado en trozos con panela o azúcar da un dulce agridulce." },
  "chontaduro": { nombre: "Dulce de chontaduro", emoji: "🧡", color: "#e8793a",
    texto: "Fruto de una palma amazónica y del Pacífico, de pulpa harinosa y anaranjada. Se cocina y se endulza con miel o panela para disfrutarlo como postre." },
  "yuca": { nombre: "Dulce de yuca", emoji: "🍠", color: "#cdb78f",
    texto: "La yuca, base de la cocina amazónica, se cuece y se endulza con panela o azúcar hasta lograr un dulce suave, de textura tierna y sabor reconfortante." },

  // =====================================================================
  //  REGIÓN ANDINA
  // =====================================================================

  // --- Antioquia ---
  "cansuizos": { nombre: "Cansuizos de Ituango", emoji: "🥥", color: "#e9d9b8",
    texto: "Dulce tradicional de Ituango, Antioquia, que la familia Palacio elabora desde hace aproximadamente un siglo. Lleva coco, azúcar, mantequilla vegetal y vainilla, y se envuelve en papeles de colores. Su nombre viene de los antiguos «perros suizos» que acompañaban a los cazadores en las montañas del norte de Antioquia." },
  "tamarindo-santa-fe": { nombre: "Dulces de tamarindo de Santa Fe de Antioquia", emoji: "🟤", color: "#a0673a",
    texto: "El tamarindo es una fruta de vaina, de pulpa ácida y aromática. Cocido con azúcar se convierte en un dulce agridulce, parte de la tradición dulcera de Santa Fe de Antioquia." },
  "cardamomo": { nombre: "Dulces de cardamomo", emoji: "🌿", color: "#b9b36a",
    texto: "Dulces perfumados con cardamomo, una especia de aroma intenso, con notas cítricas y un toque fresco que los hace inconfundibles." },
  "solteritas": { nombre: "Solteritas antioqueñas", emoji: "🍪", color: "#e69a4a",
    texto: "Galleta dulce, crujiente y de color anaranjado, que se unta con una crema de zanahoria y ahuyama y se termina con leche condensada. Se relaciona con la herencia de la repostería árabe." },
  "mazamorra-bocadillo": { nombre: "Mazamorra con bocadillo", emoji: "🌽", color: "#e8c870",
    texto: "Mazamorra de maíz, un clásico de la mesa antioqueña, acompañada de bocadillo de guayaba: lo suave del maíz contrasta con lo dulce y firme del bocadillo." },

  // --- Boyacá ---
  "plumeros": { nombre: "Plumeros de Soatá", emoji: "🥐", color: "#d9a85e",
    texto: "Amasijo tradicional de Soatá, en Boyacá: un producto de masa horneada que hace parte de la oferta típica del municipio." },
  "arequipe-cabra": { nombre: "Arequipe de leche de cabra", emoji: "🐐", color: "#c88a4a",
    texto: "Arequipe hecho con leche de cabra, cocida lentamente con azúcar hasta espesar. Tiene un sabor un poco más intenso y ligeramente ácido que el de leche de vaca." },
  "brevas-arequipe": { nombre: "Brevas con arequipe", emoji: "🍯", color: "#8a5a6a",
    texto: "Brevas cocidas en almíbar y servidas con arequipe. La fruta tierna y el dulce cremoso forman una de las parejas más tradicionales de la mesa andina." },
  "mantecadas": { nombre: "Mantecadas boyacenses", emoji: "🧁", color: "#eec86a",
    texto: "Pequeños bizcochos de masa suave y mantecosa, horneados en moldes individuales. Una merienda tradicional de Boyacá." },
  "papayuela": { nombre: "Dulce de papayuela", emoji: "🥭", color: "#e5b13a",
    texto: "La papayuela es un fruto andino emparentado con la papaya, de aroma intenso. Cocida con panela o azúcar da un dulce aromático, entre ácido y dulce." },

  // --- Caldas ---
  "corchos": { nombre: "Corchos de Neira", emoji: "🍬", color: "#b9783a",
    texto: "Dulce típico de Neira, Caldas, hecho con panela y pata de res. Su textura recuerda a la de un corcho de botella: la mezcla se estira, se forma en tiras gruesas, se deja secar y se corta en porciones." },
  "alfandoques": { nombre: "Alfandoques", emoji: "🍭", color: "#c98a3a",
    texto: "Dulce de panela que se cocina hasta punto de melcocha y se estira hasta aclararse, para darle forma de barras. Algunas versiones llevan coco o queso." },
  "brevas": { nombre: "Dulce de brevas", emoji: "🟣", color: "#7a4a6a",
    texto: "Las brevas, primer fruto de la higuera, se cocinan en almíbar de panela o azúcar hasta quedar tiernas y brillantes." },
  "arequipe-casero": { nombre: "Arequipe casero", emoji: "🍮", color: "#c4863a",
    texto: "Leche y azúcar cocidas lentamente, removiendo sin parar, hasta lograr una crema espesa de color caramelo. El sabor de la cocina de casa." },
  "flan-cafe": { nombre: "Flan de café", emoji: "☕", color: "#6b4a34",
    texto: "Flan de textura suave con sabor a café, un guiño a la cultura cafetera de la región. Se sirve frío, con caramelo." },

  // --- Cundinamarca ---
  "suspiros-bogotanos": { nombre: "Suspiros bogotanos", emoji: "☁️", color: "#f1dfe2",
    texto: "Merengues pequeños, crujientes por fuera y delicados por dentro, hechos con claras de huevo batidas y azúcar." },
  "cuajada-melao": { nombre: "Cuajada con melao", emoji: "🥛", color: "#e9d9a8",
    texto: "Cuajada fresca de leche acompañada de melao, la miel de caña. Un postre sencillo y muy tradicional del altiplano." },
  "natas": { nombre: "Postre de natas", emoji: "🍶", color: "#efe0b8",
    texto: "Postre cremoso y suave a base de natas, la capa de crema que se forma al hervir la leche fresca." },
  "merengon-guanabana": { nombre: "Merengón de guanábana", emoji: "🍰", color: "#f0e6d2",
    texto: "Base de merengue crocante cubierta con crema de leche batida y guanábana. Contrasta lo crujiente con lo cremoso y ligeramente ácido." },
  "fresas-crema": { nombre: "Fresas con crema", emoji: "🍓", color: "#d94a5a",
    texto: "Fresas frescas servidas con crema de leche. Sencillo y refrescante, uno de los postres más queridos de la sabana de Bogotá." },

  // --- Huila ---
  "nochebuena-cactus": { nombre: "Nochebuena de cactus de la Tatacoa", emoji: "🌵", color: "#c9a24b",
    texto: "Dulce artesanal elaborado con cactus del desierto de la Tatacoa, en Villavieja, Huila. A la planta se le quitan las espinas y la piel para aprovechar su pulpa, con la que se preparan distintos dulces, entre ellos la Noche buena." },
  "achira": { nombre: "Dulce de achira", emoji: "🌱", color: "#d8c28a",
    texto: "La achira es una planta de raíz rica en almidón y un emblema de la cocina del Huila, famosa por sus bizcochos. Este dulce lleva su sabor suave y tradicional a la mesa." },
  "jalea-guayaba": { nombre: "Jalea de guayaba", emoji: "🍐", color: "#d9677a",
    texto: "Dulce suave y brillante de pulpa de guayaba cocida con azúcar, que cuaja gracias a la pectina propia de la fruta." },
  "guanabana": { nombre: "Dulce de guanábana", emoji: "🍈", color: "#b5c47a",
    texto: "La guanábana tiene una pulpa blanca, cremosa y de sabor agridulce. Cocinada con azúcar da un dulce suave y aromático." },

  // --- Norte de Santander ---
  "quencos": { nombre: "Quencos de Convención", emoji: "🧀", color: "#c98a3a",
    texto: "Dulce típico de Convención, en el Catatumbo: trozos de queso duro cubiertos con una capa de caramelo de panela y envueltos en papel mantequilla." },
  "cortado-cabra": { nombre: "Cortado de leche de cabra", emoji: "🥛", color: "#d8b98a",
    texto: "Dulce de leche de cabra cortada y cocida con azúcar, de textura granulada y sabor más intenso que el de la leche de vaca." },
  "dulce-leche": { nombre: "Dulce de leche", emoji: "🍮", color: "#c98f4a",
    texto: "Leche y azúcar cocidas lentamente hasta formar una crema espesa y de color caramelo, presente en toda la cocina colombiana." },
  "arequipe": { nombre: "Arequipe", emoji: "🍯", color: "#c4863a",
    texto: "El nombre colombiano del dulce de leche: una crema espesa de leche y azúcar cocidas, que acompaña postres, galletas y frutas." },

  // --- Quindío / Risaralda (Eje Cafetero) ---
  "dulce-cafe": { nombre: "Dulce de café", emoji: "☕", color: "#6b4a34",
    texto: "Dulce con sabor a café, un guiño a la tradición cafetera del Eje Cafetero. Combina el amargor tostado del grano con la dulzura del azúcar o la panela." },
  "arequipe-cafe": { nombre: "Arequipe de café", emoji: "☕", color: "#8a5a3a",
    texto: "Arequipe perfumado con café: la crema de leche y azúcar se equilibra con un fondo tostado y ligeramente amargo." },
  "natilla-panela": { nombre: "Natilla de panela", emoji: "🍮", color: "#b98a4a",
    texto: "La natilla es un postre cremoso de leche espesada con almidón de maíz. Con panela toma un color dorado y un sabor a caña muy característico." },
  "dulce-guayaba": { nombre: "Dulce de guayaba", emoji: "🍐", color: "#d9677a",
    texto: "Guayaba cocida con azúcar o panela hasta quedar tierna y brillante, un dulce aromático presente en todo el país." },

  // --- Santander ---
  "bocadillo-veleno": { nombre: "Bocadillo veleño", emoji: "🍬", color: "#c4506a",
    texto: "Bocadillo de guayaba de Vélez, Santander, uno de los dulces insignia del departamento. Se presenta envuelto en hojas naturales." },
  "panuchas": { nombre: "Panuchas de arequipe y coco", emoji: "🥥", color: "#d9a55a",
    texto: "Preparación santandereana que combina arequipe y coco." },
  "dulce-apio": { nombre: "Dulce de apio", emoji: "🌱", color: "#b8c08a",
    texto: "Dulce tradicional santandereano a base de apio, raíz andina de pulpa suave y sabor delicado." },
  "sabajon": { nombre: "Sabajón santandereano", emoji: "🥚", color: "#e8c04a",
    texto: "Crema de yemas de huevo, leche y azúcar con un toque de licor. Es un dulce festivo; contiene alcohol." },
  "agraz-vetas": { nombre: "Dulce de agraz de Vetas", emoji: "🫐", color: "#5a3a5a",
    texto: "El agraz es una baya silvestre ácida de clima de páramo. En dulce se suaviza con azúcar y conserva su color oscuro y su sabor intenso." },

  // --- Tolima ---
  "mangostino-chaparral": { nombre: "Dulce de mangostino de Chaparral", emoji: "🟣", color: "#7a3a5a",
    texto: "Dulce hecho con mangostino, la fruta de cáscara morada y pulpa blanca, jugosa y de sabor dulce y ligeramente ácido. Se elabora en Chaparral, Tolima." },
  "galletas-cucas": { nombre: "Galletas cucas", emoji: "🍪", color: "#c9984a",
    texto: "Galletas tradicionales del Tolima, de sabor dulce, ideales para acompañar el café." },
  "bizcochuelo": { nombre: "Bizcochuelo tolimense", emoji: "🍰", color: "#e8c878",
    texto: "Bizcocho esponjoso y liviano, típico de la repostería del Tolima." },
  "papaya": { nombre: "Dulce de papaya", emoji: "🥭", color: "#e9953a",
    texto: "Papaya madura cocida con azúcar o panela, de color anaranjado y sabor suave y aromático." },

  // =====================================================================
  //  REGIÓN CARIBE
  // =====================================================================

  // --- Atlántico (y otros) ---
  "corozo": { nombre: "Dulce de corozo", emoji: "🍇", color: "#5a2a4a",
    texto: "El corozo es el fruto de una palma, de color morado oscuro y sabor ácido. Cocido con azúcar o panela da un dulce de color intenso y sabor tropical." },
  "alegrias-burro": { nombre: "Alegrías de burro", emoji: "🥜", color: "#d9a85a",
    texto: "Bolitas pegajosas y crujientes de millo (o sorgo) reventado, coco rallado y miel de panela. Según el pueblo costeño, también se las conoce con este nombre." },
  "mongo-mongo": { nombre: "Mongo-mongo", emoji: "🍌", color: "#6b3a2a",
    texto: "Dulce tradicional del Caribe, típico de Semana Santa. Se cocina muy lentamente, durante muchas horas, con plátano maduro y verde, frutas tropicales, panela y especias, hasta quedar de color marrón oscuro. Se come con queso costeño o casabe." },
  "cocadas": { nombre: "Cocadas", emoji: "🥥", color: "#e8d4a8",
    texto: "Dulce de coco rallado cocido con azúcar o panela hasta que cuaja en bolitas o discos, de textura masticable." },

  // --- Bolívar ---
  "chepacorinas": { nombre: "Chepacorinas del Carmen de Bolívar", emoji: "🍪", color: "#d9b06a",
    texto: "Galleta típica de El Carmen de Bolívar, en los Montes de María. Lleva harina de trigo, queso costeño, leche y azúcar: crujiente por fuera, suave por dentro, entre lo salado y lo dulce. Nació hace más de ochenta años de la receta de Josefa Corina Ríos, conocida como «Chepa Corina»." },
  "casquitos-limon": { nombre: "Casquitos de limón de Mompox", emoji: "🍋", color: "#c9c84a",
    texto: "Cáscaras de limón (casquitos) cocidas en almíbar hasta quedar tiernas y brillantes, tras quitarles el amargor. Un dulce tradicional de Mompox." },
  "alegrias-ajonjoli": { nombre: "Alegrías de ajonjolí", emoji: "🌾", color: "#d8b060",
    texto: "Variante de las alegrías hecha con ajonjolí (sésamo) y miel de panela, que se forma en bolitas o barras." },
  "cocadas-palenqueras": { nombre: "Cocadas palenqueras", emoji: "🥥", color: "#c9a064",
    texto: "Cocadas de coco con panela que ofrecen las palenqueras, vendedoras de frutas y dulces de Cartagena con raíces en San Basilio de Palenque." },
  "dulce-name": { nombre: "Dulce de ñame", emoji: "🍠", color: "#d8b88a",
    texto: "El ñame es un tubérculo de pulpa blanca y harinosa, base de la cocina caribeña. En dulce se cuece, se endulza con panela o azúcar y se aromatiza con canela." },

  // --- Cesar ---
  "manjar-toronja": { nombre: "Manjar de toronja de Manaure", emoji: "🍊", color: "#e8a04a",
    texto: "Dulce de toronja de Manaure, Cesar, de sabor agridulce y toque cítrico." },
  "leche-cortada": { nombre: "Dulce de leche cortada", emoji: "🥛", color: "#e0c898",
    texto: "Leche cortada y cocinada con azúcar hasta lograr una masa granulada y cremosa, de sabor intenso y textura rústica." },

  // --- Córdoba / Sucre ---
  "panochas-cordobesas": { nombre: "Panochas cordobesas", emoji: "🍬", color: "#c98a4a" },
  "caballitos-papaya": { nombre: "Caballitos de papaya", emoji: "🥭", color: "#e5a64a",
    texto: "Dulce de papaya verde cortada en tiras largas y cocida con azúcar o panela, un clásico de las dulcerías de la costa." },
  "panochas-sucrenas": { nombre: "Panochas sucreñas", emoji: "🍬", color: "#c98a4a" },
  "mongo-mongo-calandraca": { nombre: "Mongo-mongo o calandraca", emoji: "🍌", color: "#6b3a2a",
    texto: "En Sucre este dulce de Semana Santa también se llama calandraca sucreña. Se cocina durante muchas horas con plátano, frutas tropicales, panela y especias, hasta quedar de color marrón oscuro." },

  // --- La Guajira ---
  "huevitos-leche": { nombre: "Huevitos de leche", emoji: "🥚", color: "#efd8a0",
    texto: "Dulce de leche típico de La Guajira, de textura suave y sabor cremoso." },
  "corozo-mongui": { nombre: "Dulce de corozo de Monguí", emoji: "🍇", color: "#5a2a4a",
    texto: "Monguí es conocido como un pueblo dulcero de La Guajira, donde se hacen dulces de corozo, leche, icaco, coco, papaya y piña. El de corozo tiene color morado intenso y sabor ácido y tropical." },
  "leche-cabra": { nombre: "Dulce de leche de cabra", emoji: "🐐", color: "#d09a58",
    texto: "Dulce de leche hecho con leche de cabra, un ingrediente muy presente en La Guajira por la cría de ganado caprino." },

  // --- Magdalena ---
  "cocadas-coco": { nombre: "Cocadas de coco", emoji: "🥥", color: "#e6d2a4",
    texto: "Coco rallado cocido con azúcar o panela hasta formar bolitas o discos dulces, con la textura masticable que caracteriza a las cocadas." },
  "mango": { nombre: "Dulce de mango", emoji: "🥭", color: "#f0a83a",
    texto: "Mango cocido con azúcar o panela hasta quedar suave y brillante, con todo el aroma de la fruta tropical." },

  // =====================================================================
  //  REGIÓN PACÍFICA
  // =====================================================================

  // --- Cauca ---
  "kumis-patiano": { nombre: "Kumis patiano", emoji: "🥛", color: "#ecdcb4",
    texto: "Preparación láctea tradicional de El Patía, Cauca. La leche se deja cuajar y se endulza con panela (hoy también con azúcar, canela y clavos); queda cremosa y suave, y se come con frutas tropicales, ponqué o galletas." },
  "manjar-blanco-caucano": { nombre: "Manjar blanco caucano", emoji: "🍮", color: "#ead7b0",
    texto: "Dulce de leche cocida lentamente con azúcar, de textura cremosa y color claro; una de las dulzuras más típicas del Cauca." },
  "desamargado": { nombre: "Desamargado de frutas", emoji: "🍑", color: "#e0a04a",
    texto: "Postre caucano de frutas a las que se les quita el amargor antes de cocinarlas con azúcar." },
  "suspiros": { nombre: "Suspiros", emoji: "☁️", color: "#f1dfe2",
    texto: "Merengues pequeños, crujientes por fuera y delicados por dentro, hechos con claras de huevo batidas y azúcar." },

  // --- Chocó ---
  "cocadas-yuto": { nombre: "Cocadas de Yuto", emoji: "🥥", color: "#dcc08a",
    texto: "Cocadas de coco elaboradas en Yuto, Chocó, donde el coco es protagonista de la cocina del Pacífico." },
  "borojo": { nombre: "Dulce de borojó", emoji: "🟤", color: "#6b4a2a",
    texto: "El borojó es una fruta chocoana de pulpa oscura, muy ácida y aromática. En dulce se endulza para suavizar su sabor intenso." },
  "cabellito-papaya": { nombre: "Cabellito de papaya", emoji: "🥭", color: "#e8aa4a",
    texto: "Dulce de papaya cortada en hebras finas y cocida en almíbar; de ahí su nombre de «cabellito»." },
  "arroz-leche-coco": { nombre: "Arroz con leche de coco", emoji: "🍚", color: "#f0e6cc",
    texto: "Arroz cocinado lentamente con leche de coco, endulzado y aromatizado con canela. Una versión tropical del clásico arroz con leche." },

  // --- Nariño ---
  "chancacas-sandona": { nombre: "Chancacas de Sandoná", emoji: "🟫", color: "#9a6a3a",
    texto: "La chancaca es un dulce de panela cocida y moldeada. Las de Sandoná, en Nariño, son una tradición dulcera del municipio." },
  "helados-paila": { nombre: "Helados de paila", emoji: "🍨", color: "#e8a0b0",
    texto: "Helado artesanal que se bate a mano en una paila de bronce sobre hielo, con frutas naturales. Es una tradición de Nariño." },
  "almendras-leche": { nombre: "Almendras de leche", emoji: "🥛", color: "#e8d8b8" },

  // --- Valle del Cauca ---
  "manjar-blanco-buga": { nombre: "Manjar blanco de Buga", emoji: "🍮", color: "#ecd9b0",
    texto: "Dulce de leche tradicional de Buga, en el Valle del Cauca, cocinado lentamente hasta obtener una crema espesa y suave. Es un «mecato» muy querido en la región." },
  "moscorrofio": { nombre: "Moscorrofio", emoji: "🍬", color: "#c98a4a" },
  "cholado-jamundi": { nombre: "Cholado de Jamundí", emoji: "🍧", color: "#e86a8a",
    texto: "Refrescante postre de hielo raspado con trozos de fruta, siropes y leche condensada, típico del Valle del Cauca." },
  "lulada": { nombre: "Lulada caleña", emoji: "🥤", color: "#b5c85a",
    texto: "Refresco frío de lulo machacado con hielo, agua y azúcar, uno de los íconos de Cali." },
  "champus": { nombre: "Champús valluno", emoji: "🍹", color: "#d9a04a",
    texto: "Bebida espesa y dulce del Valle del Cauca, hecha con maíz cocido, lulo, piña, panela y especias como canela y clavos." },

  // =====================================================================
  //  REGIÓN ORINOQUÍA
  // =====================================================================

  // --- Arauca ---
  "chocolate-arauquita": { nombre: "Dulce de chocolate de Arauquita", emoji: "🍫", color: "#5a3a2a",
    texto: "Dulce de chocolate hecho con cacao de Arauquita, un municipio de Arauca reconocido por su producción de cacao." },

  // --- Arauca / Casanare / Meta ---
  "gofios": { nombre: "Gofios llaneros", emoji: "🌽", color: "#d9a85a",
    texto: "Bolas dulces y compactas de maíz tostado y molido con panela, típicas de los Llanos. Los llaneros las llevaban como alimento duradero y energético en las largas jornadas de trabajo." },
  "arequipe-casanareno": { nombre: "Arequipe casanareño", emoji: "🍯", color: "#c4863a",
    texto: "Arequipe de leche cocida lentamente con azúcar, preparado a la manera casanareña." },

  // --- Meta ---
  "bananos-melao": { nombre: "Bananos con melao de panela", emoji: "🍌", color: "#e8c04a",
    texto: "Bananos maduros cocinados con melao de panela, un postre sencillo que aprovecha la fruta madura y la miel de caña." },
  "torta-gacho": { nombre: "Torta gacho de San Martín", emoji: "🥧", color: "#e0b878",
    texto: "Uno de los amasijos más representativos de San Martín de los Llanos, en el Meta. Se prepara con cuajada y arroz, y su receta se ha transmitido de generación en generación." },

  // --- Vichada ---
  "merey": { nombre: "Dulce de merey (marañón)", emoji: "🍑", color: "#d9533a",
    texto: "El merey, o marañón, es la fruta carnosa de la que cuelga la nuez del anacardo. Su pulpa jugosa y algo astringente se cocina en dulce, dorado y aromático." },

  // =====================================================================
  //  REGIÓN INSULAR
  // =====================================================================
  "pan-bon": { nombre: "Pan Bon isleño", emoji: "🍞", color: "#d9a85a",
    texto: "Pan dulce tradicional de las familias raizales del archipiélago de San Andrés, Providencia y Santa Catalina. Se elabora con harina de trigo, azúcar, mantequilla y leche de coco, y se aromatiza con nuez moscada, canela y vainilla." },
  "johnny-cake": { nombre: "Johnny cake", emoji: "🫓", color: "#d8b070",
    texto: "Panecillo de harina típico de la cocina raizal del Caribe insular, que suele prepararse con leche de coco." },
  "sugar-cake": { nombre: "Sugar cake", emoji: "🥥", color: "#e8d0a0",
    texto: "Dulce de coco rallado cocido con azúcar hasta que cuaja en trozos. Algunas versiones llevan jengibre." },
  "coconut-pie": { nombre: "Coconut pie", emoji: "🥧", color: "#efe0c0",
    texto: "Pastel de coco de la cocina isleña: coco, azúcar y masa horneada." },
  "dulce-coco": { nombre: "Dulce de coco", emoji: "🥥", color: "#e8d4a8",
    texto: "Coco rallado cocido con azúcar o panela hasta formar un dulce tierno, el sabor de las islas." }
};

// Los 5 postres de cada departamento (son las claves de DETALLE)
const DEP_POSTRES = {

  // ----- AMAZONÍA -----
  "amazonas": ["copoazu", "araza", "camu-camu", "cocona", "maranon"],
  "caqueta":  ["araza", "copoazu", "bocadillo-guayaba", "pina-amazonica", "papaya-verde"],
  "guainia":  ["tupiro", "seje", "copoazu", "moriche", "pina"],
  "guaviare": ["araza", "copoazu", "moriche", "cocona", "bocadillo-guayaba"],
  "putumayo": ["manjar-agridulce", "chilacuan", "araza", "copoazu", "chontaduro"],
  "vaupes":   ["copoazu", "seje", "moriche", "yuca", "pina"],

  // ----- ANDINA -----
  "antioquia":          ["cansuizos", "tamarindo-santa-fe", "cardamomo", "solteritas", "mazamorra-bocadillo"],
  "boyaca":             ["plumeros", "arequipe-cabra", "brevas-arequipe", "mantecadas", "papayuela"],
  "caldas":             ["corchos", "alfandoques", "brevas", "arequipe-casero", "flan-cafe"],
  "cundinamarca":       ["suspiros-bogotanos", "cuajada-melao", "natas", "merengon-guanabana", "fresas-crema"],
  "huila":              ["nochebuena-cactus", "achira", "jalea-guayaba", "papaya-verde", "guanabana"],
  "norte-de-santander": ["quencos", "cortado-cabra", "dulce-leche", "bocadillo-guayaba", "arequipe"],
  "quindio":            ["dulce-cafe", "arequipe-cafe", "alfandoques", "brevas-arequipe", "natilla-panela"],
  "risaralda":          ["dulce-cafe", "flan-cafe", "arequipe", "dulce-guayaba", "alfandoques"],
  "santander":          ["bocadillo-veleno", "panuchas", "dulce-apio", "sabajon", "agraz-vetas"],
  "tolima":             ["mangostino-chaparral", "galletas-cucas", "bizcochuelo", "papaya", "arequipe"],

  // ----- CARIBE -----
  "atlantico": ["corozo", "alegrias-burro", "mongo-mongo", "cocadas", "papaya-verde"],
  "bolivar":   ["chepacorinas", "casquitos-limon", "alegrias-ajonjoli", "cocadas-palenqueras", "dulce-name"],
  "cesar":     ["manjar-toronja", "papaya", "leche-cortada", "cocadas", "corozo"],
  "cordoba":   ["mongo-mongo", "panochas-cordobesas", "caballitos-papaya", "cocadas", "dulce-name"],
  "guajira":   ["huevitos-leche", "corozo-mongui", "papaya", "cocadas", "leche-cabra"],
  "magdalena": ["alegrias-burro", "cocadas-coco", "mango", "papaya-verde", "mongo-mongo"],
  "sucre":     ["mongo-mongo-calandraca", "panochas-sucrenas", "alegrias-ajonjoli", "cocadas", "dulce-name"],

  // ----- PACÍFICA -----
  "cauca":           ["kumis-patiano", "manjar-blanco-caucano", "desamargado", "dulce-guayaba", "suspiros"],
  "choco":           ["cocadas-yuto", "borojo", "cabellito-papaya", "arroz-leche-coco", "chontaduro"],
  "narino":          ["chancacas-sandona", "chilacuan", "helados-paila", "almendras-leche", "papayuela"],
  "valle-del-cauca": ["manjar-blanco-buga", "moscorrofio", "cholado-jamundi", "lulada", "champus"],

  // ----- ORINOQUÍA -----
  "arauca":   ["chocolate-arauquita", "dulce-leche", "bocadillo-guayaba", "papaya", "gofios"],
  "casanare": ["gofios", "leche-cortada", "arequipe-casanareno", "papaya", "bocadillo-guayaba"],
  "meta":     ["gofios", "bananos-melao", "torta-gacho", "dulce-leche", "dulce-guayaba"],
  "vichada":  ["moriche", "merey", "copoazu", "pina", "bocadillo-guayaba"],

  // ----- INSULAR -----
  // (San Andrés todavía no tiene silueta en mapa.js; los datos quedan listos para cuando se agregue)
  "san-andres": ["pan-bon", "johnny-cake", "sugar-cake", "coconut-pie", "dulce-coco"]
};

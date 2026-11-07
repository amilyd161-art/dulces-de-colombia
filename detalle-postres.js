// Datos de cada postre (se escriben una sola vez, aunque aparezcan en varios departamentos)
const DETALLE = {
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
    texto: "La yuca, base de la cocina amazónica, se cuece y se endulza con panela o azúcar hasta lograr un dulce suave, de textura tierna y sabor reconfortante." }
};

// Los 5 postres de cada departamento (son las claves de DETALLE)
const DEP_POSTRES = {
  "amazonas": ["copoazu", "araza", "camu-camu", "cocona", "maranon"],
  "caqueta":  ["araza", "copoazu", "bocadillo-guayaba", "pina-amazonica", "papaya-verde"],
  "guainia":  ["tupiro", "seje", "copoazu", "moriche", "pina"],
  "guaviare": ["araza", "copoazu", "moriche", "cocona", "bocadillo-guayaba"],
  "putumayo": ["manjar-agridulce", "chilacuan", "araza", "copoazu", "chontaduro"],
  "vaupes":   ["copoazu", "seje", "moriche", "yuca", "pina"]
};

const TEMAS = {
  amazonia:  { base: '#1f3326', etiqueta: 'Región Amazónica' },
  caribe:    { base: '#16403f', etiqueta: 'Región Caribe' },
  andina:    { base: '#4a2a1c', etiqueta: 'Región Andina' },
  pacifica:  { base: '#2a3d3a', etiqueta: 'Región Pacífica' },
  orinoquia: { base: '#4a3a14', etiqueta: 'Región Orinoquía' }
  insular:   { base: '#14476a', etiqueta: 'Región Insular' }
};

const ventana = document.getElementById('ventana');
const q = sel => ventana.querySelector(sel);
let actual = { dep: null, items: [], i: 0 };

// Lista de postres de un departamento (con ficha completa si existe, si no solo los nombres)
function itemsDe(dep) {
  const claves = typeof DEP_POSTRES !== 'undefined' && DEP_POSTRES[dep.id];
  if (claves) return claves.map(c => ({ ...DETALLE[c], slug: c }));
  return (POSTRES[dep.id] || []).map(nombre => ({ nombre }));
}

// Dibuja la silueta del departamento (recorte de papel)
function dibujarForma(dep) {
  const svg = q('.v-forma');
  const path = svg.querySelector('path');
  path.setAttribute('d', dep.d);
  try {
    const b = path.getBBox();
    if (b.width > 0) {
      const m = 8;
      svg.setAttribute('viewBox', (b.x - m) + ' ' + (b.y - m) + ' ' + (b.width + m * 2) + ' ' + (b.height + m * 2));
    }
  } catch (e) { /* si no se puede medir, se queda sin silueta */ }
}

function abrirVentana(dep, slugInicial) {
  const tema = TEMAS[dep.region] || TEMAS.amazonia;
  actual = { dep, items: itemsDe(dep), i: 0 };

  ventana.style.setProperty('--base', tema.base);
  ventana.style.setProperty('--acento', dep.color);
  q('.v-region-texto').textContent = tema.etiqueta;
  q('#v-titulo').textContent = dep.nombre;
  dibujarForma(dep);

  // Círculos con los 5 postres
  const lista = q('.v-lista');
  lista.innerHTML = '';
  actual.items.forEach((it, n) => {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'v-item';
    boton.style.setProperty('--c', it.color || dep.color);

    const circulo = document.createElement('span');
    circulo.className = 'v-circulo';
    const emoji = () => { circulo.innerHTML = '<b>' + (it.emoji || '🍮') + '</b>'; };
    if (it.slug) {
      const img = document.createElement('img');
      img.alt = it.nombre;
      img.src = 'imagenes/postres/' + it.slug + '.jpg';
      img.onerror = emoji;
      circulo.appendChild(img);
    } else emoji();

    const etiqueta = document.createElement('span');
    etiqueta.className = 'v-etiqueta';
    etiqueta.textContent = it.nombre;

    boton.append(circulo, etiqueta);
    boton.addEventListener('click', () => mostrarPostre(n));
    lista.appendChild(boton);
  });

  const inicio = slugInicial ? actual.items.findIndex(it => it.slug === slugInicial) : 0;
  mostrarPostre(inicio < 0 ? 0 : inicio);
  ventana.classList.add('abierta');
  ventana.setAttribute('aria-hidden', 'false');
  document.body.classList.add('sin-scroll');
  ventana.scrollTop = 0;
}

function mostrarPostre(n) {
  const total = actual.items.length;
  if (!total) return;
  actual.i = (n + total) % total;
  const it = actual.items[actual.i];

  ventana.style.setProperty('--tono', it.color || actual.dep.color);
  q('.v-nombre').textContent = it.nombre;
  q('.v-descripcion').textContent = it.texto || 'Pronto sabrás más sobre este postre.';
  q('.v-dato').hidden = !it.dato;
  if (it.dato) q('.v-dato').textContent = '✨ ' + it.dato;

  // Foto grande (o emoji si todavía no hay foto)
  const img = q('.v-foto img');
  const sin = q('.v-sin-foto');
  sin.innerHTML = '<b>' + (it.emoji || '🍮') + '</b><small>Foto próximamente</small>';
  if (it.slug) {
    img.hidden = false;
    sin.hidden = true;
    img.onerror = () => { img.hidden = true; sin.hidden = false; };
    img.alt = it.nombre;
    img.src = 'imagenes/postres/' + it.slug + '.jpg';
  } else {
    img.hidden = true;
    sin.hidden = false;
  }

  ventana.querySelectorAll('.v-item').forEach((c, k) => c.classList.toggle('activo', k === actual.i));

  ventana.classList.remove('cambio');
  void ventana.offsetWidth;
  ventana.classList.add('cambio');
}

function cerrarVentana() {
  ventana.classList.remove('abierta');
  ventana.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('sin-scroll');
}

q('.v-cerrar').addEventListener('click', cerrarVentana);
q('.v-ant').addEventListener('click', () => mostrarPostre(actual.i - 1));
q('.v-sig').addEventListener('click', () => mostrarPostre(actual.i + 1));
// Cierra solo si se hace clic en el fondo (no dentro de la tarjeta)
ventana.addEventListener('click', e => { if (e.target === ventana) cerrarVentana(); });
document.addEventListener('keydown', e => {
  if (!ventana.classList.contains('abierta')) return;
  if (e.key === 'Escape') cerrarVentana();
  if (e.key === 'ArrowLeft') mostrarPostre(actual.i - 1);
  if (e.key === 'ArrowRight') mostrarPostre(actual.i + 1);
});

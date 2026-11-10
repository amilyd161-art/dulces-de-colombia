// Lluvia de dulces: al hacer clic en una región se abre un tablero tipo "lluvia de ideas"
// con la región en el centro, sus departamentos alrededor y los postres de cada uno.
// Usa los datos de mapa.js (departamentos), postres.js y detalle-postres.js (postres).

const REGIONES = {
  caribe:    { nombre: 'Caribe',    emoji: '🌴', color: '#e0b63a' },
  andina:    { nombre: 'Andina',    emoji: '⛰️', color: '#8a9e82' },
  pacifica:  { nombre: 'Pacífica',  emoji: '🐋', color: '#4a8aa6' },
  amazonia:  { nombre: 'Amazonía',  emoji: '🌳', color: '#c9776a' },
  orinoquia: { nombre: 'Orinoquía', emoji: '🌾', color: '#d9a02a' },
  insular:   { nombre: 'Insular',   emoji: '🏝️', color: '#9a78a8' }
};

// San Andrés no está en mapa.js (se agrega aparte en index.html), por eso se nombra aquí
const DEPTOS_EXTRA = [
  { id: 'san-andres', nombre: 'San Andrés, Providencia y Santa Catalina', region: 'insular' }
];

// Colores de las notas adhesivas de los departamentos
const NOTAS = ['#fbe7a1', '#f9d3c8', '#d8ead0', '#d3e4f0', '#efd9ef', '#f6e0b5'];

const lluvia = document.getElementById('lluvia');
const tablero = lluvia.querySelector('.ll-tablero');
const hilos = lluvia.querySelector('.ll-hilos');
const NS_SVG = 'http://www.w3.org/2000/svg';
let regionAbierta = null;

// ---------- Datos ----------
function departamentosDe(region) {
  const lista = DEPARTAMENTOS.concat(DEPTOS_EXTRA.filter(e => !DEPARTAMENTOS.some(d => d.id === e.id)));
  return lista.filter(d => d.region === region);
}

function postresDe(dep) {
  const claves = typeof DEP_POSTRES !== 'undefined' && DEP_POSTRES[dep.id];
  if (claves) return claves.map(c => ({ ...DETALLE[c], slug: c }));
  return (POSTRES[dep.id] || []).map(nombre => ({ nombre }));
}

// ---------- Piezas del tablero ----------
function crear(etiqueta, clase, texto) {
  const el = document.createElement(etiqueta);
  if (clase) el.className = clase;
  if (texto) el.textContent = texto;
  return el;
}

function crearGota(it, color) {
  const gota = crear('div', 'll-gota');
  gota.style.setProperty('--c', it.color || color);
  const circulo = crear('span', 'll-circulo');
  const emoji = () => { circulo.innerHTML = '<b>' + (it.emoji || '🍮') + '</b>'; };
  if (it.slug) {
    const img = document.createElement('img');
    img.alt = it.nombre;
    img.src = 'imagenes/postres/' + it.slug + '.jpg';
    img.onerror = emoji;
    circulo.appendChild(img);
  } else emoji();
  gota.append(circulo, crear('span', 'll-nombre', it.nombre));
  return gota;
}

function crearNota(dep, n) {
  const nota = crear('div', 'll-nota', dep.nombre);
  nota.style.setProperty('--papel', NOTAS[n % NOTAS.length]);
  nota.style.setProperty('--giro', (n % 2 ? 3 : -3) + 'deg');
  return nota;
}

function crearCentro(info) {
  const centro = crear('div', 'll-centro');
  centro.innerHTML = '<span class="ll-centro-emoji">' + info.emoji + '</span>' +
    '<strong>' + info.nombre + '</strong><small>¿Qué dulces tiene?</small>';
  return centro;
}

// Retraso de animación: la región aparece, luego los departamentos y por último "llueven" los postres
function retraso(el, segundos) { el.style.setProperty('--d', segundos.toFixed(2) + 's'); }

// ---------- Dibujo en computador: mapa mental ----------
function dibujarMapaMental(info, deps) {
  const ancho = tablero.clientWidth;
  const RADIO_GRUPO = 200;  // espacio que ocupa un departamento con sus 5 postres
  const RADIO_POSTRE = 135; // distancia del postre a su departamento
  const RADIO_CENTRO = 120; // espacio que ocupa la burbuja de la región
  const n = deps.length;

  // 1) Departamentos alrededor del centro (en dos anillos si son muchos)
  const centro = { x: n === 1 ? ancho / 2 - 170 : ancho / 2, y: 0 };
  const rx = n === 1 ? 340 : Math.max(ancho / 2 - RADIO_GRUPO - 10, 260);
  const ry = n > 6 ? rx * 0.95 : rx * 0.62;
  const grupos = deps.map((dep, i) => {
    // Si la región tiene un solo departamento, va a la derecha de la burbuja central
    const ang = n === 1 ? 0 : -Math.PI / 2 + (i / n) * Math.PI * 2;
    const f = n > 6 ? (i % 2 ? 1 : 0.62) : 1;
    return { dep, x: centro.x + Math.cos(ang) * rx * f, y: centro.y + Math.sin(ang) * ry * f };
  });

  // 2) Se separan los que quedan encima de otros
  const minimo = RADIO_GRUPO * 2 - 10;
  for (let vuelta = 0; vuelta < 1500; vuelta++) {
    for (let a = 0; a < n; a++) {
      for (let b = a + 1; b < n; b++) {
        const g1 = grupos[a], g2 = grupos[b];
        let dx = g2.x - g1.x, dy = g2.y - g1.y;
        const d = Math.hypot(dx, dy) || 1;
        if (d < minimo) {
          const empuje = (minimo - d) / 2;
          dx /= d; dy /= d;
          g1.x -= dx * empuje; g1.y -= dy * empuje;
          g2.x += dx * empuje; g2.y += dy * empuje;
        }
      }
      const g = grupos[a];
      let dx = g.x - centro.x, dy = g.y - centro.y;
      const d = Math.hypot(dx, dy) || 1;
      const lejos = RADIO_CENTRO + RADIO_GRUPO;
      if (d < lejos) { g.x = centro.x + dx / d * lejos; g.y = centro.y + dy / d * lejos; }
      g.x = Math.min(Math.max(g.x, RADIO_GRUPO), ancho - RADIO_GRUPO);
    }
  }

  // 3) Se mueve todo hacia abajo para que quepa y se calcula la altura del tablero
  const arriba = Math.min(centro.y - RADIO_CENTRO, ...grupos.map(g => g.y - RADIO_GRUPO));
  const desplazar = 20 - arriba;
  centro.y += desplazar;
  grupos.forEach(g => { g.y += desplazar; });
  const alto = Math.max(centro.y + RADIO_CENTRO, ...grupos.map(g => g.y + RADIO_GRUPO)) + 30;
  tablero.style.height = alto + 'px';
  hilos.setAttribute('viewBox', '0 0 ' + ancho + ' ' + alto);
  hilos.setAttribute('width', ancho);
  hilos.setAttribute('height', alto);

  // 4) Hilos y piezas
  const elCentro = crearCentro(info);
  ubicar(elCentro, centro.x, centro.y);
  retraso(elCentro, 0);
  tablero.appendChild(elCentro);

  grupos.forEach((g, i) => {
    hilo(centro, g, info.color, 3, i % 2 ? 0.18 : -0.18, false, 0.15 + i * 0.07);

    const nota = crearNota(g.dep, i);
    ubicar(nota, g.x, g.y);
    retraso(nota, 0.25 + i * 0.07);
    tablero.appendChild(nota);

    // Los 5 postres alrededor, dejando libre el lado que mira hacia la región
    const haciaCentro = Math.atan2(centro.y - g.y, centro.x - g.x);
    const postres = postresDe(g.dep);
    const paso = (Math.PI * 2) / Math.max(postres.length, 5);
    postres.forEach((it, k) => {
      const ang = haciaCentro + paso / 2 + k * paso;
      const p = { x: g.x + Math.cos(ang) * RADIO_POSTRE, y: g.y + Math.sin(ang) * RADIO_POSTRE };
      hilo(g, p, info.color, 2.2, 0.12, true, 0.6 + i * 0.07);
      const gota = crearGota(it, info.color);
      ubicar(gota, p.x, p.y);
      retraso(gota, 0.7 + i * 0.07 + k * 0.09 + Math.random() * 0.25);
      tablero.appendChild(gota);
    });
  });
}

function ubicar(el, x, y) {
  el.classList.add('ll-suelto');
  el.style.left = x + 'px';
  el.style.top = y + 'px';
}

// Línea curva tipo trazo a mano entre dos puntos
function hilo(a, b, color, grosor, curva, punteado, demora) {
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
  const cx = mx - (b.y - a.y) * curva, cy = my + (b.x - a.x) * curva;
  const path = document.createElementNS(NS_SVG, 'path');
  path.setAttribute('d', 'M' + a.x + ',' + a.y + ' Q' + cx + ',' + cy + ' ' + b.x + ',' + b.y);
  path.setAttribute('stroke', color);
  path.setAttribute('stroke-width', grosor);
  if (punteado) path.setAttribute('stroke-dasharray', '2 7');
  path.style.setProperty('--d', demora.toFixed(2) + 's');
  hilos.appendChild(path);
}

// ---------- Dibujo en celular: lista vertical ----------
function dibujarLista(info, deps) {
  tablero.style.height = '';
  const elCentro = crearCentro(info);
  retraso(elCentro, 0);
  tablero.appendChild(elCentro);

  deps.forEach((dep, i) => {
    const grupo = crear('section', 'll-grupo');
    grupo.style.setProperty('--linea', info.color);
    const nota = crearNota(dep, i);
    retraso(nota, 0.2 + i * 0.08);
    const gotas = crear('div', 'll-gotas');
    postresDe(dep).forEach((it, k) => {
      const gota = crearGota(it, info.color);
      retraso(gota, 0.4 + i * 0.08 + k * 0.08 + Math.random() * 0.2);
      gotas.appendChild(gota);
    });
    grupo.append(nota, gotas);
    tablero.appendChild(grupo);
  });
}

// ---------- Abrir y cerrar ----------
function dibujar(region) {
  const info = REGIONES[region];
  const deps = departamentosDe(region);
  tablero.querySelectorAll(':scope > :not(.ll-hilos)').forEach(el => el.remove());
  hilos.innerHTML = '';
  lluvia.style.setProperty('--region', info.color);
  lluvia.querySelector('.ll-antetitulo').textContent = 'Lluvia de dulces · Región ' + info.nombre;

  const comoLista = tablero.clientWidth < 760;
  tablero.classList.toggle('ll-lista', comoLista);
  if (comoLista) dibujarLista(info, deps);
  else dibujarMapaMental(info, deps);
}

function abrirLluvia(region) {
  regionAbierta = region;
  lluvia.classList.remove('sin-animacion');
  lluvia.classList.add('abierta');
  lluvia.setAttribute('aria-hidden', 'false');
  document.body.classList.add('sin-scroll');
  lluvia.scrollTop = 0;
  dibujar(region);
  lluvia.querySelector('.ll-cerrar').focus();
}

function cerrarLluvia() {
  regionAbierta = null;
  lluvia.classList.remove('abierta');
  lluvia.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('sin-scroll');
}

document.querySelectorAll('.tarjeta[data-region]').forEach(tarjeta => {
  tarjeta.addEventListener('click', () => abrirLluvia(tarjeta.dataset.region));
});
lluvia.querySelector('.ll-cerrar').addEventListener('click', cerrarLluvia);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && regionAbierta) cerrarLluvia();
});

// Si cambia el tamaño de la ventana, se vuelve a acomodar (sin repetir la animación)
let esperaTamano;
window.addEventListener('resize', () => {
  if (!regionAbierta) return;
  clearTimeout(esperaTamano);
  esperaTamano = setTimeout(() => {
    if (!regionAbierta) return;
    lluvia.classList.add('sin-animacion');
    dibujar(regionAbierta);
  }, 200);
});

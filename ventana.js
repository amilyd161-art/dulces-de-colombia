const TEMAS = {
  amazonia:  { base: '#1f3326', etiqueta: 'Región Amazónica' },
  caribe:    { base: '#16403f', etiqueta: 'Región Caribe' },
  andina:    { base: '#4a2a1c', etiqueta: 'Región Andina' },
  pacifica:  { base: '#2a3d3a', etiqueta: 'Región Pacífica' },
  orinoquia: { base: '#4a3a14', etiqueta: 'Región Orinoquía' }
};

const ventana = document.getElementById('ventana');
const q = sel => ventana.querySelector(sel);
let actual = { dep: null, items: [], i: 0 };

// Lista de postres de un departamento (con detalle si existe, si no solo los nombres)
function itemsDe(dep) {
  const claves = typeof DEP_POSTRES !== 'undefined' && DEP_POSTRES[dep.id];
  if (claves) return claves.map(c => ({ ...DETALLE[c], slug: c }));
  return (POSTRES[dep.id] || []).map(nombre => ({ nombre }));
}

function abrirVentana(dep) {
  const tema = TEMAS[dep.region] || TEMAS.amazonia;
  actual = { dep, items: itemsDe(dep), i: 0 };

  ventana.style.setProperty('--base', tema.base);
  ventana.style.setProperty('--acento', dep.color);
  q('.v-region').textContent = tema.etiqueta;
  q('#v-titulo').textContent = dep.nombre;
  q('.v-marca').textContent = dep.nombre;

  const lista = q('.v-lista');
  lista.innerHTML = '';
  actual.items.forEach((it, n) => {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'v-chip';
    const num = document.createElement('span');
    num.textContent = n + 1;
    boton.append(num, it.nombre);
    boton.addEventListener('click', () => mostrarPostre(n));
    lista.appendChild(boton);
  });

  mostrarPostre(0);
  ventana.classList.add('abierta');
  ventana.setAttribute('aria-hidden', 'false');
  document.body.classList.add('sin-scroll');
}

function mostrarPostre(n) {
  const total = actual.items.length;
  if (!total) return;
  actual.i = (n + total) % total;
  const it = actual.items[actual.i];

  ventana.style.setProperty('--tono', it.color || actual.dep.color);
  q('.v-numero').textContent = '0' + (actual.i + 1) + ' / 0' + total;
  q('.v-nombre').textContent = it.nombre;
  q('.v-descripcion').textContent = it.texto || 'Pronto sabrás más sobre este postre.';

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

  ventana.querySelectorAll('.v-chip').forEach((c, k) => c.classList.toggle('activo', k === actual.i));

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
ventana.addEventListener('click', e => { if (!e.target.closest('.v-tarjeta')) cerrarVentana(); });
document.addEventListener('keydown', e => {
  if (!ventana.classList.contains('abierta')) return;
  if (e.key === 'Escape') cerrarVentana();
  if (e.key === 'ArrowLeft') mostrarPostre(actual.i - 1);
  if (e.key === 'ArrowRight') mostrarPostre(actual.i + 1);
});

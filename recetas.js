// Página de recetas: elige una región, muestra sus 8 postres y abre la receta al hacer clic.
// Las recetas están en recetas-datos.js.

const NOMBRES_REGION = {
  caribe: 'Región Caribe',
  andina: 'Región Andina',
  pacifica: 'Región Pacífica',
  amazonia: 'Región Amazónica',
  orinoquia: 'Región Orinoquía',
  insular: 'Región Insular'
};

// Color de la tachuela de cada tarjeta
const TACHUELAS = ['#e0b63a', '#5f8a3f', '#c4506b', '#4a8aa6', '#9a78a8', '#d9822b', '#3f6a35', '#e8718c'];

const grilla = document.querySelector('.r-grilla');
const tituloRegion = document.querySelector('.r-titulo-region');
const botones = document.querySelectorAll('.r-region');
const receta = document.getElementById('receta');
const rq = sel => receta.querySelector(sel);
let regionActual = 'caribe';

// Foto del postre, o su emoji si todavía no hay foto
function ponerFoto(img, sinFoto, item) {
  sinFoto.innerHTML = '<b>' + item.emoji + '</b>';
  img.hidden = false;
  sinFoto.hidden = true;
  img.onerror = () => { img.hidden = true; sinFoto.hidden = false; };
  img.alt = item.nombre;
  img.src = 'imagenes/postres/' + item.foto + '.jpg';
}

function mostrarRegion(region) {
  regionActual = region;
  botones.forEach(b => {
    const activo = b.dataset.region === region;
    b.classList.toggle('activo', activo);
    b.setAttribute('aria-selected', activo);
    // En celular las regiones van en una fila que se desliza: se muestra la elegida
    if (activo) {
      const fila = b.parentElement;
      if (fila.scrollWidth > fila.clientWidth) fila.scrollLeft = b.offsetLeft - fila.offsetLeft - 10;
    }
  });
  tituloRegion.textContent = NOMBRES_REGION[region];
  grilla.innerHTML = '';

  RECETAS[region].forEach((item, n) => {
    const li = document.createElement('li');
    const tarjeta = document.createElement('button');
    tarjeta.type = 'button';
    tarjeta.className = 'r-tarjeta';
    tarjeta.style.setProperty('--tachuela', TACHUELAS[n % TACHUELAS.length]);
    tarjeta.style.setProperty('--d', (n * 0.05) + 's');
    tarjeta.innerHTML =
      '<span class="r-foto"><img><span class="r-sin-foto" hidden></span></span>' +
      '<span class="r-nombre"></span>' +
      '<span class="r-lugar"></span>' +
      '<span class="r-ver">Ver receta →</span>';
    tarjeta.querySelector('.r-nombre').textContent = item.nombre;
    tarjeta.querySelector('.r-lugar').textContent = item.lugar;
    ponerFoto(tarjeta.querySelector('img'), tarjeta.querySelector('.r-sin-foto'), item);
    tarjeta.addEventListener('click', () => abrirReceta(item));
    li.appendChild(tarjeta);
    grilla.appendChild(li);
  });

  history.replaceState(null, '', '#' + region);
}

function abrirReceta(item) {
  rq('.rc-region').textContent = NOMBRES_REGION[regionActual];
  rq('#rc-nombre').textContent = item.nombre;
  rq('.rc-lugar').textContent = '📍 ' + item.lugar;
  rq('.rc-tiempo').textContent = '⏱️ ' + item.tiempo;
  rq('.rc-porciones').textContent = '🍽️ ' + item.porciones;
  ponerFoto(rq('.rc-foto img'), rq('.rc-sin-foto'), item);

  // Ingredientes con casilla para ir marcando
  const ingredientes = rq('.rc-ingredientes ul');
  ingredientes.innerHTML = '';
  item.ingredientes.forEach(texto => {
    const li = document.createElement('li');
    const etiqueta = document.createElement('label');
    const casilla = document.createElement('input');
    casilla.type = 'checkbox';
    etiqueta.append(casilla, document.createTextNode(' ' + texto));
    li.appendChild(etiqueta);
    ingredientes.appendChild(li);
  });

  const pasos = rq('.rc-pasos ol');
  pasos.innerHTML = '';
  item.pasos.forEach(texto => {
    const li = document.createElement('li');
    li.textContent = texto;
    pasos.appendChild(li);
  });

  receta.classList.add('abierta');
  receta.setAttribute('aria-hidden', 'false');
  document.body.classList.add('sin-scroll');
  receta.scrollTop = 0;
  rq('.rc-cerrar').focus();
}

function cerrarReceta() {
  receta.classList.remove('abierta');
  receta.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('sin-scroll');
}

botones.forEach(b => b.addEventListener('click', () => mostrarRegion(b.dataset.region)));
rq('.rc-cerrar').addEventListener('click', cerrarReceta);
// Cierra si se hace clic en el fondo oscuro (no dentro de la receta)
receta.addEventListener('click', e => { if (e.target === receta) cerrarReceta(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && receta.classList.contains('abierta')) cerrarReceta();
});

// Abre la región que venga en el enlace (por ejemplo recetas.html#andina); si no, Caribe
const inicial = location.hash.slice(1);
mostrarRegion(RECETAS[inicial] ? inicial : 'caribe');

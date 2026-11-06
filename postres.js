// Postres típicos por departamento (la clave es el "id" del departamento en mapa.js).
// Para cambiar un postre: edita el texto entre comillas.
const POSTRES = {
  // ----- CARIBE -----
  "guajira": ["Dulce de leche de cabra", "Dulce de ahuyama", "Cocadas", "Enyucado", "Arroz con leche"],
  "magdalena": ["Cocadas", "Alegrías de coco", "Enyucado", "Dulce de ñame", "Dulce de guayaba"],
  "atlantico": ["Enyucado", "Cocadas", "Alegrías", "Panelitas de leche", "Dulce de ahuyama"],
  "cesar": ["Arequipe", "Cocadas", "Panelitas de leche", "Dulce de guayaba", "Enyucado"],
  "bolivar": ["Cocadas de Cartagena", "Caballitos de papaya", "Alegrías", "Cabeza de gato", "Bolitas de tamarindo"],
  "sucre": ["Enyucado", "Cabeza de gato", "Dulce de ñame", "Cocadas", "Alegrías"],
  "cordoba": ["Enyucado", "Dulce de ñame", "Cocadas", "Alegrías", "Arroz con leche"],

  // ----- ANDINA -----
  "antioquia": ["Arequipe de leche", "Postre de natas", "Mazamorra con panela", "Brevas con arequipe", "Dulce de papayuela"],
  "santander": ["Brevas con arequipe", "Bocadillo veleño", "Obleas con arequipe", "Dulce de papayuela", "Postre de natas"],
  "norte-de-santander": ["Dulce de guayaba", "Arroz con leche", "Brevas con arequipe", "Cuajada con melao", "Arequipe"],
  "boyaca": ["Cuajada con melao", "Brevas en almíbar", "Postre de natas", "Arequipe", "Dulce de mora"],
  "cundinamarca": ["Cuajada con melao", "Merengón", "Brevas con arequipe", "Postre de natas", "Obleas con arequipe"],
  "bogota": ["Obleas con arequipe", "Merengón", "Brevas con arequipe", "Postre de natas", "Arroz con leche"],
  "caldas": ["Arequipe", "Dulce de papayuela", "Brevas en almíbar", "Postre de natas", "Cuajada con melao"],
  "risaralda": ["Arequipe", "Dulce de papayuela", "Postre de natas", "Dulce de mora", "Brevas en almíbar"],
  "quindio": ["Dulce de brevas", "Dulce de mora", "Arequipe", "Postre de natas", "Dulce de guayaba"],
  "tolima": ["Postre de natas", "Dulce de brevas", "Arequipe", "Arroz con leche", "Dulce de guayaba"],
  "huila": ["Bizcochos de achira", "Arequipe", "Brevas con arequipe", "Cuajada con melao", "Bocadillo de guayaba"],

  // ----- PACÍFICA -----
  "choco": ["Cocadas", "Dulce de borojó", "Dulce de chontaduro", "Cocada de piña", "Dulce de papaya"],
  "valle-del-cauca": ["Manjar blanco", "Cholado", "Champús", "Aborrajados", "Dulce de papayuela"],
  "cauca": ["Dulce de papayuela", "Brevas en almíbar", "Manjar blanco", "Arequipe", "Cocadas"],
  "narino": ["Helado de paila", "Quimbolitos", "Cocadas de Tumaco", "Dulce de mora", "Arequipe"],

  // ----- ORINOQUÍA -----
  "arauca": ["Dulce de lechosa", "Cuajada con melao", "Dulce de ahuyama", "Arroz con leche", "Dulce de leche"],
  "casanare": ["Tungos", "Dulce de lechosa", "Cuajada con melao", "Arroz con leche", "Dulce de leche"],
  "meta": ["Tungos", "Dulce de lechosa", "Cuajada con melao", "Dulce de leche", "Dulce de plátano"],
  "vichada": ["Dulce de lechosa", "Casabe con miel", "Tungos", "Dulce de leche", "Arroz con leche"],

  // ----- AMAZONÍA -----
  "guainia": ["Casabe con miel", "Dulce de arazá", "Dulce de yuca", "Dulce de copoazú", "Dulce de marañón"],
  "guaviare": ["Dulce de copoazú", "Dulce de arazá", "Casabe con miel", "Dulce de marañón", "Dulce de yuca"],
  "vaupes": ["Casabe con miel", "Dulce de arazá", "Dulce de yuca", "Dulce de copoazú", "Dulce de marañón"],
  "caqueta": ["Dulce de copoazú", "Dulce de arazá", "Arequipe", "Casabe con miel", "Dulce de chontaduro"],
  "putumayo": ["Dulce de arazá", "Chontaduro con miel", "Dulce de copoazú", "Dulce de papaya", "Casabe con miel"],
  "amazonas": ["Dulce de copoazú", "Dulce de arazá", "Dulce de cocona", "Casabe con miel", "Dulce de yuca"]
};

// Recetas: 8 postres por región.
// "foto" es el nombre de la imagen en imagenes/postres/ (sin .jpg).
// Si la foto todavía no existe, la página muestra el emoji.

const RECETAS = {

  // =====================================================================
  //  CARIBE
  // =====================================================================
  caribe: [
    {
      foto: 'cocadas', nombre: 'Cocadas', lugar: 'Cartagena, Bolívar', emoji: '🥥',
      tiempo: '50 min', porciones: '20 cocadas',
      ingredientes: [
        '4 tazas de coco rallado (2 cocos)',
        '2 tazas de azúcar (o 1 panela rallada para cocadas morenas)',
        '1 taza de agua',
        '1 astilla de canela',
        '3 clavos de olor',
        'Ralladura de 1 limón'
      ],
      pasos: [
        'Pon a hervir el agua con el azúcar, la canela y los clavos hasta formar un almíbar ligero.',
        'Retira la canela y los clavos, agrega el coco y cocina a fuego medio revolviendo de 20 a 25 minutos, hasta que la mezcla se despegue del fondo.',
        'Apaga el fuego y añade la ralladura de limón.',
        'Con una cuchara forma montoncitos sobre una superficie engrasada o sobre hojas de plátano.',
        'Deja secar y endurecer por lo menos 1 hora antes de servir.'
      ]
    },
    {
      foto: 'enyucado', nombre: 'Enyucado', lugar: 'Córdoba y Sucre', emoji: '🍰',
      tiempo: '1 h 20 min', porciones: '12 porciones',
      ingredientes: [
        '1 kg de yuca pelada y rallada',
        '2 tazas de coco rallado',
        '1 taza de azúcar',
        '1 taza de queso costeño rallado',
        '2 cucharadas de mantequilla derretida',
        '1 cucharadita de anís en grano',
        '1 pizca de sal'
      ],
      pasos: [
        'Precalienta el horno a 180 °C y engrasa un molde.',
        'Exprime un poco la yuca rallada para quitarle el exceso de líquido.',
        'Mezcla la yuca con el coco, el azúcar, el queso, la mantequilla, el anís y la sal.',
        'Vierte la mezcla en el molde y empareja la superficie.',
        'Hornea de 50 a 60 minutos, hasta que esté dorado por encima.',
        'Deja reposar 15 minutos y corta en cuadros.'
      ]
    },
    {
      foto: 'alegrias-ajonjoli', nombre: 'Alegrías de ajonjolí', lugar: 'Bolívar y Sucre', emoji: '🌾',
      tiempo: '40 min', porciones: '15 alegrías',
      ingredientes: [
        '2 tazas de ajonjolí',
        '1 panela (500 g) rallada',
        '½ taza de agua',
        '1 astilla de canela',
        'Jugo de ½ limón'
      ],
      pasos: [
        'Tuesta el ajonjolí en un sartén sin aceite, moviéndolo siempre, hasta que esté dorado.',
        'Derrite la panela en el agua con la canela y cocina hasta que el melao esté espeso (al dejar caer una gota en agua fría forma una bolita blanda).',
        'Retira la canela, agrega el limón y el ajonjolí y mezcla rápido.',
        'Con las manos húmedas forma bolitas, o extiende la mezcla y córtala en cuadros.',
        'Deja enfriar hasta que endurezcan.'
      ]
    },
    {
      foto: 'caballitos-papaya', nombre: 'Caballitos de papaya', lugar: 'Córdoba', emoji: '🥭',
      tiempo: '1 h 10 min', porciones: '8 porciones',
      ingredientes: [
        '1 papaya verde mediana',
        '2 tazas de azúcar',
        '3 tazas de agua',
        '1 astilla de canela',
        '4 clavos de olor',
        'Cáscara de 1 limón'
      ],
      pasos: [
        'Pela la papaya, quítale las semillas y córtala en tiras largas y delgadas.',
        'Cocina las tiras 5 minutos en agua hirviendo y escúrrelas.',
        'Prepara un almíbar con el agua, el azúcar, la canela, los clavos y la cáscara de limón.',
        'Agrega las tiras y cocina a fuego bajo de 40 a 50 minutos, hasta que se vean brillantes y el almíbar espese.',
        'Deja enfriar y sirve con su almíbar.'
      ]
    },
    {
      foto: 'mongo-mongo', nombre: 'Mongo-mongo', lugar: 'Atlántico, Córdoba y Magdalena', emoji: '🍌',
      tiempo: '2 h 30 min', porciones: '10 porciones',
      ingredientes: [
        '4 plátanos maduros',
        '1 mango maduro',
        '2 tazas de papaya',
        '1 taza de piña',
        '1 panela (500 g)',
        '1 taza de agua',
        '1 astilla de canela, 4 clavos y 3 pimientas de olor'
      ],
      pasos: [
        'Pela y corta todas las frutas en trozos.',
        'Derrite la panela en el agua con las especias.',
        'Agrega las frutas y cocina a fuego bajo de 1 h 30 min a 2 horas, revolviendo y aplastando de vez en cuando.',
        'El dulce está listo cuando queda como una pasta espesa y de color oscuro.',
        'Retira las especias y deja enfriar. Es típico de Semana Santa.'
      ]
    },
    {
      foto: 'dulce-name', nombre: 'Dulce de ñame', lugar: 'Sucre y Córdoba', emoji: '🍠',
      tiempo: '1 h 15 min', porciones: '10 porciones',
      ingredientes: [
        '1 kg de ñame',
        '1 litro de leche',
        '1 taza de leche de coco',
        '1 panela (500 g) o 2 tazas de azúcar',
        '1 astilla de canela',
        '4 clavos de olor',
        '1 cucharadita de anís'
      ],
      pasos: [
        'Pela el ñame, córtalo en trozos y cocínalo en agua hasta que esté blando.',
        'Escúrrelo y tritúralo hasta obtener un puré.',
        'En una olla pon la leche, la leche de coco, la panela y las especias; cuando la panela se derrita agrega el puré.',
        'Cocina a fuego medio-bajo revolviendo de 30 a 40 minutos, hasta que espese.',
        'Sirve tibio o frío. Es un dulce típico de Semana Santa.'
      ]
    },
    {
      foto: 'casquitos-limon', nombre: 'Casquitos de limón', lugar: 'Mompox, Bolívar', emoji: '🍋',
      tiempo: '3 h + remojo de una noche', porciones: '12 casquitos',
      ingredientes: [
        '12 limones verdes grandes',
        '3 tazas de azúcar',
        '3 tazas de agua',
        '1 astilla de canela',
        '1 taza de arequipe para rellenar'
      ],
      pasos: [
        'Corta los limones por la mitad y saca toda la pulpa, dejando solo la cáscara.',
        'Deja las cáscaras en remojo una noche, cambiando el agua varias veces, para quitarles el amargo.',
        'Hiérvelas 10 minutos, escúrrelas y repite dos veces más con agua limpia.',
        'Prepara un almíbar con el azúcar, el agua y la canela, agrega los casquitos y cocina a fuego bajo de 40 a 60 minutos, hasta que se vean translúcidos.',
        'Déjalos enfriar en el almíbar, escúrrelos y rellénalos con arequipe.'
      ]
    },
    {
      foto: 'corozo', nombre: 'Dulce de corozo', lugar: 'Cesar y Atlántico', emoji: '🍇',
      tiempo: '1 h', porciones: '8 porciones',
      ingredientes: [
        '2 tazas de corozo maduro',
        '2 tazas de azúcar',
        '4 tazas de agua',
        '1 astilla de canela',
        '3 clavos de olor'
      ],
      pasos: [
        'Lava bien los corozos.',
        'Cocínalos en el agua durante 20 minutos, hasta que se ablanden.',
        'Agrega el azúcar, la canela y los clavos.',
        'Cocina a fuego bajo de 30 a 40 minutos, hasta que el almíbar espese y los frutos queden brillantes.',
        'Deja enfriar. Se come chupando la pulpa, porque el corozo tiene una semilla grande.'
      ]
    }
  ],

  // =====================================================================
  //  ANDINA
  // =====================================================================
  andina: [
    {
      foto: 'natas', nombre: 'Postre de natas', lugar: 'Boyacá y Cundinamarca', emoji: '🍮',
      tiempo: '2 h', porciones: '8 porciones',
      ingredientes: [
        '3 litros de leche entera',
        '1 taza de azúcar',
        '4 yemas de huevo',
        '½ taza de uvas pasas',
        '1 astilla de canela',
        '1 cucharadita de vainilla',
        '¼ de taza de vino dulce (opcional)'
      ],
      pasos: [
        'Calienta la leche en una olla ancha a fuego bajo, sin dejar que hierva fuerte.',
        'Cada vez que se forme una nata en la superficie, retírala con cuidado y guárdala aparte. Repite durante 1 hora.',
        'Agrega el azúcar y la canela a la leche que quedó y cocina hasta que se reduzca a la mitad.',
        'Bate las yemas con un poco de esa leche tibia, incorpóralas y cocina 5 minutos sin dejar hervir.',
        'Agrega las natas, las pasas, la vainilla y el vino; cocina 10 minutos a fuego suave.',
        'Deja enfriar y refrigera antes de servir.'
      ]
    },
    {
      foto: 'brevas-arequipe', nombre: 'Brevas con arequipe', lugar: 'Cundinamarca y Boyacá', emoji: '🍯',
      tiempo: '2 h', porciones: '10 porciones',
      ingredientes: [
        '20 brevas',
        '1 panela (500 g)',
        '6 tazas de agua',
        '1 astilla de canela',
        '4 clavos de olor',
        '1 taza de arequipe'
      ],
      pasos: [
        'Lava las brevas y hazles un corte en cruz en la base.',
        'Hiérvelas 15 minutos en agua, escúrrelas y repite con agua limpia para quitarles el amargo.',
        'En una olla con agua nueva derrite la panela con la canela y los clavos.',
        'Agrega las brevas y cocina a fuego bajo cerca de 1 h 30 min, hasta que estén oscuras y el almíbar espese.',
        'Deja enfriar, abre cada breva por el corte y rellénala con arequipe.'
      ]
    },
    {
      foto: 'bocadillo-veleno', nombre: 'Bocadillo veleño', lugar: 'Vélez, Santander', emoji: '🟥',
      tiempo: '1 h 30 min + 6 h de reposo', porciones: '30 bocadillos',
      ingredientes: [
        '1 kg de guayaba roja madura',
        '750 g de azúcar',
        '½ taza de agua',
        'Hojas de bijao para envolver'
      ],
      pasos: [
        'Lava las guayabas, córtalas y cocínalas con el agua 10 minutos, hasta que se ablanden.',
        'Licúalas y cuela la pulpa para quitar las semillas.',
        'Cocina la pulpa con el azúcar a fuego medio, revolviendo sin parar con cuchara de palo, de 50 a 60 minutos.',
        'Está listo cuando al pasar la cuchara se ve el fondo de la olla.',
        'Vierte en un molde forrado y deja enfriar 6 horas. Corta en barritas y envuélvelas en hojas de bijao.'
      ]
    },
    {
      foto: 'merengon-guanabana', nombre: 'Merengón de guanábana', lugar: 'Bogotá y Cundinamarca', emoji: '🍰',
      tiempo: '2 h 30 min', porciones: '8 porciones',
      ingredientes: [
        '4 claras de huevo',
        '1 taza de azúcar',
        '1 cucharadita de jugo de limón',
        '2 tazas de crema de leche para batir',
        '2 cucharadas de azúcar para la crema',
        '1 taza de guanábana en trozos',
        'Fresas para decorar (opcional)'
      ],
      pasos: [
        'Precalienta el horno a 100 °C.',
        'Bate las claras con el limón a punto de nieve y agrega el azúcar poco a poco hasta tener un merengue firme y brillante.',
        'Forma discos sobre papel parafinado y hornea de 1 h 30 min a 2 horas, hasta que estén secos. Déjalos enfriar dentro del horno.',
        'Bate la crema con el azúcar hasta que esté firme.',
        'Arma por capas: merengue, crema y guanábana. Termina con fruta y sirve de inmediato.'
      ]
    },
    {
      foto: 'obleas', nombre: 'Obleas con arequipe', lugar: 'Floridablanca, Santander y Bogotá', emoji: '🫓',
      tiempo: '10 min', porciones: '4 obleas',
      ingredientes: [
        '8 obleas grandes',
        '1 taza de arequipe',
        '½ taza de mermelada de mora',
        '½ taza de queso blanco rallado',
        'Crema de leche y chispitas de colores (opcional)'
      ],
      pasos: [
        'Unta una capa generosa de arequipe sobre una oblea.',
        'Agrega mermelada de mora y queso rallado (y crema si quieres).',
        'Cubre con otra oblea y presiona suavemente.',
        'Sirve de inmediato para que la oblea no se ablande.'
      ]
    },
    {
      foto: 'arroz-leche', nombre: 'Arroz con leche', lugar: 'Toda la región Andina', emoji: '🍚',
      tiempo: '50 min', porciones: '8 porciones',
      ingredientes: [
        '1 taza de arroz',
        '2 tazas de agua',
        '1 litro de leche',
        '1 lata de leche condensada (o ¾ de taza de azúcar)',
        '1 astilla de canela y 4 clavos de olor',
        '½ taza de uvas pasas',
        'Canela en polvo para decorar'
      ],
      pasos: [
        'Cocina el arroz en el agua con la canela y los clavos hasta que la absorba.',
        'Agrega la leche y cocina a fuego bajo 25 minutos, revolviendo con frecuencia.',
        'Añade la leche condensada (o el azúcar) y las pasas; cocina 10 minutos más hasta que quede cremoso.',
        'Retira la canela y los clavos.',
        'Sirve tibio o frío con canela en polvo por encima.'
      ]
    },
    {
      foto: 'natilla-panela', nombre: 'Natilla', lugar: 'Antioquia y el Eje Cafetero', emoji: '🎄',
      tiempo: '40 min + 2 h de reposo', porciones: '12 porciones',
      ingredientes: [
        '1 litro de leche',
        '1 panela (500 g) rallada',
        '1 taza de fécula de maíz',
        '1 astilla de canela y 4 clavos de olor',
        '2 cucharadas de mantequilla',
        '½ taza de coco rallado (opcional)'
      ],
      pasos: [
        'Disuelve la fécula de maíz en 1 taza de leche fría.',
        'Calienta el resto de la leche con la panela, la canela y los clavos hasta que la panela se derrita; cuela.',
        'Agrega la fécula disuelta y revuelve sin parar a fuego medio de 10 a 15 minutos, hasta que espese y se despegue del fondo.',
        'Añade la mantequilla (y el coco) y mezcla.',
        'Vierte en un molde y deja cuajar 2 horas. Es el postre de Navidad, junto con los buñuelos.'
      ]
    },
    {
      foto: 'mazamorra-bocadillo', nombre: 'Mazamorra con bocadillo', lugar: 'Antioquia', emoji: '🌽',
      tiempo: '3 h + remojo de una noche', porciones: '8 porciones',
      ingredientes: [
        '500 g de maíz blanco trillado (peto)',
        'Agua suficiente',
        'Leche fría para servir',
        'Bocadillo o panela para acompañar'
      ],
      pasos: [
        'Deja el maíz en remojo en agua desde la noche anterior.',
        'Escúrrelo y cocínalo en abundante agua a fuego medio de 2 a 3 horas, hasta que esté muy blando. Agrega agua caliente si hace falta.',
        'El caldo espeso que queda es la mazamorra; deja enfriar.',
        'Sirve en vaso, con su caldo y leche fría.',
        'Acompaña con un trozo de bocadillo o panela.'
      ]
    }
  ],

  // =====================================================================
  //  PACÍFICA
  // =====================================================================
  pacifica: [
    {
      foto: 'manjar-blanco-buga', nombre: 'Manjar blanco', lugar: 'Valle del Cauca', emoji: '🍮',
      tiempo: '2 h 30 min + remojo de una noche', porciones: '12 porciones',
      ingredientes: [
        '2 litros de leche entera',
        '2 tazas de azúcar',
        '½ taza de arroz',
        '1 astilla de canela',
        '½ cucharadita de bicarbonato'
      ],
      pasos: [
        'Deja el arroz en remojo la noche anterior y licúalo con un poco de leche; cuela.',
        'En una olla gruesa o paila pon la leche, el azúcar, la canela y el bicarbonato.',
        'Agrega el arroz licuado y cocina a fuego medio revolviendo sin parar con cuchara de palo.',
        'Después de unas 2 horas tomará color caramelo claro y se verá el fondo al revolver.',
        'Retira la canela y sirve en totumas o recipientes pequeños.'
      ]
    },
    {
      foto: 'cholado-jamundi', nombre: 'Cholado', lugar: 'Jamundí, Valle del Cauca', emoji: '🍧',
      tiempo: '20 min', porciones: '4 vasos',
      ingredientes: [
        'Hielo raspado',
        '3 tazas de frutas picadas (mango, piña, papaya, banano, fresa)',
        'Sirope de mora o de maracuyá',
        'Leche condensada',
        'Crema de leche y coco rallado',
        'Galletas de barquillo y cerezas para decorar'
      ],
      pasos: [
        'Pica todas las frutas en cubos pequeños.',
        'En un vaso alto pon una capa de hielo raspado y báñala con sirope.',
        'Agrega una capa de frutas y repite hasta llenar el vaso.',
        'Termina con leche condensada, crema y coco rallado.',
        'Decora con galleta y cereza y sirve enseguida.'
      ]
    },
    {
      foto: 'champus', nombre: 'Champús', lugar: 'Valle del Cauca', emoji: '🍹',
      tiempo: '2 h', porciones: '10 vasos',
      ingredientes: [
        '1 taza de maíz trillado',
        '1 panela (500 g)',
        '3 litros de agua',
        '1 piña',
        '6 lulos',
        '4 hojas de naranjo, 1 astilla de canela y 4 clavos de olor'
      ],
      pasos: [
        'Cocina el maíz en agua de 1 a 1 h 30 min, hasta que esté blando.',
        'Aparte, derrite la panela en agua con la canela, los clavos y las hojas de naranjo.',
        'Licúa los lulos con un poco de agua y cuela; pica la piña en cubitos.',
        'Mezcla el maíz con el melao, el jugo de lulo y la piña. Ajusta el dulce.',
        'Refrigera y sirve bien frío.'
      ]
    },
    {
      foto: 'lulada', nombre: 'Lulada', lugar: 'Cali, Valle del Cauca', emoji: '🍋',
      tiempo: '15 min', porciones: '4 vasos',
      ingredientes: [
        '8 lulos maduros',
        '3 cucharadas de azúcar',
        'Jugo de 1 limón',
        '1 taza de agua fría',
        'Hielo'
      ],
      pasos: [
        'Lava los lulos, córtalos por la mitad y saca la pulpa con una cuchara (o pélalos y pícalos en cubitos).',
        'Machaca la pulpa con el azúcar, sin licuar, para que queden trocitos.',
        'Agrega el limón, el agua y el hielo.',
        'Mezcla y sirve de inmediato.'
      ]
    },
    {
      foto: 'arroz-leche-coco', nombre: 'Arroz con leche de coco', lugar: 'Chocó', emoji: '🥥',
      tiempo: '50 min', porciones: '8 porciones',
      ingredientes: [
        '1 taza de arroz',
        '2 tazas de agua',
        '2 tazas de leche de coco',
        '1 taza de leche',
        '¾ de taza de azúcar o panela rallada',
        '1 astilla de canela y 3 clavos de olor',
        'Coco rallado tostado para decorar'
      ],
      pasos: [
        'Cocina el arroz en el agua con la canela y los clavos hasta que la absorba.',
        'Agrega la leche de coco y la leche, y cocina a fuego bajo 20 minutos revolviendo.',
        'Añade el azúcar o la panela y cocina 10 minutos más, hasta que quede cremoso.',
        'Retira las especias.',
        'Sirve con coco tostado por encima.'
      ]
    },
    {
      foto: 'borojo', nombre: 'Dulce de borojó', lugar: 'Chocó', emoji: '🟤',
      tiempo: '50 min', porciones: '8 porciones',
      ingredientes: [
        '1 borojó maduro (cerca de 1 kg de pulpa)',
        '2 tazas de azúcar o panela rallada',
        '½ taza de agua',
        '1 astilla de canela'
      ],
      pasos: [
        'Pela el borojó y saca la pulpa.',
        'Licúala con el agua.',
        'Cocina la pulpa con el azúcar y la canela a fuego medio-bajo, revolviendo, unos 40 minutos.',
        'Está listo cuando espesa y toma un color oscuro.',
        'Deja enfriar y guarda en frascos.'
      ]
    },
    {
      foto: 'helados-paila', nombre: 'Helado de paila', lugar: 'Pasto, Nariño', emoji: '🍨',
      tiempo: '40 min', porciones: '6 porciones',
      ingredientes: [
        '2 tazas de pulpa de mora (o de lulo o maracuyá)',
        '½ taza de azúcar',
        '2 claras de huevo (opcional)',
        'Hielo en abundancia y sal gruesa',
        'Una paila de bronce o un recipiente metálico ancho'
      ],
      pasos: [
        'Mezcla la pulpa con el azúcar (y las claras batidas si las usas).',
        'Pon la paila sobre una cama de hielo con sal gruesa.',
        'Vierte la mezcla y haz girar la paila sobre el hielo mientras raspas los bordes con una cuchara de palo.',
        'Sigue de 20 a 30 minutos, hasta que espese y se congele.',
        'Sirve de inmediato.'
      ]
    },
    {
      foto: 'desamargado', nombre: 'Desamargado', lugar: 'Popayán, Cauca', emoji: '🍊',
      tiempo: '2 h + 2 días de remojo', porciones: '12 porciones',
      ingredientes: [
        'Cáscaras de 4 naranjas, 2 toronjas y 6 limones',
        '6 brevas',
        '1 panela (500 g)',
        '4 tazas de agua',
        '1 astilla de canela y 5 clavos de olor'
      ],
      pasos: [
        'Corta las cáscaras en trozos y quítales la parte blanca más gruesa.',
        'Déjalas en remojo de 2 a 3 días, cambiando el agua varias veces, para quitarles el amargo. Haz lo mismo con las brevas.',
        'Prepara un almíbar con la panela, el agua y las especias.',
        'Cocina allí las cáscaras y las brevas a fuego bajo de 1 a 2 horas, hasta que se vean translúcidas.',
        'Sirve frío. Es un dulce de Semana Santa.'
      ]
    }
  ],

  // =====================================================================
  //  AMAZONÍA
  // =====================================================================
  amazonia: [
    {
      foto: 'copoazu', nombre: 'Dulce de copoazú', lugar: 'Amazonas', emoji: '🌰',
      tiempo: '45 min', porciones: '8 porciones',
      ingredientes: [
        '2 tazas de pulpa de copoazú',
        '1 taza de azúcar',
        '½ taza de agua',
        '1 cucharada de jugo de limón'
      ],
      pasos: [
        'Licúa la pulpa con el agua.',
        'Cocina con el azúcar a fuego medio-bajo, revolviendo, de 30 a 40 minutos.',
        'Cuando espese, agrega el limón y cocina 2 minutos más.',
        'Deja enfriar. Puedes mezclarlo con crema de leche para hacer una crema de copoazú.'
      ]
    },
    {
      foto: 'araza', nombre: 'Dulce de arazá', lugar: 'Caquetá y Guaviare', emoji: '🍋',
      tiempo: '50 min', porciones: '8 porciones',
      ingredientes: [
        '1 kg de arazá maduro',
        '600 g de azúcar',
        '1 taza de agua',
        '1 astilla de canela'
      ],
      pasos: [
        'Lava los arazá, pártelos y licúalos con el agua.',
        'Cuela para quitar las semillas.',
        'Cocina la pulpa con el azúcar y la canela a fuego medio-bajo, revolviendo, unos 40 minutos.',
        'Retira la canela cuando espese y deja enfriar.'
      ]
    },
    {
      foto: 'cocona', nombre: 'Dulce de cocona', lugar: 'Amazonas y Putumayo', emoji: '🍅',
      tiempo: '50 min', porciones: '8 porciones',
      ingredientes: [
        '1 kg de cocona',
        '2 tazas de azúcar',
        '2 tazas de agua',
        '3 clavos de olor'
      ],
      pasos: [
        'Pasa las coconas 1 minuto por agua hirviendo para pelarlas fácilmente.',
        'Pélalas y córtalas en trozos.',
        'Prepara un almíbar con el agua, el azúcar y los clavos.',
        'Agrega la cocona y cocina a fuego bajo unos 40 minutos, hasta que espese.',
        'Deja enfriar y sirve.'
      ]
    },
    {
      foto: 'camu-camu', nombre: 'Dulce de camu camu', lugar: 'Amazonas', emoji: '🍒',
      tiempo: '40 min', porciones: '6 porciones',
      ingredientes: [
        '2 tazas de pulpa de camu camu',
        '1 ½ tazas de azúcar',
        '1 taza de agua'
      ],
      pasos: [
        'Licúa la pulpa con el agua y cuela.',
        'Cocina con el azúcar a fuego medio-bajo, revolviendo, unos 30 minutos.',
        'Está listo cuando tiene textura de mermelada.',
        'Guarda en frascos. Es muy ácido, así que combina bien con queso o galletas.'
      ]
    },
    {
      foto: 'chontaduro', nombre: 'Dulce de chontaduro', lugar: 'Putumayo y Caquetá', emoji: '🟠',
      tiempo: '4 h', porciones: '8 porciones',
      ingredientes: [
        '1 kg de chontaduro',
        'Agua con un poco de sal para cocinar',
        '2 tazas de leche',
        '1 panela (500 g) rallada',
        '1 astilla de canela'
      ],
      pasos: [
        'Cocina los chontaduros en agua con sal unas 3 horas, hasta que estén muy blandos (el chontaduro siempre debe cocinarse bien).',
        'Pélalos, quítales la semilla y tritúralos con la leche.',
        'Cocina la mezcla con la panela y la canela a fuego bajo, revolviendo, unos 30 minutos.',
        'Cuando espese, retira la canela y deja enfriar.'
      ]
    },
    {
      foto: 'yuca', nombre: 'Dulce de yuca', lugar: 'Vaupés y Guainía', emoji: '🍠',
      tiempo: '1 h', porciones: '8 porciones',
      ingredientes: [
        '1 kg de yuca pelada y rallada',
        '1 panela (500 g)',
        '2 tazas de leche de coco o de vaca',
        '1 astilla de canela',
        '1 cucharadita de anís'
      ],
      pasos: [
        'Derrite la panela en la leche con la canela y el anís.',
        'Agrega la yuca rallada.',
        'Cocina a fuego bajo revolviendo de 40 a 45 minutos, hasta que la yuca esté transparente y la mezcla espese.',
        'Retira la canela y sirve tibio o frío.'
      ]
    },
    {
      foto: 'papaya-verde', nombre: 'Dulce de papaya verde', lugar: 'Caquetá', emoji: '🥭',
      tiempo: '1 h 15 min', porciones: '8 porciones',
      ingredientes: [
        '1 papaya verde',
        '1 panela (500 g)',
        '3 tazas de agua',
        '1 astilla de canela',
        '4 clavos de olor'
      ],
      pasos: [
        'Pela la papaya, quítale las semillas y córtala en cubos.',
        'Hiérvela 5 minutos en agua y escúrrela.',
        'Derrite la panela en el agua con la canela y los clavos.',
        'Agrega la papaya y cocina a fuego bajo cerca de 1 hora, hasta que se vea oscura y brillante.',
        'Deja enfriar y sirve con su almíbar.'
      ]
    },
    {
      foto: 'pina-amazonica', nombre: 'Dulce de piña amazónica', lugar: 'Caquetá', emoji: '🍍',
      tiempo: '50 min', porciones: '8 porciones',
      ingredientes: [
        '1 piña madura',
        '2 tazas de azúcar',
        '2 tazas de agua',
        '1 astilla de canela',
        '3 clavos de olor'
      ],
      pasos: [
        'Pela la piña, quítale el corazón y córtala en cubos.',
        'Prepara un almíbar con el agua, el azúcar y las especias.',
        'Agrega la piña y cocina a fuego bajo unos 40 minutos, hasta que el almíbar espese.',
        'Deja enfriar y sirve.'
      ]
    }
  ],

  // =====================================================================
  //  ORINOQUÍA
  // =====================================================================
  orinoquia: [
    {
      foto: 'gofios', nombre: 'Gofios llaneros', lugar: 'Casanare y Meta', emoji: '🌽',
      tiempo: '40 min', porciones: '20 gofios',
      ingredientes: [
        '2 tazas de maíz amarillo seco',
        '1 panela (500 g) rallada muy fina',
        '1 cucharadita de canela en polvo'
      ],
      pasos: [
        'Tuesta el maíz en una paila o sartén, moviéndolo siempre, hasta que esté dorado.',
        'Muélelo muy fino y ciérnelo.',
        'Mezcla la harina de maíz con la panela y la canela.',
        'Presiona la mezcla en moldecitos o forma conitos con la mano, apretando bien.',
        'Envuelve cada gofio en papel.'
      ]
    },
    {
      foto: 'papaya', nombre: 'Dulce de lechosa', lugar: 'Arauca y Casanare', emoji: '🥭',
      tiempo: '1 h 15 min', porciones: '8 porciones',
      ingredientes: [
        '1 lechosa (papaya) verde',
        '1 panela (500 g)',
        '3 tazas de agua',
        '1 astilla de canela',
        '4 clavos de olor'
      ],
      pasos: [
        'Pela la lechosa, quítale las semillas y rállala en tiras gruesas.',
        'Lávala bien y escúrrela.',
        'Derrite la panela en el agua con la canela y los clavos.',
        'Agrega la lechosa y cocina a fuego bajo cerca de 1 hora, hasta que el almíbar espese.',
        'Deja enfriar y sirve.'
      ]
    },
    {
      foto: 'leche-cortada', nombre: 'Dulce de leche cortada', lugar: 'Casanare', emoji: '🥛',
      tiempo: '1 h 45 min', porciones: '10 porciones',
      ingredientes: [
        '2 litros de leche',
        'Jugo de 2 limones',
        '2 tazas de azúcar o panela rallada',
        '1 astilla de canela',
        '4 clavos de olor'
      ],
      pasos: [
        'Pon a hervir la leche y agrega el jugo de limón para cortarla.',
        'Deja que se formen los grumos durante 10 minutos.',
        'Agrega el azúcar, la canela y los clavos.',
        'Cocina a fuego bajo cerca de 1 h 30 min, revolviendo poco, hasta que el suero se convierta en un almíbar dorado.',
        'Deja enfriar y sirve.'
      ]
    },
    {
      foto: 'dulce-leche', nombre: 'Dulce de leche', lugar: 'Arauca y Meta', emoji: '🍯',
      tiempo: '2 h', porciones: '12 porciones',
      ingredientes: [
        '2 litros de leche entera',
        '2 tazas de azúcar',
        '½ cucharadita de bicarbonato',
        '1 astilla de canela'
      ],
      pasos: [
        'Pon la leche con el azúcar, la canela y el bicarbonato en una olla gruesa.',
        'Cocina a fuego medio, revolviendo con cuchara de palo.',
        'Cuando empiece a espesar, baja el fuego y revuelve sin parar.',
        'Después de 1 h 30 min a 2 horas tendrá color caramelo y se verá el fondo de la olla.',
        'Retira la canela y deja enfriar.'
      ]
    },
    {
      foto: 'bananos-melao', nombre: 'Bananos con melao', lugar: 'Meta', emoji: '🍌',
      tiempo: '30 min', porciones: '6 porciones',
      ingredientes: [
        '6 bananos o plátanos muy maduros',
        '1 panela (500 g)',
        '1 ½ tazas de agua',
        '1 astilla de canela y 3 clavos de olor',
        '1 cucharada de mantequilla'
      ],
      pasos: [
        'Derrite la panela en el agua con la canela y los clavos.',
        'Cocina 10 minutos hasta formar un melao.',
        'Pela los bananos, córtalos por la mitad y agrégalos con la mantequilla.',
        'Cocina a fuego bajo unos 15 minutos, volteándolos, hasta que se ablanden y se bañen de melao.',
        'Sirve tibios.'
      ]
    },
    {
      foto: 'moriche', nombre: 'Dulce de moriche', lugar: 'Vichada', emoji: '🌴',
      tiempo: '1 h 30 min', porciones: '8 porciones',
      ingredientes: [
        '1 kg de frutos de moriche maduros',
        '1 panela (500 g) o 2 tazas de azúcar',
        '1 taza de agua',
        '1 astilla de canela'
      ],
      pasos: [
        'Deja los frutos en agua tibia unas horas para que se ablanden.',
        'Pélalos y raspa la pulpa con una cuchara.',
        'Cocina la pulpa con el agua, la panela y la canela a fuego bajo, revolviendo, unos 40 minutos.',
        'Cuando espese, retira la canela y deja enfriar.'
      ]
    },
    {
      foto: 'cuajada-melao', nombre: 'Cuajada con melao', lugar: 'Casanare y Arauca', emoji: '🧀',
      tiempo: '30 min', porciones: '6 porciones',
      ingredientes: [
        '500 g de cuajada fresca',
        '1 panela (500 g)',
        '1 ½ tazas de agua',
        '1 astilla de canela',
        '3 clavos de olor'
      ],
      pasos: [
        'Derrite la panela en el agua con la canela y los clavos.',
        'Cocina de 15 a 20 minutos, hasta que el melao espese.',
        'Cuela y deja que se entibie.',
        'Corta la cuajada en tajadas y báñala con el melao.'
      ]
    },
    {
      foto: 'merey', nombre: 'Dulce de merey', lugar: 'Vichada', emoji: '🍎',
      tiempo: '1 h 30 min', porciones: '8 porciones',
      ingredientes: [
        '1 kg de merey (fruto del marañón)',
        '600 g de azúcar',
        '3 tazas de agua',
        '1 astilla de canela y 4 clavos de olor'
      ],
      pasos: [
        'Lava los frutos y quítales la semilla (la nuez).',
        'Pínchalos con un tenedor y exprímelos un poco para sacarles el jugo, que es astringente.',
        'Hiérvelos 10 minutos y bota esa agua.',
        'Cocínalos en un almíbar con el agua, el azúcar y las especias, a fuego bajo, cerca de 1 hora.',
        'Deja enfriar y sirve.'
      ]
    }
  ],

  // =====================================================================
  //  INSULAR
  // =====================================================================
  insular: [
    {
      foto: 'pan-bon', nombre: 'Pan Bon', lugar: 'San Andrés', emoji: '🍞',
      tiempo: '2 h 30 min', porciones: '1 pan grande',
      ingredientes: [
        '4 tazas de harina de trigo',
        '1 taza de azúcar morena',
        '10 g de levadura seca',
        '1 taza de leche de coco tibia',
        '½ taza de mantequilla derretida',
        '1 huevo',
        '½ taza de uvas pasas',
        '1 cucharadita de canela, ½ de nuez moscada y 1 de vainilla'
      ],
      pasos: [
        'Mezcla la levadura con la leche de coco tibia y una cucharada de azúcar; deja reposar 10 minutos.',
        'En un recipiente mezcla la harina, el resto del azúcar, las especias y una pizca de sal.',
        'Agrega la levadura, la mantequilla, el huevo y la vainilla; amasa 10 minutos e incorpora las pasas.',
        'Deja leudar 1 hora tapado, hasta que doble su tamaño.',
        'Forma el pan, ponlo en un molde engrasado y deja leudar 30 minutos más.',
        'Hornea a 180 °C de 35 a 40 minutos.'
      ]
    },
    {
      foto: 'johnny-cake', nombre: 'Johnny cake', lugar: 'San Andrés y Providencia', emoji: '🫓',
      tiempo: '40 min', porciones: '12 unidades',
      ingredientes: [
        '3 tazas de harina de trigo',
        '1 cucharada de polvo de hornear',
        '2 cucharadas de azúcar',
        '1 cucharadita de sal',
        '¼ de taza de mantequilla fría',
        '¾ de taza de leche de coco',
        'Aceite para freír'
      ],
      pasos: [
        'Mezcla la harina, el polvo de hornear, el azúcar y la sal.',
        'Agrega la mantequilla en trocitos y frota con los dedos hasta que parezca arena.',
        'Añade la leche de coco poco a poco hasta tener una masa suave; deja reposar 15 minutos.',
        'Forma bolitas y aplánalas.',
        'Fríelas en aceite caliente hasta que estén doradas (o hornéalas a 200 °C por 20 minutos).'
      ]
    },
    {
      foto: 'sugar-cake', nombre: 'Sugar cake', lugar: 'San Andrés', emoji: '🍬',
      tiempo: '30 min', porciones: '15 unidades',
      ingredientes: [
        '3 tazas de coco rallado',
        '2 tazas de azúcar morena',
        '½ taza de agua',
        '1 cucharadita de jengibre rallado',
        '1 cucharadita de vainilla'
      ],
      pasos: [
        'Calienta el agua con el azúcar y el jengibre hasta formar un almíbar.',
        'Agrega el coco y cocina revolviendo de 10 a 15 minutos, hasta que espese.',
        'Añade la vainilla.',
        'Con una cuchara forma montoncitos sobre papel engrasado.',
        'Deja endurecer antes de servir.'
      ]
    },
    {
      foto: 'coconut-pie', nombre: 'Coconut pie', lugar: 'San Andrés y Providencia', emoji: '🥧',
      tiempo: '1 h 30 min', porciones: '8 porciones',
      ingredientes: [
        'Masa: 2 tazas de harina, ½ taza de mantequilla fría, ¼ de taza de agua fría y una pizca de sal',
        '2 tazas de coco rallado',
        '1 taza de azúcar',
        '1 taza de leche de coco',
        '2 huevos',
        '1 cucharadita de vainilla y una pizca de nuez moscada'
      ],
      pasos: [
        'Mezcla la harina con la sal y la mantequilla, agrega el agua y forma una masa; refrigera 30 minutos.',
        'Precalienta el horno a 180 °C.',
        'Extiende la masa y forra un molde para tarta.',
        'Mezcla el coco, el azúcar, la leche de coco, los huevos, la vainilla y la nuez moscada.',
        'Vierte el relleno sobre la masa y hornea de 40 a 45 minutos, hasta dorar.'
      ]
    },
    {
      foto: 'dulce-coco', nombre: 'Dulce de coco', lugar: 'San Andrés', emoji: '🥥',
      tiempo: '45 min', porciones: '8 porciones',
      ingredientes: [
        '2 tazas de coco rallado',
        '2 tazas de leche de coco',
        '1 taza de azúcar',
        '1 astilla de canela',
        '3 clavos de olor'
      ],
      pasos: [
        'Pon la leche de coco con el azúcar, la canela y los clavos en una olla.',
        'Cuando hierva, agrega el coco rallado.',
        'Cocina a fuego bajo revolviendo unos 30 minutos, hasta que espese.',
        'Retira las especias y sirve en pocillos, tibio o frío.'
      ]
    },
    {
      foto: 'plantinta', nombre: 'Plantintá', lugar: 'San Andrés y Providencia', emoji: '🍌',
      tiempo: '1 h 15 min', porciones: '12 tartaletas',
      ingredientes: [
        'Masa: 2 tazas de harina, ½ taza de mantequilla fría, 2 cucharadas de azúcar y agua fría',
        '3 plátanos muy maduros',
        '½ taza de azúcar morena',
        '1 cucharadita de canela y ½ de nuez moscada',
        '1 cucharadita de vainilla',
        '1 cucharada de mantequilla'
      ],
      pasos: [
        'Cocina los plátanos en trozos con el azúcar, las especias y un poco de agua hasta obtener un puré espeso; agrega la vainilla y la mantequilla.',
        'Mezcla la harina, el azúcar y la mantequilla; agrega agua fría hasta formar una masa y refrigérala 20 minutos.',
        'Extiende la masa y corta círculos.',
        'Pon relleno en el centro y cubre con tiras de masa cruzadas.',
        'Hornea a 180 °C de 25 a 30 minutos.'
      ]
    },
    {
      foto: 'pudin-batata', nombre: 'Pudín de batata', lugar: 'San Andrés', emoji: '🍠',
      tiempo: '1 h 30 min', porciones: '10 porciones',
      ingredientes: [
        '1 kg de batata (camote) pelada y rallada',
        '2 tazas de leche de coco',
        '1 taza de azúcar morena',
        '½ taza de harina de trigo',
        '¼ de taza de mantequilla derretida',
        '1 cucharadita de vainilla, canela, nuez moscada y jengibre al gusto',
        '½ taza de uvas pasas'
      ],
      pasos: [
        'Precalienta el horno a 180 °C y engrasa un molde.',
        'Mezcla la batata con la leche de coco, el azúcar, la harina, la mantequilla y las especias.',
        'Agrega las pasas.',
        'Vierte en el molde y hornea de 1 hora a 1 h 15 min, hasta que esté firme y dorado.',
        'Deja enfriar y corta en cuadros.'
      ]
    },
    {
      foto: 'pudin-yuca', nombre: 'Pudín de yuca', lugar: 'Providencia', emoji: '🍰',
      tiempo: '1 h 15 min', porciones: '10 porciones',
      ingredientes: [
        '1 kg de yuca pelada y rallada',
        '1 taza de coco rallado',
        '1 ½ tazas de leche de coco',
        '1 taza de azúcar morena',
        '3 cucharadas de mantequilla derretida',
        '1 cucharadita de jengibre rallado, nuez moscada y vainilla'
      ],
      pasos: [
        'Precalienta el horno a 180 °C y engrasa un molde.',
        'Mezcla todos los ingredientes hasta integrarlos bien.',
        'Vierte en el molde y empareja la superficie.',
        'Hornea cerca de 1 hora, hasta que esté dorado.',
        'Deja reposar antes de cortar.'
      ]
    }
  ]
};

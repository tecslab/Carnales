const unidades = {
  gramos: "gramos",
  kiloGramos: "Kilogramos",
  unidad: "unidad/es", // Para gaseosas y similares
}

const opciones = {
  dividido: "Dividido"
}


module.exports = {
  constants: {
    mesas:[
      {name: "Ventana"},
      {name: "Mesa 1"},
      {name: "Mesa 2"},
      {name: "Mesa 3"},
      {name: "Mesa 4"},
      {name: "Mesa 5"},
      {name: "Mesa 6"},
      {name: "Mesa 7"}
    ],
    clientes : [
      {name: "General"},
      {name: "Cliente 1"},
      {name: "Cliente 2"},
      {name: "Cliente 3"},
      {name: "Cliente 4"},
      {name: "Cliente 5"},
      {name: "Cliente 6"},
      {name: "Cliente 7"},
      {name: "Cliente 8"},
      ],
    categorias : [
      {_id: 1, name: "Taco"},
      {_id: 2, name: "Taco Chingón"},
      {_id: 3, name: "Burrito"},
      {_id: 4, name: "Quesadilla"},
      {_id: 5, name: "Especiales"},
      {_id: 6, name: "Bebidas"}
      ],
    
    ingredientes: [
      {id: 1, nombre: "Aguacate"},
      {id: 2, nombre: "Cebolla"},
      {id: 3, nombre: "Piña"},
      {id: 4, nombre: "Frejol"},
      {id: 5, nombre: "Queso"},
      {id: 6, nombre: "Ensalada"},
      {id: 7, nombre: "Arroz"},
      {id: 8, nombre: "Tortilla Trigo Grande"},
      {id: 9, nombre: "Tortilla Trigo Pequeña"},
      {id: 10, nombre: "Porcion Pollo Asado"},
      {id: 11, nombre: "Porcion Carne Asada "},
      {id: 12, nombre: "Porcion Carne Guisada"},
      {id: 14, nombre: "Porcion Cerdo Asado Picante"},
      {id: 15, nombre: "Porcion Barbacoa de Res Picante"},
      {id: 16, nombre: "Porcion Chicharron"},
      {id: 17, nombre: "Porcion Carnitas"},
      {id: 19, nombre: "Porcion Cabeza"},
    ],

    variedad:[
      {_id:1, nombre: "Pollo Asado", ingredientes: [{idIngrediente: 10}]},
      {_id:2, nombre: "Carne Asada", ingredientes: [{idIngrediente: 11}]},
      {_id:3, nombre: "Carne Guisada", ingredientes: [{idIngrediente: 12}]},
      {_id:4, nombre: "Al Pastor", ingredientes: [{idIngrediente: 10}, {idIngrediente: 3}]},
      {_id:5, nombre: "Cerdo Asado Picante", ingredientes: [{idIngrediente: 14}]},
      {_id:6, nombre: "Barbacoa de Res Picante", ingredientes: [{idIngrediente: 15}]},
      {_id:7, nombre: "Chicharrón", ingredientes: [{idIngrediente: 16}]},
      {_id:8, nombre: "Carnitas", ingredientes: [{idIngrediente: 17}]},
      {_id:9, nombre: "Cabeza", ingredientes: [{idIngrediente: 18}]},
    ],
    // Las mezclas de productos se las hacen sumando los ingredientesVariedad y manteniendo los ingredientesCategoria
    productos : [
      {name:'Taco Pollo Asado', variedad: "Pollo Asado", alias: "T. Pollo Asado", idCategoria: 1, precio: 1, ingredientesVariedad:[{idIngrediente:10, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[{idIngrediente:1, eliminable:true, cant:"25", unidades:unidades.gramos}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Carne Asada', variedad: "Carne Asada", alias:"T. Carne Asada", idCategoria: 1, precio: 1, ingredientesVariedad:[{idIngrediente:11, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Carne Guisada', variedad: "Carne Guisada", alias:"T. Carne Guisada", idCategoria: 1, precio: 1, ingredientesVariedad:[{idIngrediente:12, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Al Pastor', variedad: "Al Pastor", alias:"T. Al Pastor", idCategoria: 1, precio: 1, ingredientesVariedad:[{idIngrediente:10, eliminable:false, cant:"25", unidades:unidades.gramos}, {idIngrediente:3, eliminable:true, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}, {idIngrediente:3, eliminable:true}]},
      {name:'Taco Cerdo Asado Picante', variedad: "Cerdo Asado Picante", alias:"T. Cerdo Picante", idCategoria: 1, precio: 1, ingredientesVariedad:[{idIngrediente:14, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Barbacoa de Res Picante', variedad: "Barbacoa de Res Picante", alias:"T. Barbacoa", idCategoria: 1, precio: 1, ingredientesVariedad:[{idIngrediente:15, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chicharron', variedad: "Chicharron", alias:"T. Chicharrón", idCategoria: 1, precio: 1.5, ingredientesVariedad:[{idIngrediente:16, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Carnitas', variedad: "Carnitas", alias:"T. Carnitas", idCategoria: 1, precio: 1.5, ingredientesVariedad:[{idIngrediente:17, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Cabeza', variedad: "Cabeza", alias:"T. Cabeza", idCategoria: 1, precio: 1.5, ingredientesVariedad:[{idIngrediente:18, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      
      {name:'Taco Chingón Pollo Asado', variedad: "Pollo Asado", alias: "TC Pollo Asado", idCategoria: 2, precio: 1.5, ingredientesVariedad:[{idIngrediente:10, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Carne Asada', variedad: "Carne Asada", alias:"Ch. Carne Asada", idCategoria: 2, precio: 1.5, ingredientesVariedad:[{idIngrediente:11, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Carne Guisada', variedad: "Carne Guisada", alias:"Ch. Carne Guisada", idCategoria: 2, precio: 1.5, ingredientesVariedad:[{idIngrediente:12, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Al Pastor', variedad: "Al Pastor", alias:"Ch. Al Pastor", idCategoria: 2, precio: 1.5,  ingredientesVariedad:[{idIngrediente:10, eliminable:false, cant:"25", unidades:unidades.gramos}, {idIngrediente:3, eliminable:true, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}, {idIngrediente:3, eliminable:true}]},
      {name:'Taco Chingón Cerdo Asado Picante', variedad: "Cerdo Asado Picante", alias:"Ch. Cerdo Picante", idCategoria: 2, precio: 1.5, ingredientesVariedad:[{idIngrediente:14, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Barbacoa de Res Picante', variedad: "Barbacoa de Res Picante", alias:"Ch. Barbacoa", idCategoria: 2, precio: 1.5, ingredientesVariedad:[{idIngrediente:15, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Chicharron', variedad: "Chicharron", alias:"Ch. Chicharrón", idCategoria: 2, precio: 2, ingredientesVariedad:[{idIngrediente:16, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Carnitas', variedad: "Carnitas", alias:"Ch. Carnitas", idCategoria: 2, precio: 2, ingredientesVariedad:[{idIngrediente:18, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Cabeza', variedad: "Cabeza", alias:"Ch. Cabeza", idCategoria: 2, precio: 2, ingredientesVariedad:[{idIngrediente:18, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      
      {name:'Burrito Pollo Asado', variedad: "Pollo Asado", alias: "B. Pollo Asado", idCategoria: 3, precio: 2.5, ingredientesVariedad:[{idIngrediente:10, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Carne Asada', variedad: "Carne Asada", alias: "B. Carne Asada", idCategoria: 3, precio: 2.5, ingredientesVariedad:[{idIngrediente:11, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Carne Guisada', variedad: "Carne Guisada", alias: "B. Carne Guidada", idCategoria: 3, precio: 2.5, ingredientesVariedad:[{idIngrediente:12, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Al Pastor', variedad: "Al Pastor", alias: "B. Al Pastor", idCategoria: 3, precio: 2.5, ingredientesVariedad:[{idIngrediente:10, eliminable:false, cant:"25", unidades:unidades.gramos}, {idIngrediente:3, eliminable:true, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false}, {idIngrediente:3, eliminable:true} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Cerdo Asado Picante', variedad: "Cerdo Asado Picante", alias: "B. Cerdo Picante", idCategoria: 3, precio: 2.5, ingredientesVariedad:[{idIngrediente:14, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Barbacoa de Res Picante', variedad: "Barbacoa de Res Picante", alias: "B. Barbacoa", idCategoria: 3, precio: 2.5, ingredientesVariedad:[{idIngrediente:15, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Chicharron', variedad: "Chicharron", alias: "B. Chicharrón", idCategoria: 3, precio: 3, ingredientesVariedad:[{idIngrediente:16, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false}, {idIngrediente:3, eliminable:true} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Carnitas', variedad: "Carnitas", alias: "B. Carnitas", idCategoria: 3, precio: 3, ingredientesVariedad:[{idIngrediente:17, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Cabeza', variedad: "Cabeza", alias: "B. Cabeza", idCategoria: 3, precio: 3, ingredientesVariedad:[{idIngrediente:18, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      
      {name:'Quesadilla Pollo Asado', variedad: "Pollo Asado", alias: "Q. Pollo Asado", idCategoria: 4, precio: 3, ingredientesVariedad:[{idIngrediente:10, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Carne Asada', variedad: "Carne Asada", alias: "Q. Carne Asada", idCategoria: 4, precio: 3, ingredientesVariedad:[{idIngrediente:11, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Carne Guisada', variedad: "Carne Guisada", alias: "Q. Carne Guisada", idCategoria: 4, precio: 3, ingredientesVariedad:[{idIngrediente:12, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Al Pastor', variedad: "Al Pastor", alias: "Q. Al Pastor", idCategoria: 4, precio: 3, ingredientesVariedad:[{idIngrediente:10, eliminable:false, cant:"25", unidades:unidades.gramos}, {idIngrediente:3, eliminable:true, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false}, {idIngrediente:3, eliminable:true} ]},
      {name:'Quesadilla Cerdo Asado Picante', variedad: "Cerdo Asado Picante", alias: "Q. Cerdo Picante", idCategoria: 4, precio: 3, ingredientesVariedad:[{idIngrediente:14, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Barbacoa de Res Picante', variedad: "Barbacoa de Res Picante", alias: "Q. Barbacoa", idCategoria: 4, precio: 3, ingredientesVariedad:[{idIngrediente:15, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Chicharron', variedad: "Chicharron", alias: "Q. Chicharron", idCategoria: 4, precio: 3.5, ingredientesVariedad:[{idIngrediente:16, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Carnitas', variedad: "Carnitas", alias: "Q. Carnitas", idCategoria: 4, precio: 3.5, ingredientesVariedad:[{idIngrediente:17, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Cabeza', variedad: "Cabeza", alias: "Q. Cabeza", idCategoria: 4, precio: 3.5, ingredientesVariedad:[{idIngrediente:18, eliminable:false, cant:"25", unidades:unidades.gramos}], ingredientesCategoria:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},

      {name:'Tortillas Artesanales', alias:"T. Artesanales", idCategoria: 5, precio: 1},
      {name: "Nachos", idCategoria: 5, precio: 2},
      {name: "Pico de Gallo", idCategoria: 5, precio: 2},

      {name: "Cola", idCategoria: 6, precio: 0.5},
      {name: "Cola 1L.", idCategoria: 6, precio: 0.5},
      {name: "Jamaica", idCategoria: 6, precio: 0.5},
      {name: "Jarra Jamaica Pequeña", alias:"J. Jamaica P.", idCategoria: 6, precio: 2.5},
      {name: "Jarra Jamaica Mediana", alias:"J. Jamaica M.", idCategoria: 6, precio: 3},
      {name: "Jarra Jamaica Grande", alias:"J. Jamaica G.", idCategoria: 6, precio: 5},
      {name: "Cerveza", idCategoria: 6, precio: 2},
      {name: "Michelada", idCategoria: 6, precio: 3},
      {name: "Tequila", idCategoria: 6, precio: 3},
      {name: "Agua", idCategoria: 6, precio: 1},
      ]
  }
}
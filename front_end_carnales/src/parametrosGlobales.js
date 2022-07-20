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
      {id: 9, nombre: "Tortilla Trigo Pequeña"}
    ],
    productos : [
      {name:'Taco Pollo Asado', variedad: "Pollo Asado", idCategoria: 1, precio: 1, ingredientes:[{idIngrediente:1, eliminable:true, cant:"25", unidades:unidades.gramos}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Carne Asada', variedad: "Carne Asada", idCategoria: 1, precio: 1, ingredientes:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Carne Guisada', variedad: "Carne Guisada", idCategoria: 1, precio: 1, ingredientes:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Al Pastor', variedad: "Al Pastor", idCategoria: 1, precio: 1, ingredientes:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}, {idIngrediente:3, eliminable:true}]},
      {name:'Taco Cerdo Asado Picante', variedad: "Cerdo Asado Picante", idCategoria: 1, precio: 1, ingredientes:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Barbacoa de Res Picante', variedad: "Barbacoa de Res Picante", idCategoria: 1, precio: 1, ingredientes:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chicharron', variedad: "Chicharron", idCategoria: 1, precio: 1.5, ingredientes:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Carnitas', variedad: "Carnitas", idCategoria: 1, precio: 1.5, ingredientes:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Cabeza', variedad: "Cabeza", idCategoria: 1, precio: 1.5, ingredientes:[{idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      
      {name:'Taco Chingón Pollo Asado', variedad: "Pollo Asado", alias: "TC Pollo Asado", idCategoria: 2, precio: 1.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Carne Asada', variedad: "Carne Asada", idCategoria: 2, precio: 1.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Carne Guisada', variedad: "Carne Guisada", idCategoria: 2, precio: 1.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Al Pastor', variedad: "Al Pastor", idCategoria: 2, precio: 1.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}, {idIngrediente:3, eliminable:true}]},
      {name:'Taco Chingón Cerdo Asado Picante', variedad: "Cerdo Asado Picante", idCategoria: 2, precio: 1.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Barbacoa de Res Picante', variedad: "Barbacoa de Res Picante", idCategoria: 2, precio: 1.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Chicharron', variedad: "Chicharron", idCategoria: 2, precio: 2, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Carnitas', variedad: "Carnitas", idCategoria: 2, precio: 2, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      {name:'Taco Chingón Cabeza', variedad: "Cabeza", idCategoria: 2, precio: 2, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:5, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:9, eliminable:false}]},
      
      {name:'Burrito Pollo Asado', variedad: "Pollo Asado", idCategoria: 3, precio: 2.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Carne Asada', variedad: "Carne Asada", idCategoria: 3, precio: 2.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Carne Guisada', variedad: "Carne Guisada", idCategoria: 3, precio: 2.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Al Pastor', variedad: "Al Pastor", idCategoria: 3, precio: 2.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false}, {idIngrediente:3, eliminable:true} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Cerdo Asado Picante', variedad: "Cerdo Asado Picante", idCategoria: 3, precio: 2.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Barbacoa de Res Picante', variedad: "Barbacoa de Res Picante", idCategoria: 3, precio: 2.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Chicharron', variedad: "Chicharron", idCategoria: 3, precio: 3, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false}, {idIngrediente:3, eliminable:true} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Carnitas', variedad: "Carnitas", idCategoria: 3, precio: 3, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      {name:'Burrito Cabeza', variedad: "Cabeza", idCategoria: 3, precio: 3, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ], opciones:[{nombre: opciones.dividido, default: false}]},
      
      {name:'Quesadilla Pollo Asado', variedad: "Pollo Asado", idCategoria: 4, precio: 3, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Carne Asada', variedad: "Carne Asada", idCategoria: 4, precio: 3, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Carne Guisada', variedad: "Carne Guisada", idCategoria: 4, precio: 3, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Al Pastor', variedad: "Al Pastor", idCategoria: 4, precio: 3, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false}, {idIngrediente:3, eliminable:true} ]},
      {name:'Quesadilla Cerdo Asado Picante', variedad: "Cerdo Asado Picante", idCategoria: 4, precio: 3, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Barbacoa de Res Picante', variedad: "Barbacoa de Res Picante", idCategoria: 4, precio: 3, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Chicharron', variedad: "Chicharron", idCategoria: 4, precio: 3.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Carnitas', variedad: "Carnitas", idCategoria: 4, precio: 3.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},
      {name:'Quesadilla Cabeza', variedad: "Cabeza", idCategoria: 4, precio: 3.5, ingredientes:[ {idIngrediente:1, eliminable:true}, {idIngrediente:2, eliminable:true}, {idIngrediente:4, eliminable:true}, {idIngrediente:6, eliminable:true}, {idIngrediente:7, eliminable:true}, {idIngrediente:8, eliminable:false} ]},

      {name:'Tortillas artesanales', idCategoria: 5, precio: 1},
      {name: "Cola", idCategoria: 6, precio: 0.5},
      {name: "Horchata", idCategoria: 6, precio: 0.5},
      {name: "Cerveza", idCategoria: 6, precio: 2}
      ]
  }
}
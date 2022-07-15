
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
      {id:1, nombre: "Aguacate"},
      {id:2, nombre: "Cebolla"},
      {id:3, nombre: "Piña"},
      {id:4, nombre: "Frejol"},
      {id:5, nombre: "Queso"},
      {id:6, nombre: "Ensalada"},
      {id:7, nombre: "Arroz"},
    ],
    opciones :[
      {id:1, nombre:"Dividido"}
    ],
    productos : [
      {name:'Taco Pollo Asado', alias: "Pollo Asado", idCategoria: 1, precio: 1, eliminables:[1, 7]},
      {name:'Taco Carne Asada', alias: "Carne Asada", idCategoria: 1, precio: 1, eliminables:[1, 7]},
      {name:'Taco Carne Guisada', alias: "Carne Guisada", idCategoria: 1, precio: 1, eliminables:[1, 7]},
      {name:'Taco Al Pastor', alias: "Al Pastor", idCategoria: 1, precio: 1, eliminables:[1, 7, 3]},
      {name:'Taco Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 1, precio: 1, eliminables:[1, 7]},
      {name:'Taco Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 1, precio: 1, eliminables:[1, 7]},
      {name:'Taco Chicharron', alias: "Chicharron", idCategoria: 1, precio: 1.5, eliminables:[1, 7]},
      {name:'Taco Carnitas', alias: "Carnitas", idCategoria: 1, precio: 1.5, eliminables:[1, 7]},
      {name:'Taco Cabeza', alias: "Cabeza", idCategoria: 1, precio: 1.5, eliminables:[1, 7]},
      
      {name:'Taco Chingón Pollo Asado', alias: "Pollo Asado", idCategoria: 2, precio: 1.5, eliminables:[ 4, 5, 6, 7, 1, 7]},
      {name:'Taco Chingón Carne Asada', alias: "Carne Asada", idCategoria: 2, precio: 1.5, eliminables:[ 4, 5, 6, 7, 1, 7]},
      {name:'Taco Chingón Carne Guisada', alias: "Carne Guisada", idCategoria: 2, precio: 1.5, eliminables:[ 4, 5, 6, 7, 1, 7]},
      {name:'Taco Chingón Al Pastor', alias: "Al Pastor", idCategoria: 2, precio: 1.5, eliminables:[ 4, 5, 6, 7, 1, 7,  3]},
      {name:'Taco Chingón Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 2, precio: 1.5, eliminables:[ 4, 5, 6, 7, 1, 7]},
      {name:'Taco Chingón Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 2, precio: 1.5, eliminables:[ 4, 5, 6, 7, 1, 7]},
      {name:'Taco Chingón Chicharron', alias: "Chicharron", idCategoria: 2, precio: 2, eliminables:[ 4, 5, 6, 7, 1, 7]},
      {name:'Taco Chingón Carnitas', alias: "Carnitas", idCategoria: 2, precio: 2, eliminables:[ 4, 5, 6, 7, 1, 7]},
      {name:'Taco Chingón Cabeza', alias: "Cabeza", idCategoria: 2, precio: 2, eliminables:[ 4, 5, 6, 7, 1, 7]},
      
      {name:'Burrito Pollo Asado', alias: "Pollo Asado", idCategoria: 3, precio: 2.5, eliminables:[ 4, 6, 7, 1, 7], opciones:[1]},
      {name:'Burrito Carne Asada', alias: "Carne Asada", idCategoria: 3, precio: 2.5, eliminables:[ 4, 6, 7, 1, 7], opciones:[1]},
      {name:'Burrito Carne Guisada', alias: "Carne Guisada", idCategoria: 3, precio: 2.5, eliminables:[ 4, 6, 7, 1, 7], opciones:[1]},
      {name:'Burrito Al Pastor', alias: "Al Pastor", idCategoria: 3, precio: 2.5, eliminables:[ 4, 6, 7, 1, 7, 3], opciones:[1]},
      {name:'Burrito Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 3, precio: 2.5, eliminables:[ 4, 6, 7, 1, 7], opciones:[1]},
      {name:'Burrito Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 3, precio: 2.5, eliminables:[ 4, 6, 7, 1, 7], opciones:[1]},
      {name:'Burrito Chicharron', alias: "Chicharron", idCategoria: 3, precio: 3, eliminables:[ 4, 6, 7, 1, 7, 3], opciones:[1]},
      {name:'Burrito Carnitas', alias: "Carnitas", idCategoria: 3, precio: 3, eliminables:[ 4, 6, 7, 1, 7], opciones:[1]},
      {name:'Burrito Cabeza', alias: "Cabeza", idCategoria: 3, precio: 3, eliminables:[ 4, 6, 7, 1, 7], opciones:[1]},
      
      {name:'Quesadilla Pollo Asado', alias: "Carne Asada", idCategoria: 4, precio: 3, eliminables:[ 4, 6, 7, 1, 7]},
      {name:'Quesadilla Carne Asada', alias: "Carne Asada", idCategoria: 4, precio: 3, eliminables:[ 4, 6, 7, 1, 7]},
      {name:'Quesadilla Carne Guisada', alias: "Carne Asada", idCategoria: 4, precio: 3, eliminables:[ 4, 6, 7, 1, 7]},
      {name:'Quesadilla Al Pastor', alias: "Al Pastor", idCategoria: 4, precio: 3, eliminables:[ 4, 6, 7, 1, 7, 3]},
      {name:'Quesadilla Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 4, precio: 3, eliminables:[ 4, 6, 7, 1, 7]},
      {name:'Quesadilla Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 4, precio: 3, eliminables:[ 4, 6, 7, 1, 7]},
      {name:'Quesadilla Chicharron', alias: "Chicharron", idCategoria: 4, precio: 3.5, eliminables:[ 4, 6, 7, 1, 7, 3]},
      {name:'Quesadilla Carnitas', alias: "Carnitas", idCategoria: 4, precio: 3.5, eliminables:[ 4, 6, 7, 1, 7]},
      {name:'Quesadilla Cabeza', alias: "Cabeza", idCategoria: 4, precio: 3.5, eliminables:[ 4, 6, 7, 1, 7]},

      {name:'Tortillas artesanales', idCategoria: 5, precio: 1},
      {name: "Cola", idCategoria: 6, precio: 0.5},
      {name: "Horchata", idCategoria: 6, precio: 0.5},
      {name: "Cerveza", idCategoria: 6, precio: 2}
      ]
  }
}
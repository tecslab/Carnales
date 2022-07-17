
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
      productos : [
        {name:'Taco Pollo Asado', variedad: "Pollo Asado", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
        {name:'Taco Carne Asada', variedad: "Carne Asada", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
        {name:'Taco Carne Guisada', variedad: "Carne Guisada", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
        {name:'Taco Al Pastor', variedad: "Al Pastor", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla','Piña']},
        {name:'Taco Cerdo Asado Picante', variedad: "Cerdo Asado Picante", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
        {name:'Taco Barbacoa de Res Picante', variedad: "Barbacoa de Res Picante", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
        {name:'Taco Chicharron', variedad: "Chicharron", idCategoria: 1, precio: 1.5, eliminables:['Aguacate','Cebolla']},
        {name:'Taco Carnitas', variedad: "Carnitas", idCategoria: 1, precio: 1.5, eliminables:['Aguacate','Cebolla']},
        {name:'Taco Cabeza', variedad: "Cabeza", idCategoria: 1, precio: 1.5, eliminables:['Aguacate','Cebolla']},
        
        {name:'Taco Chingón Pollo Asado', variedad: "Pollo Asado", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Taco Chingón Carne Asada', variedad: "Carne Asada", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Taco Chingón Carne Guisada', variedad: "Carne Guisada", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Taco Chingón Al Pastor', variedad: "Al Pastor", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla', 'Piña']},
        {name:'Taco Chingón Cerdo Asado Picante', variedad: "Cerdo Asado Picante", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Taco Chingón Barbacoa de Res Picante', variedad: "Barbacoa de Res Picante", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Taco Chingón Chicharron', variedad: "Chicharron", idCategoria: 2, precio: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Taco Chingón Carnitas', variedad: "Carnitas", idCategoria: 2, precio: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Taco Chingón Cabeza', variedad: "Cabeza", idCategoria: 2, precio: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
        
        {name:'Burrito Pollo Asado', variedad: "Pollo Asado", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
        {name:'Burrito Carne Asada', variedad: "Carne Asada", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
        {name:'Burrito Carne Guisada', variedad: "Carne Guisada", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
        {name:'Burrito Al Pastor', variedad: "Al Pastor", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña'], agregables:['Dividido']},
        {name:'Burrito Cerdo Asado Picante', variedad: "Cerdo Asado Picante", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
        {name:'Burrito Barbacoa de Res Picante', variedad: "Barbacoa de Res Picante", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
        {name:'Burrito Chicharron', variedad: "Chicharron", idCategoria: 3, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña'], agregables:['Dividido']},
        {name:'Burrito Carnitas', variedad: "Carnitas", idCategoria: 3, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
        {name:'Burrito Cabeza', variedad: "Cabeza", idCategoria: 3, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
        
        {name:'Quesadilla Pollo Asado', variedad: "Carne Asada", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Quesadilla Carne Asada', variedad: "Carne Asada", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Quesadilla Carne Guisada', variedad: "Carne Asada", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Quesadilla Al Pastor', variedad: "Al Pastor", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña']},
        {name:'Quesadilla Cerdo Asado Picante', variedad: "Cerdo Asado Picante", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Quesadilla Barbacoa de Res Picante', variedad: "Barbacoa de Res Picante", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Quesadilla Chicharron', variedad: "Chicharron", idCategoria: 4, precio: 3.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña']},
        {name:'Quesadilla Carnitas', variedad: "Carnitas", idCategoria: 4, precio: 3.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
        {name:'Quesadilla Cabeza', variedad: "Cabeza", idCategoria: 4, precio: 3.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  
        {name:'Tortillas artesanales', idCategoria: 5, precio: 1},
        {name: "Cola", idCategoria: 6, precio: 0.5},
        {name: "Horchata", idCategoria: 6, precio: 0.5},
        {name: "Cerveza", idCategoria: 6, precio: 2}
        ]
    }
  }
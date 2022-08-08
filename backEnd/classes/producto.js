class Producto {
    //{name:'Taco Pollo Asado', variedad: "Pollo Asado", alias: "T. Pollo Asado", idCategoria: 1, precio: 1, ingredientes:[{idIngrediente:1, eliminable:true, cant:"25", unidades:unidades.gramos}, {idIngrediente:2, eliminable:true}, {idIngrediente:9, eliminable:false}]},
    constructor (name, variedad, alias, idCategoria, precio) {
      this.name = name;
      this.variedad = variedad;
      this.alias = alias;
      this.idCategoria = idCategoria,
      this.precio = precio
    }
    // Getter
    get name() {
      return this.name;
    }

    get variedad(){
      return this.variedad;
    }

    get alias(){
      return this.alias;
    }

    get idCategoria(){
      return this.idCategoria;
    }

    get precio(){
      return this.precio;
    }

    // Métodos
    getIngredientes () {
        return ""
    }

    //getIngredientes
  }
// Products data
productsData = [
{nombre:'Taco Pollo Asado', eliminables:['Aguacate','Cebolla']},
{nombre:'Taco Carne Asada', eliminables:['Aguacate','Cebolla']},
{nombre:'Taco Carne Guisada', eliminables:['Aguacate','Cebolla']},
{nombre:'Taco Al Pastor', eliminables:['Aguacate','Cebolla','Piña']},
{nombre:'Taco Cerdo Asado Picante', eliminables:['Aguacate','Cebolla']},
{nombre:'Taco Barbacoa de Res Picante', eliminables:['Aguacate','Cebolla']},
{nombre:'Taco Chicharron', eliminables:['Aguacate','Cebolla']},
{nombre:'Taco Carnitas', eliminables:['Aguacate','Cebolla']},
{nombre:'Taco Cabeza', eliminables:['Aguacate','Cebolla']},

{nombre:'Taco Chingón Pollo Asado', eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Taco Chingón Carne Asada', eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Taco Chingón Carne Guisada', eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Taco Chingón Al Pastor', eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla', 'Piña']},
{nombre:'Taco Chingón Cerdo Asado Picante', eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Taco Chingón Barbacoa de Res Picante', eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Taco Chingón Chicharron', eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Taco Chingón Carnitas', eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Taco Chingón Cabeza', eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},

{nombre:'Burrito Pollo Asado', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
{nombre:'Burrito Carne Asada', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
{nombre:'Burrito Carne Guisada', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
{nombre:'Burrito Al Pastor', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña'], agregables:['Dividido']},
{nombre:'Burrito Cerdo Asado Picante', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
{nombre:'Burrito Barbacoa de Res Picante', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
{nombre:'Burrito Chicharron', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña'], agregables:['Dividido']},
{nombre:'Burrito Carnitas', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
{nombre:'Burrito Cabeza', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},

{nombre:'Quesadilla Pollo Asado', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Quesadilla Carne Asada', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Quesadilla Carne Guisada', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Quesadilla Al Pastor', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña']},
{nombre:'Quesadilla Cerdo Asado Picante', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Quesadilla Barbacoa de Res Picante', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Quesadilla Chicharron', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña']},
{nombre:'Quesadilla Carnitas', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
{nombre:'Quesadilla Cabeza', eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']}
];

var mainDiv = document.getElementById("main");
var especialesDiv= document.getElementById("especiales");
var bebidasDiv = document.getElementById("bebidas");
var listaProductos = document.getElementById("listaProductos");
var fondo = document.getElementById('fondo');
//All the products buttons have the 'product' class
var product=document.getElementsByClassName("product");
//the tables where the products will be list
var productsTables =document.querySelectorAll('table.lista');
//navigation main menu
var grupo = document.querySelector('nav ul button#op1');
var clientSelector = document.getElementById("clientSelector");
var cuentasDiv = document.querySelector('div.cuentas');

// Arrays, for short
var arrayMesas = document.querySelectorAll('.btn-mesa');
var arrayClientes = document.querySelectorAll('.btn-primary.client');
var arrayCategories = document.querySelectorAll('.btn-primary.categorie');
//Divs for all variety in each categorie
var arrayVariedad = document.querySelectorAll('.container.selector');
var price=document.getElementById("price");
var realizarPedido=document.getElementById("realizarPedido");
//Initial state
//activeButton class paint of green the current selection
addClass(arrayMesas[0],'activeButton');
addClass(arrayCategories[0],'activeButton');
var activeMesa = arrayMesas[0];
var activeCat=arrayCategories[0];
var activeTable=productsTables[0];
var activeCuentaIndex=0;
var itemPrice=0;
//Each client has his own cuenta
var arrayCuentaTotal=Array();
for (let i=0;i<arrayClientes.length;i++){
	arrayCuentaTotal.push(0);
}
//pedidoJSON will contain the order to be sended
var pedidoJSON={};
var confirmarModal=document.getElementById("confirmarModal");
var dataPedido = document.getElementById("dataPedido");
var confirmarButton = document.getElementById("confirmarPedido");
var socket = io.connect('http://127.0.0.1:3000');
//var socket = io.connect('http://172.16.0.151:3000');
//Dropdown elements
const dropdownTitle = document.querySelectorAll('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

// #######################################################################
// #######################FUNCTIONS##############################
// #######################################################################

//Create items into the product list
function insertRow(index, producto, precio,data){
	//Create a new row and 4 cells
	// Each item list has an eliminate button,
	// a name of the product(categoria+variedad)
	// a details button, and a price
	var row = activeTable.insertRow(index);
	var cell1 =row.insertCell(0);
	var cell2 =row.insertCell(1);
	var cell3 =row.insertCell(2);
	var cell4 =row.insertCell(3);
	//Create and locate the table content(eliminate row button, name, details button and unit price)
	var buttonDelete = document.createElement("button");
	var node = document.createTextNode("X");
	buttonDelete.appendChild(node);

	var buttonDetails = document.createElement("button");
	var node = document.createTextNode("+");
	buttonDetails.appendChild(node);

	//insert the data in the row element creating a new attribute
	// data --> {Categoria, variedad, observacion}
	row.data={...data};	
	//get the info of the product(The product array only have products with removables)
	var  currentProduct = productsData.find(item => item.nombre==producto);
	// if the product has removable items it adds a details div
	if (currentProduct !== undefined) {
		//details form
		var detailsDiv = document.createElement("div");
		var detailsForm = document.createElement("form");
		var detailsTable = document.createElement("table");

		insertDetProd(currentProduct,detailsTable,row);

		buttonDetails.onclick = function(){
			toggleClass(detailsDiv,'hide');
			var extremoDer = Math.round(activeTable.getBoundingClientRect().x+activeTable.getBoundingClientRect().width);
			var extremoTop = Math.round(listaProductos.getBoundingClientRect().y+20);
			detailsDiv.setAttribute("style","left:" + extremoDer +"px; top:" + extremoTop +"px;");
			fondo.setAttribute('style','display:block');

			fondo.onclick = function(event) {
				fondo.setAttribute('style','display:none');
				toggleClass(detailsDiv,'hide');
			}
		}

		detailsDiv.setAttribute("class", "popDiv hide");
		detailsForm.setAttribute("action","/");
		detailsTable.setAttribute("class","detailsTable");

		cell3.insertAdjacentElement("afterbegin", detailsDiv);
		detailsDiv.insertAdjacentElement("afterbegin",detailsForm);
		detailsForm.insertAdjacentElement("afterbegin",detailsTable);
		cell3.insertAdjacentElement("afterbegin", buttonDetails);
	}

	//Cells data
	cell2.innerHTML = producto;
	cell4.innerHTML = '$'+precio;

	//Set styles and properties
	buttonDelete.setAttribute("class", "btn btn-danger visto eliminar");
	buttonDetails.setAttribute("class", "btn btn-primary visto");
	cell1.setAttribute("class", "hide-border");
	cell2.setAttribute("class", "hide-border");
	cell3.setAttribute("class", "hide-border");
	cell4.setAttribute("class", "hide-border");

	//Delete button function
	buttonDelete.onclick = function(){
		row.remove();
		arrayCuentaTotal[activeCuentaIndex]=arrayCuentaTotal[activeCuentaIndex]-precio;
		//price.textContent=arrayCuentaTotal[activeCuentaIndex];
		setPrice();
	}
	// Alocating cell content
	cell1.insertAdjacentElement("afterbegin", buttonDelete);
	cell2.innerHTML = producto;
	cell4.innerHTML = precio;	
}



//Insert a row in the details div with the ingredients
// that can be deleted
function insertDetProd(product, table, row){
	var removables = product.eliminables;
	var agregables = product.agregables;
	var checkbox=[];
	if (removables!==undefined){
		for (let i in removables){
			var rowRem = table.insertRow(-1);
			var cell1 =rowRem.insertCell(0);
			var cell2 =rowRem.insertCell(1);
			checkbox=document.createElement("input");
			checkbox.setAttribute("type","checkbox");
			checkbox.setAttribute("class","bigCheck");
			checkbox.setAttribute("checked","checked");

			cell1.insertAdjacentElement('afterbegin',checkbox);
			cell2.innerHTML = removables[i];
			table.insertAdjacentElement('afterbegin',rowRem);
			checkbox.onclick=function(e){
			 	if (e.target.checked===true){
			 		// if is true, then remove the observation
			 		delete row.data.Observacion[removables[i]]
			 	}else{
			 		row.data.Observacion[removables[i]]=false;
			 	}
			}
		}
	}
	if (agregables!==undefined){
		for (let i in agregables){
			var rowAdd = table.insertRow(-1);
			var cell1 =rowAdd.insertCell(0);
			var cell2 =rowAdd.insertCell(1);
			checkbox=document.createElement("input");
			checkbox.setAttribute("type","checkbox");
			checkbox.setAttribute("class","bigCheck");
			cell1.insertAdjacentElement('afterbegin',checkbox);
			cell2.innerHTML = agregables[i];
			table.insertAdjacentElement('beforeend',rowAdd);
			checkbox.onclick=function(e){
			 	if (e.target.checked===true){
			 		// if is true, then remove the observation
			 		row.data.Observacion[agregables[i]]=true;
			 	}else{
			 		delete row.data.Observacion[agregables[i]]
			 	}
			}
		}
	}	
}

// Create a summary for the order over the modal
function crearPedido(pedido){
	// To eliminate previous madals created
	if (document.getElementById('cardResumen')!=null){
		document.getElementById('cardResumen').remove();
	}
	var clientes = pedido.clientes;
	var mesaPedido = pedido.mesa;	
	//Mejorar

	//columna donde se localiza la tarjeta
	var cardCol = document.createElement("div");
	//Contenedor de la tarjeta
	var card = document.createElement("div");
	//Cabecera
	var cardHeader = document.createElement("div");
	//Mesa
	var mesa = document.createElement("p");
	var strongMesa = document.createElement("strong");

	if (mesaPedido=='ventana'){
		var nodeMesa = document.createTextNode("Ventana");
	}else{
		var nodeMesa = document.createTextNode("Mesa "+mesaPedido[4]);
	}
	strongMesa.appendChild(nodeMesa);
	//List of items
	//var itemsList = document.createElement("ul");
	// Styling with classes and style
	cardCol.setAttribute("class", "col-12 card-col");
	cardCol.setAttribute("id", "cardResumen");//
	card.setAttribute("class", "card rounded border-dark card-pedido");
	cardHeader.setAttribute("class", "card-header p-1");
	cardHeader.setAttribute("style","background-color:green;");
	mesa.setAttribute("class", "m-0 text-center");
	
	//Alocatig all new components
	confirmarModal.insertAdjacentElement("beforeend", cardCol);
	cardCol.insertAdjacentElement("afterbegin", card);
	card.insertAdjacentElement("afterbegin", cardHeader);
	cardHeader.insertAdjacentElement('beforeend',mesa);
	mesa.insertAdjacentElement('afterbegin',strongMesa);
	//card.insertAdjacentElement('beforeend', itemsList);


	// Add the items
	for (let cli in clientes){
		var divCliente=document.createElement('div');
		var itemsList =document.createElement("ul");

		divCliente.setAttribute("class", "cliente");
		itemsList.setAttribute("class", "list-group list-group-flush");

		divCliente.insertAdjacentElement("afterbegin", itemsList);
		card.insertAdjacentElement("beforeend", divCliente);

		if (cuentasCheckbox.checked==true){
			var cuentaCli = document.createElement('h4');
			cuentaCli.textContent='$'+ clientes[cli].cuenta;
			cuentaCli.setAttribute("style", "margin:0px;");
			cuentaCli.setAttribute("class", "text-center");
			divCliente.insertAdjacentElement("beforeend", cuentaCli);
		}

		for (let i=0; i<clientes[cli].productos.length;i++){
			//console.log(clientes[cli].productos[i]);
			agregarItems(clientes[cli].productos[i],itemsList);
		}
	}
	if (cuentasCheckbox.checked==false){
		var cuentaTot = document.createElement('h2');
		cuentaTot.textContent='$'+ pedido.total;
		cuentaTot.setAttribute("style", "margin:0px;");
		cuentaTot.setAttribute("class", "text-center");
		card.insertAdjacentElement("beforeend", cuentaTot);
	}
}

// Add an item to the list on the product summary
function agregarItems(producto, list){
	var categoria = producto.Categoria;
	var variedad = producto.Variedad;
	var cantidad = producto.Cantidad;
	var observacion = producto.Observacion;

	//Creation of the item
	var listItem = document.createElement("li");
	var pProduct = document.createElement("p");
	var pProductNode =document.createTextNode(categoria+" "+variedad);
	pProduct.appendChild(pProductNode);
	var spanCantidad = document.createElement("span");
	var cantidadNode =document.createTextNode("x"+cantidad);
	spanCantidad.appendChild(cantidadNode);
	
	listItem.setAttribute("class", "list-group-item");
	listItem.setAttribute("style", "margin: 0px; padding:1px");
	pProduct.setAttribute("class", "mx-1");
	pProduct.setAttribute("style", "margin-bottom:5px");
	spanCantidad.setAttribute("class","badge badge-pill badge-warning");

	//Alocation of the items
	list.insertAdjacentElement('beforeend',listItem);
	listItem.insertAdjacentElement('afterbegin', pProduct);
	pProduct.insertAdjacentElement('beforeend', spanCantidad);

	// if there are observations
	if (observacion!=""){		
		var saltoLinea = document.createElement("br");
		var detalle = document.createElement("span");
		var detalleNode = document.createTextNode(observacion.substr(0,observacion.length-2));
		detalle.appendChild(detalleNode);
		detalle.setAttribute("class", "my-0 mx-4");
		detalle.setAttribute("style", "color:red");
		pProduct.insertAdjacentElement('beforeend',saltoLinea);
		pProduct.insertAdjacentElement('beforeend',detalle);
	}
}

// delete a product on the product list
function deleteRow(index) {
  activeTable.deleteRow(index);
}
// toggle a class of an element
function toggleClass(elem,className){
  if (elem.className.indexOf(className) !== -1){
  	//if it exist
    elem.className = elem.className.replace(className,'');
  }
  else{
    elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
  }
  return elem;
}

function addClass(elem,className){
  if (elem.className.indexOf(className) == -1){
    elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
  }
  return elem;
}

function removeClass(elem,className){
  if (elem.className.indexOf(className) !== -1){
    elem.className = elem.className.replace(className,'');
  }
  return elem;
}

function toggleMenuDisplay(e){
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector('.menu');
//makes the menu visible/hidden
  toggleClass(menu,'hide');
}

var cuentasCheckbox = document.getElementById('cuentasCheckbox');

function setPrice(){
	if (cuentasCheckbox.checked==true){
		price.textContent=arrayCuentaTotal[activeCuentaIndex];
	}else{
		var total=0;
		for (let i=0;i<arrayCuentaTotal.length;i++){
			total=total+arrayCuentaTotal[i];
		}
		price.textContent=total;
	}
}

cuentasCheckbox.onclick=function(e){
 	setPrice();
}

var mainMenuCheck = document.getElementById('optionMenu');
var fondoButton = document.getElementById('fondoInput');

fondoInput.onclick=function(e){
	mainMenuCheck.checked=false;
}

grupo.onclick=function(){
	toggleClass(clientSelector,'hide');
	toggleClass(cuentasDiv,'hide');
}

// #######################################################################
// #######################################################################
// #######################################################################

//Funtions of the buttons of Mesa, categoria, and clientes
let paintActiveButton = (buttonsArray, activeFlag) => {
	for (let i=0;i<buttonsArray.length;i++){
		buttonsArray[i].onclick=function(){
			buttonsArray.forEach(item => removeClass(item, 'activeButton'));
			addClass(buttonsArray[i],'activeButton');
			if (activeFlag=='mesa'){
				activeMesa=buttonsArray[i];
			}else if (activeFlag=='cliente'){
				activeClient=buttonsArray[i];
				activeTable=productsTables[i];
				activeCuentaIndex=i;
				//price.textContent=arrayCuentaTotal[activeCuentaIndex];
				setPrice();
				productsTables.forEach(item => addClass(item.parentElement, 'hide'));
				removeClass(productsTables[i].parentElement,'hide');

			}else if(activeFlag=='categoria'){
				activeCat=buttonsArray[i];
				if(buttonsArray[i].textContent=="Especiales"){
					arrayVariedad.forEach(item => addClass(item, 'hide'));
					removeClass(arrayVariedad[1],'hide');
				}else if (arrayCategories[i].textContent=="Bebidas"){
					arrayVariedad.forEach(item => addClass(item, 'hide'));
					removeClass(arrayVariedad[2],'hide');
				}else{
					arrayVariedad.forEach(item => addClass(item, 'hide'));
					removeClass(arrayVariedad[0],'hide');
				}
			}
		}
	}
}

var activeClient=arrayClientes[0];
addClass(arrayClientes[0],'activeButton');
paintActiveButton(arrayClientes,'cliente');
paintActiveButton(arrayMesas,'mesa');
paintActiveButton(arrayCategories,'categoria');

//Click function on any product to add this to the summary
for (let i in product){
	product[i].onclick= function(){
		//var contador=0;
		itemPrice=product[i].value-activeCat.value;
		itemName=activeCat.textContent+' '+product[i].textContent
		var data={Categoria:activeCat.textContent,Variedad:product[i].textContent};
		//var data={Categoria:activeCat.textContent,Variedad:product[i].textContent,Observacion:new Object};
		//Number of products selected in the dropdown
		var dropNumber=dropdownTitle[i].innerHTML.slice(0,dropdownTitle[i].innerHTML.indexOf(' '));
		for (let i=0;i<dropNumber;i++){
			data.Observacion=new Object;
			insertRow(-1,itemName,itemPrice,{...data});
			//Set the current total price on Total section
			arrayCuentaTotal[activeCuentaIndex]=arrayCuentaTotal[activeCuentaIndex]+itemPrice;
			//price.textContent=arrayCuentaTotal[activeCuentaIndex];
			setPrice();
		}		
	}
}

//When clic in this button a modal will appear with a summary of the products
//Also, the order JSON is packaged here
realizarPedido.onclick = function(){
	var clientes=[];
	//iteration over table rows
	// Agrupa los productos iguales y coloca su cantidad
	var cuentaTotal=0;
	for (let h=0;h<productsTables.length;h++){
		if (productsTables[h].rows.length>0){
			var cliente = {};
			cliente.nombre='Cliente'+h;
			cliente.cuenta=arrayCuentaTotal[h];
			cuentaTotal=cuentaTotal+arrayCuentaTotal[h];
			var products=[];

			for (let i=0;i<productsTables[h].rows.length;i++){
				var productData = productsTables[h].rows[i].data;
				//Formamos el campo Porductos del JSON a ser enviado
				// Data is saved on row.data
				// data={Categoria, Variedad, Observacion:{Cebolla:true}}
				if (i>0){
					for (let j=0;j<products.length;j++){
						var productComp = {...products[j]};
						delete productComp.Cantidad;
						if (_.isEqual(productComp, productData)==true){
							// Si está repetido le suma 1 a la cantidad
							products[j].Cantidad++;
							// console.log(products[j].Cantidad);
							break;
						}else if(j==products.length-1){
							// Si es un producto nuevo crea ese producto
							//console.log(productComp);
							//console.log(productData);
							productData.Cantidad=1;
							products.push({...productData});
							break;
						}
					}
				}else{
					productData.Cantidad=1;
					products.push({...productData});
				}
			}

			for (let j=0;j<products.length;j++){
				var observacion=products[j].Observacion;
				var observaciones= "";
				if (_.isEqual(observacion,{})==false){					
					for (const key in observacion) {
						if (observacion[key]==true){
							observaciones=observaciones + `${key}` + ", ";
						}else{
							observaciones=observaciones + 'Sin ' + `${key}` + ", ";
						}
					}
				}
				products[j].Observacion=observaciones;
			}
			cliente.productos=products;
			clientes.push({...cliente});
		}
		
	}

	//Armamos el JSON del pedido
	//pedidoJSON.Productos=products;
	pedidoJSON.clientes=clientes;
	pedidoJSON.mesa=activeMesa.id;
	if (cuentasCheckbox.checked==true){
		pedidoJSON.separarCuentas=true;
	}

	//Deberia ser el id de PoS
	//pedidoJSON.NumeroPedido="";
	//POS ID =
	pedidoJSON.total = cuentaTotal;
	//console.log(pedidoJSON);
	crearPedido(pedidoJSON);
	//Insertamos los productos en el modal
}

confirmarButton.onclick = function(){
	//Set the form data to be sent
	//This is manage in the router and saved on the database
	dataPedido.value=JSON.stringify(pedidoJSON);
	console.log(pedidoJSON);
	fetch('/api/newPedidos', {
		method: 'POST', 
		body: JSON.stringify(pedidoJSON),
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		}
	  });
	//Send the data to the server socket. Then is sent to the KDS
	//socket.emit('nuevoPedido',{pedido:pedidoJSON});
}

// #################################### //
// Dropdown menu
function handleOptionSelected(e){
  toggleClass(e.target.parentNode, 'hide');
  const newValue = e.target.textContent + ' ▼';
  //const titleElem = document.querySelector('.dropdown .title');
  const dropdown = e.currentTarget.parentNode.parentNode;
  const titleElem = dropdown.querySelector('.dropdown .title');
  titleElem.textContent = newValue;

  //trigger custom event
  //document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
    //setTimeout is used so transition is properly shown
  //setTimeout(() => toggleClass(icon,'rotate-90',0));
}
//bind listeners to these elements
dropdownTitle.forEach(title => title.addEventListener('click', toggleMenuDisplay));
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));

//agregar al pedido
//Señalar un pedido para llevar extra
// mixtos
// Menu de dias especiales
// Agregar sabor de cola
// seguimiento de converisones
// a que hora hacen pedidos cada persona?
// borde de pedidos en rojos o tomate
// timbre en pedidos pendientes
// La gente de las mesas aveces agregan pedidos para llevar
// Eliminar bebidas del KDS
// Manejar ACK's (Hacer pruebas)
// Tomar Nombre
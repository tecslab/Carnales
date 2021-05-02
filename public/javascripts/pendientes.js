var pendientesCanvas = document.getElementById('pendientes-canvas');
var socket = io.connect('http://127.0.0.1:3000');
// Extract the current Orders from the p element
var pedidos = JSON.parse(document.getElementById("pedidosString").attributes.value.value);
//var socket = io.connect('http://172.16.0.151:3000');
// serverDate and pedidos are defined in the html


function crearPedido(pedido,type){
	var clientes = pedido.clientes;
	var numPedido = pedido.numPedido;
	var mesaPedido = pedido.mesa;
	var pedidoTime = new Date (pedido.fecha);
	//columna donde se localiza la tarjeta
	var cardCol = document.createElement("div");
	//Contenedor de la tarjeta
	var card = document.createElement("div");
	//Cabecera
	var cardHeader = document.createElement("div");
	//numero de pedido a la izquierda de la cabecera
	var numPedidoDom = document.createElement("span");
	var strongNumPedido = document.createElement("strong");
	var nodeStronNP = document.createTextNode('#'+numPedido);
	strongNumPedido.appendChild(nodeStronNP);
	//Cronometro del pedido en minutos:segundos
	var crono = document.createElement("span");
	var nodeCrono = document.createTextNode("");
	crono.appendChild(nodeCrono);
	//Mesa
	var mesa = document.createElement("p");
	var strongMesa = document.createElement("strong");
	if (mesaPedido=='ventana'){
		var nodeMesa = document.createTextNode("Ventana");
	}else{
		var nodeMesa = document.createTextNode("Mesa "+mesaPedido[4]);
	}
	strongMesa.appendChild(nodeMesa);
	strongMesa.appendChild(nodeMesa);
	//List of items
	//var itemsList = document.createElement("ul");

	// Button
	var cardFooter = document.createElement("div");
	var checkButton = document.createElement("button");
	var checkNode = document.createTextNode("Listo ✔");
	checkButton.appendChild(checkNode);

	// Styling with classes and style
	cardCol.setAttribute("class", "col-6 col-sm-4 col-lg-2 card-col");
	cardCol.setAttribute("id", numPedido);
	card.setAttribute("class", "card rounded border-dark");
	cardHeader.setAttribute("class", "card-header p-1");
	cardHeader.setAttribute("style","background-color:green;");
	numPedidoDom.setAttribute("class", "m-0");
	numPedidoDom.setAttribute("style", "font-size:18px;");
	crono.setAttribute("class", "time");
	crono.setAttribute("style","color:white; margin-left:25%");
	//crono.setAttribute("id","cronometro");
	
	mesa.setAttribute("class", "m-0 text-center");
	//itemsList.setAttribute("class", "list-group list-group-flush");

	cardFooter.setAttribute("class", "card-footer");
	checkButton.setAttribute("class", "btn btn-success w-100 listo");

	//Function to remove the card
	checkButton.onclick = function(){
		removeCard(cardCol);
	}

	//Alocatig all new components
	pendientesCanvas.insertAdjacentElement("beforeend", cardCol);
	cardCol.insertAdjacentElement("afterbegin", card);
	card.insertAdjacentElement("afterbegin", cardHeader);
	cardHeader.insertAdjacentElement('afterbegin',numPedidoDom);
	numPedidoDom.insertAdjacentElement('afterbegin',strongNumPedido);
	cardHeader.insertAdjacentElement('beforeend',crono);
	cardHeader.insertAdjacentElement('beforeend',mesa);
	mesa.insertAdjacentElement('afterbegin',strongMesa);
	
	// To create a different div for each client
	for (let cli in clientes){
		var divCliente=document.createElement('div');
		var itemsList =document.createElement("ul");

		divCliente.setAttribute("class", "cliente");
		itemsList.setAttribute("class", "list-group list-group-flush");

		divCliente.insertAdjacentElement("afterbegin", itemsList);
		card.insertAdjacentElement("beforeend", divCliente);

		
		for (let i=0; i<clientes[cli].productos.length;i++){
			//console.log(clientes[cli].productos[i]);
			agregarItems(clientes[cli].productos[i],itemsList);
		}
	}


	card.insertAdjacentElement('beforeend',cardFooter);
	cardFooter.insertAdjacentElement('beforeend',checkButton);

	var currentTime = new Date().getTime();
	// There are two types of new orders, charged and new
	if (type=='charged'){
		var distance = serverDate - pedidoTime.getTime();
	}else{
		var distance = 0;
	}
	
	setInterval(function(){	
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);    
  	// Output the result in an element with id="demo"
		crono.textContent = minutes + "m " + seconds + "s ";
			
		if (distance>=60000){
			cardHeader.style.backgroundColor ="red";
		}else if (distance>=30000){
			cardHeader.style.backgroundColor ="yellow";
		}
		distance=distance+1000;
	},1000);
}


function agregarItems(producto, list){
	console.log(producto);
	var categoria = producto.Categoria;
	var variedad = producto.Variedad;
	var cantidad = producto.Cantidad;
	var observacion = producto.Observacion;
	//console.log(observacion);
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

	if (observacion!=""){
		var saltoLinea = document.createElement("br");
		var detalle = document.createElement("span");
		var detalleNode = document.createTextNode(observacion.substr(0,observacion.length));
		detalle.appendChild(detalleNode);
		detalle.setAttribute("class", "my-0 mx-4");
		detalle.setAttribute("style", "color:red");
		pProduct.insertAdjacentElement('beforeend',saltoLinea);
		pProduct.insertAdjacentElement('beforeend',detalle);
	}
}


// Delete an order card and send a signal to delete it in the server and other twin pages
function removeCard(Card){
	socket.emit('eliminarPedido',{numPedido:Card.id});
	Card.remove();
}


// ************************************************************
// To charge the current orders
for (let i in pedidos){
	crearPedido(pedidos[i],'charged');
}



// Listen to new incoming orders
socket.on('pedidoEntrante', function(data){
	console.log('Eureka');
	crearPedido(data.pedido,'new');
});

// Listen to a delete order signal
socket.on('eliminarPedido', function(data){
	//console.log('llegó');
	var currentCards = document.getElementsByClassName('card-col');
	for (let i in currentCards){
		if (data.numPedido==currentCards[i].id){
			currentCards[i].remove();
			break;
		}
	}
});

socket.on('actualizarPedido', (data)=>{
	var currentCards = document.getElementsByClassName('card-col');
	for (let i in currentCards){
		if (data.pedido.numPedido==currentCards[i].id){
			currentCards[i].remove();
			break;
		}
	}
	crearPedido(data.pedido,'new');
});
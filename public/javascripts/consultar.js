var subtotales = document.getElementsByClassName('subtotal');
var subtotalesPedidos = document.getElementsByClassName('subtotalPedidos');
var totalDom = document.getElementById('total');
var totalPedidosDom= document.getElementById('totalPedidos');
var total = 0;
var totalPedidos=0;

for (let i=0; i<subtotales.length; i++) {
	total += Number(subtotales[i].textContent);
	totalPedidos += Number(subtotalesPedidos[i].textContent);
	console.log(i);
	console.log(subtotales[i].textContent);
}


totalDom.textContent ='$'+total;
totalPedidosDom.textContent =totalPedidos;
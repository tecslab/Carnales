var pos1 = document.querySelector('#pos1');
var pos2 = document.querySelector('#pos2');
var pos3 = document.querySelector('#pos3');
var idPos = document.querySelector('#idPos');


//idPos es el id del elemento hidden, cuyo valor se envía al servidor
// modificando esto podemos hacer una identificación

pos1.onclick = function(){
	idPos.value="Punto de venta 1";
}

pos2.onclick = function(){
	idPos.value="Punto de venta 2";
}

pos3.onclick = function(){
	idPos.value="Punto de venta 3";
}


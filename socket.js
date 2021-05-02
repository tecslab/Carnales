var numPedido = 1;
var socketio = require('socket.io');

//.listen(server);
function initSocket(server){
    var io = socketio(server);

    io.sockets.on('connection', function(socket){
        console.log('Kitchen connected');
      
        socket.on('nuevoPedido',function(data){
          console.log('pedido recibido');
          //console.log(data.pedido); 
          data.pedido.numPedido = numPedido;
          data.pedido.fecha=new Date();
          globalOrders.push({...data.pedido});
          globalCuentas.push({...data.pedido});
      
          numPedido++;
          socket.broadcast.emit('pedidoEntrante', {pedido:data.pedido});
        });
      
      
        socket.on('eliminarPedido',function(data){
          //data.numPedido
          socket.broadcast.emit('eliminarPedido',{numPedido:data.numPedido});
          //var  currentCard = globalOrders.find(pedido => pedido.NumeroPedido==data.numPedido);
          globalOrders = globalOrders.filter( pedido => pedido.numPedido!=data.numPedido );
          //console.log(currentCard);
          //console.log(globalOrders);
        });
      
        socket.on('eliminarCuenta',function(data){
          socket.broadcast.emit('eliminarCuenta',{numPedido:data.numPedido});
          //var  currentCard = globalOrders.find(pedido => pedido.NumeroPedido==data.numPedido);
          globalCuentas = globalCuentas.filter( pedido => pedido.numPedido!=data.numPedido );
        });
      
      
      });

    return io;
}

module.exports = initSocket;
//This API is for receive all new orders and store it on memory
//!!!!!!!!!!!! IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!
// It is needed to calculate the total price on the backend
const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');
var numPedido = 0;

function initRouter(socket) {
    
    router.get('/', async (req, res)=>{
        res.json(globalOrders);
    });
    
    router.get('/mesa/:idMesa', async (req, res)=>{
        const mesa = req.params.idMesa;
        mesaOrders = globalOrders.filter( pedido => pedido.mesa==mesa);
        res.json(mesaOrders);
    });
    
    router.post('/', async(req,res)=>{
        console.log('que putas');
        // the mesage has the following structure:
        /* pedidoJSON={
            clientes:[{
                nombre:clienteNumCliente
                canasta:[{producto_id}]
            }],
            mesa:numMesa,
            total:total(This field must to be removed and calculated on backend)
        }
        
        After post the structure is the following:
        pedidoJSON={
            clientes:[{
                nombre:clienteNumCliente
                canasta:[{producto_id}]
            }],
            mesa:numMesa,
            total:total(This field must to be removed and calculated on backend),
            numeroPedido: numPedido,
            fecha: Date
        }
        */
        const pedidoJSON = req.body;
        console.log(pedidoJSON);
        pedidoJSON.numPedido = numPedido;
        pedidoJSON.fecha=new Date();
        globalOrders.push({...pedidoJSON});
        globalCuentas.push({...pedidoJSON});
        numPedido++;

        //!!!!!!!!!!!! IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!
        // It is needed to calculate the total price on the backend

        socket.emit('pedidoEntrante', {pedido:pedidoJSON});
        res.redirect(302,'/ingresarPedidos');
    });

    
    router.put('/:idPedido', async(req, res)=>{
        // The idPedido is the numeroPedido field
        const { pedidoJSON } = req.body;
        console.log(pedidoJSON);
        pedidoJSON.numPedido = req.params.idPedido;
        pedidoJSON.fecha=new Date();
        globalOrders= globalOrders.filter(pedido => pedido.numPedido!=req.params.idPedido);
        globalCuentas= globalCuentas.filter(pedido => pedido.numPedido!=req.params.idPedido);
        globalOrders.push({...pedidoJSON});
        globalCuentas.push({...pedidoJSON});
        socket.broadcast.emit('actualizarPedido', {pedido:pedidoJSON});
        res.json('Actualizado');
    });
    
    router.delete('/:idPedido', async(req, res)=>{
        globalOrders= globalOrders.filter(pedido => pedido.numPedido!=req.params.idPedido);
        globalCuentas= globalCuentas.filter(pedido => pedido.numPedido!=req.params.idPedido);
        socket.broadcast.emit('eliminarPedido', {numPedido:req.params.idPedido});
        res.json('Pedido borrado');
    });

    return router;
}

module.exports = initRouter;
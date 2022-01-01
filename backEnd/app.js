var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ingPedidosRouter = require('./routes/ingresarPedidos');
var mapaRouter = require('./routes/mapa');
var layoutRouter = require('./routes/layout');
var registroRouter = require('./routes/registro');
var pendientesRouter = require('./routes/pendientes');
var cuentasRouter = require('./routes/cuentas');
var consultarDia = require('./routes/consultarDiaRoute');
var dashboard = require('./routes/dashboard');
var inventario = require('./routes/inventario');
var registrarEgreso = require('./routes/registrarEgreso');
//Post routes
var confirmarPedido = require('./routes/confirmarPedido');
var registrarPost = require('./routes/registrar');
//API
var dashboardAPI = require('./routes/api.dashboard');
var migrar = require('./routes/api.migrar');
var pedidosAPI = require('./routes/api.pedidos');

const cors = require('cors');

var app = express();
global.globalOrders = [];
global.globalCuentas = [];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ingresarPedidos', ingPedidosRouter);
app.use('/mapa', mapaRouter);
app.use('/layout', layoutRouter);
app.use('/registro', registroRouter);
app.use('/pendientes', pendientesRouter);
app.use('/cuentas', cuentasRouter);
app.use('/consultarDia', consultarDia);
app.use('/dashboard', dashboard);
app.use('/inventario', inventario);
app.use('/registraregreso', registrarEgreso);
//Post routes
app.use('/confirmarPedido', confirmarPedido);
app.use('/registrar', registrarPost);
//API
app.use('/api/dashboard', dashboardAPI);
app.use('/api/migrar', migrar);
app.use('/api/pedidos', pedidosAPI);

// The route /api/newPedidos is defined in the /bin/www script
// because it need the io socket
// The 404 error page is also defined in the /bin/www script

module.exports = app;
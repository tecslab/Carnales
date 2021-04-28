var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {mongoose} = require('./database');

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

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ingresarPedidos', ingPedidosRouter);
app.use('/mapa', mapaRouter);
app.use('/layout', layoutRouter);
app.use('/registro', registroRouter);
app.use('/pendientes',pendientesRouter);
app.use('/cuentas',cuentasRouter);
app.use('/consultarDia', consultarDia);
app.use('/dashboard',dashboard);
app.use('/inventario',inventario);
app.use('/registraregreso',registrarEgreso);
//Post routes
app.use('/confirmarPedido',confirmarPedido);
app.use('/registrar',registrarPost);
//API
app.use('/api/dashboard',dashboardAPI);
app.use('/api/migrar',migrar);
app.use('/api/pedidos', pedidosAPI);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

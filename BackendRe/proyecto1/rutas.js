var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:camilo@localhost:5432/Relacional';
var db = pgp(connectionString);

// add query functions

module.exports = {
  // ------- usuario -------------
  getAllUsuario: getAllUsuario,
  getSingleUsuario: getSingleUsuario,
  createUsuario: createUsuario,
  updateUsuario: updateUsuario,
  removeUsuario: removeUsuario,
  // ------ proveedor ------------
  getAllProveedor: getAllProveedor,
  getSingleProveedor: getSingleProveedor,
  createProveedor: createProveedor,
  updateProveedor: updateProveedor,
  removeProveedor: removeProveedor,
  // --------- compra --------------
  getAllCompra: getAllCompra,
  getSingleCompra: getSingleCompra,
  createCompra: createCompra,
  updateCompra: updateCompra,
  removeCompra: removeCompra,
  // ----------producto--------------
  getAllProducto: getAllProducto,
  getSingleProducto: getSingleProducto,
  createProducto: createProducto,
  updateProducto: updateProducto,
  removeProducto: removeProducto,

  // ------------Venta--------------
  getAllVenta: getAllVenta,
  getSingleVenta: getSingleVenta,
  createVenta: createVenta,
  updateVenta: updateVenta,
  removeVenta: removeVenta
};


function getAllUsuario(req, res, next) {
  db.many('select * from usuario')
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
};

function getSingleUsuario(req, res, next) {
  var usuaID = req.params.identityUsu; 
  db.one('select * from usuario where identityUsu = $1', usuaID)
    .then(function (data) {
      res.status(200)
        .json({
          //status: 'success',
          data: data
          //message: 'Retrieved ONE usuario'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function createUsuario(req, res, next) {
  
  db.none("insert into usuario (identityusu, cc, nombre, rolusuario, username, userpass) values (${identityusu}, ${cc}, ${nombre}, ${rolusuario}, ${username}, ${userpass})",
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one usuario'
        });
        //res.send(req.body);
    })
    .catch(function (err) {
      return next(err);
    });
};

function updateUsuario(req, res, next) {
  
    db.none("update usuario set cc=${cc}, nombre=${nombre}, rolusuario=${rolusuario}, username=${username}, userpass=${userpass} where identityUsu='"+req.params.identityUsu+"'",req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated usuario'
        });
    })
    .catch(function (err) {
      return next(err);
     });
 
};

function removeUsuario(req, res, next) {
  var usuID = req.params.identityUsu;
  db.result('delete from usuario where identityUsu = $1', usuID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} usuario`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
};

// ************************************************************************
// ----------------------------------------- proveedor -------------------------------------------------

function getAllProveedor(req, res, next) {
  db.many('select * from proveedor')
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
};

function getSingleProveedor(req, res, next) {
  var provID = req.params.identityProv; 
  db.one('select * from proveedor where identityProv = $1', provID)
    .then(function (data) {
      res.status(200)
        .json({
          //status: 'success',
          data: data
          //message: 'Retrieved ONE usuario'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function createProveedor(req, res, next) {

  db.none("insert into proveedor (identityprov, cc, nombre, idproduc, costo) values(${identityprov}, ${cc}, ${nombre}, ${idproduc}, ${costo})", req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one proveedor'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function updateProveedor(req, res, next) { 

    db.none("update proveedor set cc=${cc}, nombre=${nombre}, idproduc=${idproduc}, costo=${costo} where identityprov='"+req.params.identityprov+"'", req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated proveedor'
        });
    })
    .catch(function (err) {
      return next(err);
     });
 
};

function removeProveedor(req, res, next) {
  var provID = req.params.identityProv;
  db.result('delete from proveedor where identityProv = $1', provID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} proveedor`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
};

// *******************************************************************
// ------------------------compra de prod ----------------------------


function getAllCompra(req, res, next) {
  db.many('select * from compradeproductos')
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
};

function getSingleCompra(req, res, next) {
  var compID = req.params.identityCompra; 
  db.one('select * from compradeproductos where identitycompra = $1', compID)
    .then(function (data) {
      res.status(200)
        .json({
          //status: 'success',
          data: data
          //message: 'Retrieved ONE usuario'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function createCompra(req, res, next) {


  db.none("insert into compradeproductos(identitycompra, precioproducto, nombreproducto,cantidadproducto, idproducto, usuario_identityusu) values(${identitycompra}, ${precioproducto}, ${nombreproducto}, ${cantidadproducto}, ${idproducto}, ${usuario_identityusu})",
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one producto'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};


function updateCompra(req, res, next) {

    db.none("update compradeproductos set precioproducto=${precioproducto}, nombreproducto=${nombreproducto}, cantidadproducto=${cantidadproducto}, idproducto=${idproducto}, usuario_identityusu=${usuario_identityusu} where identitycompra='"+req.params.identitycompra+"'",
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated compras'
        });
    })
    .catch(function (err) {
      return next(err);
     });
 
};

function removeCompra(req, res, next) {
   var compID = req.params.identityCompra; 
  db.result('delete from compradeproductos where identitycompra = $1', compID)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
         
          message: 'remove ONE compra'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};


// *****************************************************************************************
// ------------------------------- producto ------------------------------------------------

function getAllProducto(req, res, next) {
  db.many('select * from productos')
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
};

function getSingleProducto(req, res, next) {
  var prodID = req.params.identityprod; 
  db.one('select * from productos where identityprod = $1', prodID)
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
};

function createProducto(req, res, next) {

  db.none("insert into productos (identityprod, idproductos, nombreproducto, presentacion, cantidad, precio, compradeproductos_identitycompra, proveedor_identityprov) values(${identityprod}, ${idproductos}, ${nombreproducto}, ${presentacion}, ${cantidad}, ${precio}, ${compradeproductos_identitycompra}, ${proveedor_identityprov})",
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one proveedor'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function updateProducto(req, res, next) {


    db.none("update productos set idproductos=${idproductos}, nombreproducto=${nombreproducto}, presentacion=${presentacion}, cantidad=${cantidad}, precio=${precio}, compradeproductos_identitycompra=${compradeproductos_identitycompra}, proveedor_identityprov=${proveedor_identityprov} where identityprod='"+req.params.identityProd+"'",
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated producto'
        });
    })
    .catch(function (err) {
      return next(err);
     });
 
};

function removeProducto(req, res, next) {
  var producID =req.params.identityprod;
  db.result('delete from productos where identityprod = $1', producID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} producto`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
};

//*********************************************************************************************
//------------------------------------- Venta -------------------------------------------------





function getAllVenta(req, res, next) {
  db.many('select * from ventadeproductos')
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
};

function getSingleVenta(req, res, next) {
  var ventaID = req.params.identityv; 
  db.one('select * from productos where identityv = $1', ventaID)
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
};

function createVenta(req, res, next) {

  db.none("insert into ventadeproductos (identityv, cliente, codigofacturav, cantidad, nombreproducto, estadodeventa, rebaja, productos_identityp, usuario_identity) values(${identityv}, ${cliente}, ${codigofacturav}, ${cantidad}, ${nombreproducto}, ${estadodeventa}, ${rebaja}, ${productos_identityp}, ${usuario_identity})",
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one proveedor'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function updateVenta(req, res, next) {


    db.none("update ventadeproductos set cliente=${cliente}, codigofacturav=${codigofacturav}, cantidad=${cantidad}, nombreproducto=${nombreproducto}, estadodeventa=${estadodeventa}, rebaja=${rebaja}, productos_identityp=${productos_identityp}, usuario_identity=${usuario_identity} where identityv='"+req.params.identityv+"'",
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated ventaproducto'
        });
    })
    .catch(function (err) {
      return next(err);
     });
 
};

function removeVenta(req, res, next) {
  var ventaID =req.params.identityv;
  db.result('delete from productos where identityv = $1', ventaID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} venta`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
};

















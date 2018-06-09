var express = require('express');
var router = express.Router();
//var pg = require('pg');
var db = require('../rutas');
// ------------------usuario-------------------------------
router.get('/api/usuario', db.getAllUsuario);
router.get('/api/usuario/:identityUsu', db.getSingleUsuario);
router.post('/api/usuario', db.createUsuario);
router.put('/api/usuario/:identityUsu',db.updateUsuario);
router.delete('/api/usuario/:identityUsu', db.removeUsuario);
// -------------------proveedor---------------------------
router.get('/api/proveedor', db.getAllProveedor);
router.get('/api/proveedor/:identityProv', db.getSingleProveedor);
router.post('/api/proveedor', db.createProveedor);
router.put('/api/proveedor/:identityProv', db.updateProveedor);
router.delete('/api/proveedor/:identityProv', db.removeProveedor);
// -----------------compra de producto--------------------
router.get('/api/compraProducto', db.getAllCompra);
router.get('/api/compraProducto/:identityCompra', db.getSingleCompra);
router.post('/api/compraProducto', db.createCompra);
router.put('/api/compraProducto/:identityCompra', db.updateCompra);
router.delete('/api/compraProducto/:identityCompra', db.removeCompra);
// --------------------productos-----------------------
router.get('/api/producto', db.getAllProducto);
router.get('/api/producto/:identityProd', db.getSingleProducto);
router.post('/api/producto', db.createProducto);
router.put('/api/producto/:identityProd', db.updateProducto);
router.delete('/api/producto/:identityProd', db.removeProducto);

// ---------------------venta de productos-----------------------

router.get('/api/ventaProducto', db.getAllVenta);
router.get('/api/ventaProducto/:identityv', db.getSingleVenta);
router.post('/api/ventaProducto', db.createVenta);
router.put('/api/ventaProducto/:identityv', db.updateVenta);
router.delete('/api/ventaProducto/:identityv', db.removeVenta);

module.exports = router;

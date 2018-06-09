angular.module("moduloIndex")
	.config(function($routeProvider){
		$routeProvider
		.when("/",{
			controller: "controLogin",
			templateUrl: "Templ/Login.html"
		})
		.when("/Vendedor",{
			controller: "contro",
			templateUrl: "Templ/Principal.html"
		})
		.when("/registroCompras",{
			controller: "compras",
			templateUrl: "Templ/Compras.html"
		})
		.when("/registrarProducto",{
			controller: "productoController",
			templateUrl: "Templ/producto.html"
		})
		.when("/registrarProveedor",{
			controller: "proveedorController",
			templateUrl: "Templ/proveedor.html"
		})
		.when("/config",{
			controller: "controConfig",
			templateUrl: "Templ/Cuentas.html"
		})
		.otherwise("/");
	});
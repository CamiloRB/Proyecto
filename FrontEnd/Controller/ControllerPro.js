angular.module("moduloIndex")
	.controller("productoController",["$scope","$http",function(prod,$http){
		
		prod.product = [];
		prod.rProducto = {};
		//prod.formVisibility = false;
		prod.numero = 2;

		//invisibilidad de la tabla
		/*prod.ShowForm = function(){
			prod.formVisibility=true;
			console.log(prod.formVisibility)
		}
	 
	    /*prod.consultaE = function(){
			prod.ShowForm()
			$http.get('http://jsonplaceholder.typicode.com/users/1')
			.then(function (response){
				console.log(response.data);
				prod.product = response.data;
			});
		}*/
		
		prod.configurar = function(produ){
            prod.rProducto={};
            console.log(produ);
            prod.rProducto = produ;
    	}


		$http.get('http://localhost:3000/api/producto')
		.then(function(response){
			console.log(response.data);
			prod.product = response.data;
		});

		
		prod.Registar = function(){
		$http.post('http://localhost:3000/api/producto',{
		identityprod:prod.rProducto.identityprod,
		idproductos:prod.rProducto.idproductos, 
		nombreproducto:prod.rProducto.nombreproducto, 
		presentacion:prod.rProducto.presentacion, 
		cantidad:prod.rProducto.cantidad,
		precio:prod.rProducto.precio, 
		compradeproductos_identitycompra:'1',
		proveedor_identityprov:prod.rProducto.proveedor_identityprov
		})
		.then(function(response){
					console.log(response.data);/*este es para mirar 
					                  por consola si esta guardando 
					                  los datos*/
					prod.product.push(response.data);
					prod.rProducto={};
					prod.product=[];
					$http.get('http://localhost:3000/api/producto')
					.then(function(response){
						console.log(response.data);
						prod.product = response.data;
					});
			});
		}

		prod.addPut = function(){ 
        $http.put("http://localhost:3000/api/producto/" + prod.rProducto.identityprod,{
        identityprod:prod.rProducto.identityprod,
		idproductos:prod.rProducto.idproductos, 
		nombreproducto:prod.rProducto.nombreproducto, 
		presentacion:prod.rProducto.presentacion, 
		cantidad:prod.rProducto.cantidad,
		precio:prod.rProducto.precio, 
		compradeproductos_identitycompra:'1',
		proveedor_identityprov:prod.rProducto.proveedor_identityprov
                        })
                .then(function(response){
                    prod.product.push(response.data);
                    prod.rProducto={};
                    prod.product=[];
					$http.get('http://localhost:3000/api/producto')
					.then(function(response){
						console.log(response.data);
						prod.product = response.data;
					}); 
                    
                },function (error){
            })
        }
}]);
angular.module("moduloIndex")
	.controller("proveedorController",["$scope","$http",function(prov,$http){

		prov.proveedor= [];
		prov.rProveedor = {};

		
		$http.get('http://localhost:3000/api/proveedor')
		.then(function(response){
			console.log(response.data);
			prov.proveedor = response.data;
		});
		
		prov.configurar = function(provee){
            prov.rProveedor={};
            console.log(provee);
            prov.rProveedor = provee;
    	}

		prov.Registrar = function(){
		$http.post('http://localhost:3000/api/proveedor',{
		identityprov:prov.rProveedor.identityprov,
		cc:prov.rProveedor.cc,
		nombre:prov.rProveedor.nombre,
		idproduc:null,
		costo:null
		})
		.then(function(response){
				console.log(response.data);
				prov.proveedor.push(response.data);
				prov.rProveedor= {};
				prov.proveedor = [];
				$http.get('http://localhost:3000/api/proveedor')
				.then(function(response){
					console.log(response.data);
					prov.proveedor = response.data;
				});
		});
		}

		prov.addPut = function(){ 
	    $http.put("http://localhost:3000/api/proveedor/" + prov.rProveedor.identityprov,{
	    identityprov:prov.rProveedor.identityprov,
		cc:prov.rProveedor.cc,
		nombre:prov.rProveedor.nombre,
		idproduc:prov.rProveedor.idproduc,
		costo:prov.rProveedor.costo
	                    })
	            .then(function(response){
	                prov.proveedor.push(response.data);
					prov.rProveedor= {};
					prov.proveedor = [];
					$http.get('http://localhost:3000/api/proveedor')
					.then(function(response){
						console.log(response.data);
						prov.proveedor = response.data;
					});
	                
	            },function (error){
	        })
	    }

	}]);

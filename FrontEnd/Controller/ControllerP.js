angular.module("moduloIndex")
    .controller("contro",function($scope,$http,$resource){
    	
    	$scope.numero = 0;
    	$scope.compraa = {};
    	$scope.nuevacompraa = {};
        $scope.nuevocomenta = {};
        $scope.comenta = [];
        $scope.nuecan = 0;

        $scope.comentanuevo = function(){
            $scope.comenta.push($scope.nuevocomenta);
            $scope.nuevocomenta = {};
        }

    	//$http.get("https://jsonplaceholder.typicode.com/posts")
        $http.get("http://localhost:3000/api/producto")
    		.then(function(response){
    			console.log(response);
    			$scope.compraa = response.data;
    	});

        $scope.Aderir = function(produ){

            $scope.canti = prompt("Ingrese la cantidad", "");
            if ($scope.canti == "" || $scope.canti <= 0) {
                $scope.salida = 0;
            } else {
                $scope.salida = $scope.canti;
            }

            produ.cantidad = $scope.salida;

            $scope.Carrito.push(produ);

        }

        $scope.cantidad = function() {
            
            $scope.canti = prompt("Ingrese la cantidad", null);
            if ($scope.canti == null || $scope.canti <= 0) {
                $scope.salida = null;
            } else {
                $scope.salida = $scope.canti;
            }

            return $scope.salida;
        }

    	/*$scope.addPost = function(){ 
            $http.post("http://localhost:3000/api/producto",{
                        userId: '10',
                        title: $scope.nuevacompraa.title,
                        body: $scope.nuevacompraa.body
                        })
                .then(function(response){
                    $scope.compraa.push(response.data);
                    $scope.nuevacompraa={}; 
                    
                },function (error){
            })
        }*/

        /*$scope.editar = function(){ 
            $http.put("http://localhost:3000/api/producto/" + $scope.numero,{
                        userId: '10',
                        title: $scope.nuevacompraa.title,
                        body: $scope.nuevacompraa.body
                        })
                .then(function(response){
                    $scope.compraa.push(response.data);
                    $scope.nuevacompraa={}; 
                    
                },function (error){
            })
        }*/

    });
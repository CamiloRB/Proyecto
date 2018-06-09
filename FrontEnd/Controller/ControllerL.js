angular.module("moduloIndex")
    .controller("controLogin",function($scope,$http,$resource){

    	$scope.permiso = "";
    	$scope.url = "/";
    	$scope.usuarios = [];
    	$scope.user = {};


    	$http.get("http://localhost:3000/api/usuario")
    		.then(function(response){
    			//console.log(response);
    			$scope.usuarios = response.data;
    		});


    	$scope.DarPermiso = function(){

    		$scope.comprobar = $scope.usuarios.find(usua => usua.username === $scope.user.username);


            if($scope.comprobar.username === $scope.user.username
            && $scope.comprobar.userpass === $scope.user.userpass){

                if($scope.comprobar.rolusuario === "Admin"){

                $scope.url = "config";
                
                }if($scope.comprobar.rolusuario === "Analista"){
                
                $scope.url = "registrarProducto";

                }if($scope.comprobar.rolusuario === "Vendedor"){
                
                $scope.url = "Vendedor";

                }
                
            }else{
                $scope.user = {};
            }
    	}
    	
    });
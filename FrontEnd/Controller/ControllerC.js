angular.module("moduloIndex")
    .controller("compras",function($scope,$http,$resource){
    	
        $scope.iterador = 0;
    	$scope.numero = 0;
        $scope.cliente = "";
        $scope.comosea = [];
        $scope.compraa = [];
        $scope.com = [];
    	$scope.nuevacompraa = {};
        $scope.total = 0;
        $scope.salida2 = "";

        $http.get("http://localhost:3000/api/ventaProducto")
            .then(function(response){
                console.log(response);
                $scope.com = response.data;
            });

        //MONGO
        $http.get("http://localhost:3001/api/status")
        .then(function(response){
            console.log(response);
            $scope.comosea = response.data;
        });


        $scope.Carrito.forEach( function(valor, indice, array) {
            $scope.total = $scope.total + (valor.cantidad * valor.precio);
        });

        $scope.totales = function(){

            for ( $scope.i = 0; $scope.i <= $scope.Carrito.length - 1; $scope.i++) {

                $scope.total = $scope.total + ($scope.Carrito[i].cantidad * $scope.Carrito[i].precio);

            }

        }

        $scope.Eliminar = function(prod){
            $scope.total = 0;
            $scope.reso = $scope.Carrito.find( pro => pro.identityprod == prod.identityprod);
            $scope.bor = $scope.Carrito.indexOf($scope.reso);
            console.log($scope.bor);
            if ($scope.bor > -1) {
               $scope.Carrito.splice($scope.bor, 1);
            }
            $scope.Carrito.forEach( function(valor, indice, array) {
                $scope.total = $scope.total + (valor.cantidad * valor.precio);
            });
        }

        $scope.Limp = function(){
            $scope.Carrito = [];
            $scope.Carrito.forEach( function(valor, indice, array) {
                $scope.total = $scope.total + (valor.cantidad * valor.precio);
            });
        }

        $scope.Realizar = function(){
            $scope.iterador = $scope.com.length + 1;

            $scope.Carrito.forEach( function(valor, indice, array) {   
                
                $scope.iterador ++;

                $scope.addPost(valor, $scope.iterador);
            });
        }

    	$scope.addPost = function(Car,idd){ 
            $http.post("http://localhost:3000/api/ventaProducto",{
            identityv: idd,
            cliente: $scope.cliente,
            codigofacturav: "1",
            cantidad:Car.cantidad,
            nombreproducto: Car.nombreproducto,
            estadodeventa: "$scope.salida2",
            rebaja: "1",
            productos_identityp: Car.identityprod,
            usuario_identity:"1"
            })
                .then(function(response){ 
                    $scope.com.push(response.data);
                },function (error){
            })
        }

    });
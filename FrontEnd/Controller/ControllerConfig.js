angular.module("moduloIndex")
    .controller("controConfig",function($scope,$http,$resource){

    	$scope.numero = 0;
    	$scope.compraa = [];
    	$scope.nuevacompraa = {};
    	$scope.idusu = "";
    	$scope.nombreusu = "";
    	$scope.ccusu = "";
    	$scope.rolusu = "";
    	$scope.userusu = "";
    	$scope.passusu = "";
    	


    	$http.get("http://localhost:3000/api/usuario")
    		.then(function(response){
    			console.log(response);
    			$scope.compraa = response.data;
    		});

    	$scope.configurar = function(compra){
            $scope.nuevacompraa={};
            console.log(compra);
            $scope.nuevacompraa = compra;
    	}

    	$scope.addPost = function(){ 
        $http.post("http://localhost:3000/api/usuario",{
        identityusu:$scope.nuevacompraa.identityusu,
        cc:$scope.nuevacompraa.cc,
        nombre:$scope.nuevacompraa.nombre,
        rolusuario:$scope.nuevacompraa.rolusuario,
        username:$scope.nuevacompraa.username,
        userpass:$scope.nuevacompraa.userpass
        })
                .then(function(response){
                    $scope.compraa.push(response.data);
                    $scope.nuevacompraa={};
                    $scope.compraa=[];
                    $http.get("http://localhost:3000/api/usuario")
                    .then(function(response){
                        console.log(response);
                        $scope.compraa = response.data;
                    }); 
                    
                },function (error){
            })
        }

        $scope.addPut = function(){ 
        $http.put("http://localhost:3000/api/usuario/" + $scope.nuevacompraa.identityusu,{
        identityusu:$scope.nuevacompraa.identityusu,
        cc:$scope.nuevacompraa.cc,
        nombre:$scope.nuevacompraa.nombre,
        rolusuario:$scope.nuevacompraa.rolusuario,
        username:$scope.nuevacompraa.username,
        userpass:$scope.nuevacompraa.userpass
                        })
                .then(function(response){
                    $scope.compraa.push(response.data);
                    $scope.nuevacompraa={};
                    $scope.compraa=[];
                    $http.get("http://localhost:3000/api/usuario")
                    .then(function(response){
                        console.log(response);
                        $scope.compraa = response.data;
                    });  
                    
                },function (error){
            })
        }

         /*userId: '10', 
        title: $scope.nuevacompraa.title,
        body: $scope.nuevacompraa.body*/

         /*identityusu: '2',
        cc: $scope.ccusu,
        nombre: $scope.nombreusu,
        rolusuario: $scope.rolusu,
        username: $scope.userusu,
        userpass: $scope.passusu*/

        /*
        $scope.nuevacompraa.identityusu = compra.identityusu;
        $scope.nuevacompraa.cc = compra.cc;
        $scope.nuevacompraa.nombre = compra.nombre;
        $scope.nuevacompraa.rolusuario = compra.rolusuario;
        $scope.nuevacompraa.username = compra.username;
        $scope.nuevacompraa.userpass = compra.userpass;*/ 

        /*
        $scope.nuevacompraa.identityusu = $scope.idusu;
        $scope.nuevacompraa.cc = $scope.ccusu;
        $scope.nuevacompraa.nombre = $scope.nombreusu;
        $scope.nuevacompraa.rolusuario = $scope.rolusu;
        $scope.nuevacompraa.username = $scope.userusu;
        $scope.nuevacompraa.userpass = $scope.passusu;*/

        /*
        $scope.nuevacompraa.identityusu = compraa.identityusu;
        $scope.nuevacompraa.cc = compraa.cc;
        $scope.nuevacompraa.nombre = compraa.nombre;
        $scope.nuevacompraa.rolusuario = compraa.rolusuario;
        $scope.nuevacompraa.username = compraa.username;
        $scope.nuevacompraa.userpass = compraa.userpass;*/

    });
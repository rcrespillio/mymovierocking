'use strict';

/**
 * @ngdoc function
 * @name mymovierockingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mymovierockingApp
 */
var main = angular.module('mymovierockingApp');
  main.controller('MainCtrl', function ($scope) {
  	$scope.myMovies = $scope.myMovies||[];
    this.buscarPelicula = function(idBuscado,success,error){
      
      error();
    };
    $scope.verDetallesPelicula = function(idBuscado){
      console.log("llega "+idBuscado);
      var selMovie = {};
      for(var i=0;i<$scope.myMovies.length;i++){
        if($scope.myMovies[i].attributes.id==idBuscado){
          selMovie = $scope.myMovies[i];
          break;
        }
      }
      var stringifiedMovie = JSON.stringify(selMovie);
      localStorage.setItem("selMovie", stringifiedMovie);
      window.location.href = "/#/about";
      
    }
  	function getPeliculasRecientesSuccess(data){
      $scope.$apply(function(){
  		  $scope.myMovies = data;
      });
  	}
  	function getPeliculasRecientesError(){
		  console.log("error");
    }
  	movieController.getPeliculasRecientes(getPeliculasRecientesSuccess,getPeliculasRecientesError);
    
  });

'use strict';

function DeckImportController ($scope, BackendService){

  BackendService.get('/deck?id=1').then(function(response) {
    $scope.myWelcome = response.data;
  });

}

angular.module('txcmaker.deckImport', ['ngRoute'])

.controller('DeckImportCtrl', ['$scope', 'BackendService', DeckImportController])

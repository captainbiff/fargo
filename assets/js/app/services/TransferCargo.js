

angular.module('fargo')

  .factory('Transfer', function(restmod) {

    return restmod.model('/transfers');
  });

function MainController($scope) {
  $scope.person = {
    name: 'John Doe',
    email: 'jd@somewhere.com',
    phone: '555-123-4567'
  };
}

angular
  .module('app')
  .controller('MainController', MainController);
"use strict";

function PbhimsShowController($controller, $scope, PbhimsResource) {
  "ngInject";

  $controller("NpolarBaseController", { $scope: $scope });
  $scope.resource = PbhimsResource;
  $scope.show();
}

module.exports = PbhimsShowController;


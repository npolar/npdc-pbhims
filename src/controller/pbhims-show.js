"use strict";

function PbhimsShowController($controller, $scope, PbhimsResource) {
  "ngInject";

  $controller("NpolarBaseController", { $scope: $scope });
  $scope.resource = PbhimsResource;

  $scope.show().$promise.then(doc => {
    $scope.mapOptions = {
      color: "#f22",
      coverage: [[[ doc.location.latitude, doc.location.longitude ], [ doc.location.latitude, doc.location.longitude ]]]
    };
  });
}

module.exports = PbhimsShowController;


"use strict";

function PbhimsEditController($scope, $controller, NpolarLang, formula, PbhimsResource) {
  "ngInject";
  
  $controller("NpolarEditController", { $scope: $scope });
  $scope.resource = PbhimsResource;
  
  $scope.formula = formula.getInstance({
    schema: "//api.npolar.no/schema/polarbear-incident-0.1.0.json",
    language: NpolarLang.getLang()
  });

  $scope.edit();
}

module.exports = PbhimsEditController;


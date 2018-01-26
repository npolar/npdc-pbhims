"use strict";

function PbhimsEditController($scope, $controller, NpolarLang, npdcAppConfig, formula, chronopicService, PbhimsResource) {
  "ngInject";
  
  $controller("NpolarEditController", { $scope: $scope });
  $scope.resource = PbhimsResource;
  
  $scope.formula = formula.getInstance({
    schema: "//api.npolar.no/schema/polarbear-incident-1.1.0.json",
    form: "config/formula.json",
    language: NpolarLang.getLang(),
    templates: npdcAppConfig.formula.templates.concat([{
      match: "location.name",
      template: "<npdc:formula-placename></npdc:formula-placename>"
    }])
  });

  /*
  chronopicService.defineOptions({
    match: (field) => field.path.match(/datetime/),
    format: "{date}"
  });
  */

  $scope.edit();
}

module.exports = PbhimsEditController;


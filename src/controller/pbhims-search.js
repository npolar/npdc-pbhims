"use strict";

function PbhimsSearchController($controller, $scope, $routeParams, npdcAppConfig, PbhimsResource) {
  "ngInject";

  $controller("NpolarBaseController", { $scope: $scope });
  $scope.resource = PbhimsResource;

  var query = {
    limit: 100,
    sort: "-incident.datetime",
    fields: "id,title,status,incident.datetime,location.country,location.region,location.name,incident.category",
    facets: "status,incident.category,location.country,location.region,location.name",
  };

  npdcAppConfig.search.local.results.detail = function(entry) {
    // e.g. Longyearbyen conflict, Svalbard, Norway
    return entry.location.name + " " + entry.incident.category + ", " + entry.location.region + ", " + entry.location.country;
  };

  npdcAppConfig.search.local.results.subtitle = entry => entry.status;
  npdcAppConfig.search.local.results.href = entry => entry.id;

  npdcAppConfig.search.local.filterUi = {
    "year-incident.datetime": {
      type: "range"
    }
  };

  $scope.$on("$locationChangeSuccess", () => {
    $scope.search(query);
  });

  $scope.search(query);
}

module.exports = PbhimsSearchController;


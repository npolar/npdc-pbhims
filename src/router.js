"use strict";

var router = function($routeProvider, $locationProvider) {
  "ngInject";

  $locationProvider.html5Mode(true).hashPrefix("!");

  $routeProvider.when("/:id", {
    templateUrl: "view/pbhims-show.html",
    controller: "PbhimsShowController"
  }).when("/:id/edit", {
    templateUrl: "view/pbhims-edit.html",
    controller: "PbhimsEditController"
  }).when("/", {
    templateUrl: "view/pbhims-search.html",
    controller: "PbhimsSearchController",
    reloadOnSearch: false
  });
};

module.exports = router;


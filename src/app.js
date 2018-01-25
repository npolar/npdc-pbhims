"use strict";

var angular = require("angular");
var npdcCommon = require("npdc-common");

/*
var leaflet = require("npdc-common/src/wrappers/leaflet");
var npdcPbhimsApp = angular.module("npdcPbhimsApp", ["npdcCommon", "leaflet"]);
*/

var npdcPbhimsApp = angular.module("npdcPbhimsApp", ["npdcCommon"]);
npdcPbhimsApp.controller("PbhimsShowController", require("./controller/pbhims-show"));
npdcPbhimsApp.controller("PbhimsEditController", require("./controller/pbhims-edit"));
npdcPbhimsApp.controller("PbhimsSearchController", require("./controller/pbhims-search"));

var resources = [
  {"path": "/polar-bear/incident", "resource": "PbhimsResource", "uiBase": "/pbhims"}
];

resources.forEach(service => {
  return npdcPbhimsApp.factory(service.resource, ["NpolarApiResource", NpolarApiResource => NpolarApiResource.resource(service) ]);
});

npdcPbhimsApp.config(require("./router"));

npdcPbhimsApp.config(($httpProvider, npolarApiConfig) => {
  var autoConfig = new npdcCommon.AutoConfig("test"); // test | production
  angular.extend(npolarApiConfig, autoConfig, { resources });
  $httpProvider.interceptors.push("npolarApiInterceptor");
});


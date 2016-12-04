"use strict";angular.module("weatherAppApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngStorage","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current/:cityID",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).when("/forecast/:cityID",{templateUrl:"views/forecast.html",controller:"ForecastCtrl",controllerAs:"forecast"}).otherwise({redirectTo:"/"})}]),angular.module("weatherAppApp").controller("MainCtrl",["$scope","citysearch","$localStorage",function(a,b,c){a.citiesFound=b.find(),a.findCities=function(){a.citiesFound=b.find({query:a.location}),a.searchQuery=a.location},a.storage=c}]),angular.module("weatherAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("weatherAppApp").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=42bd22f215f7a0555c53e1a2315204ec",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("weatherAppApp").factory("citysearch",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=42bd22f215f7a0555c53e1a2315204ec",{},{find:{method:"GET",params:{query:"seattle"},isArray:!1}})}]),angular.module("weatherAppApp").controller("CurrentCtrl",["$scope","$routeParams","current",function(a,b,c){a.cityID=b.cityID,a.currentWeather=c.query({cityID:b.cityID})}]),angular.module("weatherAppApp").factory("forecast",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=42bd22f215f7a0555c53e1a2315204ec",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("weatherAppApp").controller("ForecastCtrl",["$scope","$routeParams","forecast",function(a,b,c){a.cityID=b.cityID,a.forecastData=c.query({cityID:b.cityID})}]),angular.module("weatherAppApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/current.html",'<h1>Current Weather for {{currentWeather.name}}</h1> <!-- TO DELETE <p ng-if="!citySaved"><button class="btn btn-sm btn-primary" ng-click="saveCity(currentWeather)">Save City</button></p>\n<div ng-messages="citySaved">\n    <p class="city-saved-alert bg-success text-success" ng-message="success">\n        {{currentWeather.name}} has been saved to your list of cities.\n    </p>\n    <p class="city-saved-alert bg-warning text-warning" ng-message="duplicate">\n        {{currentWeather.name}} has already been saved to your list of cities.\n    </p>\n</div>--> <dl> <dt>Currently</dt> <dd>{{currentWeather.weather[0].main}}</dd> <dd>{{currentWeather.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{currentWeather.main.temp}} &deg;F</dd> <dt>Wind</dt> <dd>{{currentWeather.wind.speed}} mph at {{currentWeather.wind.deg}} &deg;</dd> <dt>Clouds</dt> <dd>{{currentWeather.clouds.all}}%</dd> </dl> <p><a ng-href="/#/forecast/{{cityID}}" class="btn btn-lg btn-primary">View 16-day Forecast</a></p>'),a.put("views/forecast.html",'<h1>16-day Forecast for {{forecastData.city.name}} {{forecastData.city.country}}</h1> <dl ng-repeat="prediction in forecastData.list" class="weather-forecast"> <dt>Forecast for {{weather.dt*1000 | date:\'MMM dd, yyyy\'}}</dt> <dd>{{prediction.weather[0].main}}</dd> <dd>{{prediction.weather[0].description}}</dd> <dt>Temperature</dt> <dd>Min: {{prediction.temp.min}} &deg;F Max: {{prediction.temp.max}} &deg;F</dd> </dl> <p><a ng-href="/#/current/{{cityID}}" class="btn btn-lg btn-primary">View Current Weather</a></p>'),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <div class="container-fluid"> <div class="row"> <div class="col-lg-7 col-md-7 col-sm-7 col-xs-9" id="textfield"> <h2>SELECT YOUR CITY</h2> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Location: <input type="text" name="location" ng-model="location" id="text"> </label> </p> </div> </p></div> <div class="col-lg-5 col-md-5 col-sm-5 col-xs-9" id="findbutton"> <button class="btn btn-lg btn-primary" ng-click="findCities()">FIND CITY</button> </div> </div> </div> <div class="container-fluid" id="intro"> <div class="row"> <div class="apps"> <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"> <img class="app" src="/images/sunny.png" alt="Line drawn weather icon"> <img class="app" src="/images/cloudy.png" alt="Line drawn layered cloud weather icon"> <img class="app" src="/images/rainy.png" alt="Line drawn umbrella with rain drops weather icon"> <img class="app" src="/images/stormy.png" alt="Line drawn lightning weather icon"> <img class="app" src="/images/windy.png" alt="Line drawn wind weather icon"> </div> </div> </div> </div> <div class="container-fluid"> <div class="row" ng-if="searchQuery"> <dl ng-repeat="city in citiesFound.list"> <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12" id="citylist"> <dt>{{city.name}}, {{city.sys.country}}</dt> <dd>{{city.weather[0].main}} - {{city.weather[0].description}}</dd> </div> <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12" id="resultbutton"> <dd><a ng-href="/#/current/{{city.id}}" class="btn btn-lg btn-primary" id="result">View Weather</a></dd> </div> </dl> </div> </div>  </div>')}]);
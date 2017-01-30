(function(){
'use strict';

angular.module('app')
.component('classifieds', {
  templateUrl: '/js/classifieds/classified-list.template.html',
  controller: controller
});

controller.$inject = ['$http'];
function controller($http){
  const vm = this;
  vm.$onInit = onInit;

  function onInit(){
    $http.get('/classifieds')
    .then((results)=>{
      console.log(results);
      vm.classifieds = results.data;
    })
    .catch((err) => {
      console.log(err);
    });
  }



}




})();

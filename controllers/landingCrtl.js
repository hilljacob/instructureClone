angular.module('instructure').controller('landingCtrl', function($scope, landingService,$interval){

      $scope.keyWord = landingService.getWord();
      var updateWord = function() {
        $scope.keyWord = landingService.getWord();
      };
      $interval(updateWord, 200);

      $(function(){
        $("#flyAway").on("click",function(){
          $("#flyAway").css({
            "margin-bottom": "690px"});
        });
      });



})

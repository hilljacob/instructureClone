angular.module('instructure').controller('landingCtrl', function($scope, landingService,$interval){

      $(".movingBar").css({"left": "671px"});
      $(".movingBar").css({"width": "75px"});

      $scope.keyWord = landingService.getWord();
      var updateWord = function() {
        $scope.keyWord = landingService.getWord();
      };
      $interval(updateWord, 200);

      $(function(){
        // what makes the rocket fly ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $("#flyAway").on("click",function(){
          $("#flyAway").css({
            "margin-bottom": "690px"});
        });
        // the career button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $("#career").mouseover(function(){
          $(".movingBar").css({"left": "172px"});
          $(".movingBar").css({"width": "75px"});
        });
        $("#career").mouseout(function(){
          $(".movingBar").css({"left": "671px"});
          $(".movingBar").css({"width": "75px"});
        });
        // the Blog button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $("#blog").mouseover(function(){
          $(".movingBar").css({"left": "286px"});
          $(".movingBar").css({"width": "44px"});
        });
        $("#blog").mouseout(function(){
          $(".movingBar").css({"left": "671px"});
          $(".movingBar").css({"width": "75px"});
        });
        // the Press button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $("#press").mouseover(function(){
          $(".movingBar").css({"left": "369px"});
          $(".movingBar").css({"width": "137px"});
        });
        $("#press").mouseout(function(){
          $(".movingBar").css({"left": "671px"});
          $(".movingBar").css({"width": "75px"});
        });
        // the Investor button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $("#investor").mouseover(function(){
          $(".movingBar").css({"left": "545px"});
          $(".movingBar").css({"width": "87px"});
        });
        $("#investor").mouseout(function(){
          $(".movingBar").css({"left": "671px"});
          $(".movingBar").css({"width": "75px"});
        });

      });



})

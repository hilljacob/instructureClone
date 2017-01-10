angular.module('instructure').controller('landingCtrl', function($scope, landingService,$interval){

      $(".movingBar").css({"margin-left": "153px"});
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
          $(".movingBar").css({"margin-left": "-850px"});
          $(".movingBar").css({"width": "75px"});
        });
        $("#career").mouseout(function(){
          $(".movingBar").css({"margin-left": "153px"});
          $(".movingBar").css({"width": "75px"});
        });
        // the Blog button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $("#blog").mouseover(function(){
          $(".movingBar").css({"margin-left": "-650px"});
          $(".movingBar").css({"width": "44px"});
        });
        $("#blog").mouseout(function(){
          $(".movingBar").css({"margin-left": "153px"});
          $(".movingBar").css({"width": "75px"});
        });
        // the Press button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $("#press").mouseover(function(){
          $(".movingBar").css({"margin-left": "-400px"});
          $(".movingBar").css({"width": "137px"});
        });
        $("#press").mouseout(function(){
          $(".movingBar").css({"margin-left": "153px"});
          $(".movingBar").css({"width": "75px"});
        });
        // the Investor button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $("#investor").mouseover(function(){
          $(".movingBar").css({"margin-left": "-100px"});
          $(".movingBar").css({"width": "87px"});
        });
        $("#investor").mouseout(function(){
          $(".movingBar").css({"margin-left": "153px"});
          $(".movingBar").css({"width": "75px"});
        });

      });



})

(function() {
    'use strict';
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
    
    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController($scope){
        $scope.green = false;
        $scope.red = false;
        
        $scope.getLunchMessage = function(){
            $scope.lunchMessage = checkLunchItems($scope.items);
        }
        
        function checkLunchItems(items){
            let message = "";
            if(items == undefined || items == ""){
                message = "Please enter data first.";
                $scope.red = true;
                $scope.green = false;
            } else {
                let list = EmptyFilter(items.split(","));
                console.log(list);
                $scope.red = false;
                $scope.green = true;
                if(list.length > 3){
                    message = "Too Much!";
                } else if(list.length > 0){
                    message = "Enjoy!";
                }
            }
            return message;
        }
        
        function EmptyFilter(items) {
            return items.filter(x => x.trim() != "");
        }
    }
})();
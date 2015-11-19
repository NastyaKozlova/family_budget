/*(function () {

    var moduleId = "doxodCtrl";
    angular.module("comeApp").controller(moduleId, [doxodCtrl]);

    function doxodCtrl() {
        var vm = this;
        vm.doxod = [];

        init();

        function init() {
            vm.doxod = [
                {state: 'основная работа', family: 'папа', data: Date.parse('2015-10-10'), suma: '1500'},
                {state: '', family: 'мама', data: Date.parse('2015-10-15'), suma: '1500'},
                {state: 'подработка', family: 'папа', data: Date.parse('2015-10-11'), suma: '1800'},
                {state: 'стипендия', family: 'дочь', data: Date.parse('2015-10-12'), suma: '1300'},
            ];

            vm.sortBySum=function(arr){
                arr.sort(function(a,b){
                    return a.data - b.data;
                })
            }
        }


    }
})();*/

angular.module('comeApp')
    .controller('doxodCtrl', function ($scope) {
        console.log("here");
        $scope.doxod = [
            {state: 'основная работа', family: 'папа', data: Date.parse('2015-10-10'), suma: '1500'},
            {state: '', family: 'мама', data: Date.parse('2015-10-15'), suma: '1500'},
            {state: 'подработка', family: 'папа', data: Date.parse('2015-10-11'), suma: '1800'},
            {state: 'стипендия', family: 'дочь', data: Date.parse('2015-10-12'), suma: '1300'},
        ];
        var tmpArr = angular.copy($scope.doxod);
        $scope.sortBySum=function(isSorted){
            if(isSorted){
                $scope.doxod.sort(function(a,b){
                    return b.suma - a.suma;
                });
            } else{
                $scope.doxod = angular.copy(tmpArr);
            }

        }

        $scope.sortByDate=function(isSorted){

            if(isSorted){
                $scope.doxod.sort(function(a,b){
                    return b.data - a.data;
                });
            } else{
                $scope.doxod = angular.copy(tmpArr);
            }
        }

        $scope.isSumSorted = false;
        $scope.isDateSorted = false;
    });


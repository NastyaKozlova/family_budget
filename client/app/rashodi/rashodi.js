(function() {
    
    var moduleId = "rashodiCtrl"; 
    angular.module("comeApp").controller(moduleId, [rashodiCtrl]);

    function weightingCtrl() {
        var vm = this;
        vm.rashodi = [];

        init();

        function init () {
            vm.rashodi = [ 	{ state: 'комунальные расходы', cost: '500', family: 'мама'}, 
{ state: 'бензин', cost: '400', family: 'папа'}
{ state: 'бензин', cost: '400', family: 'папа'}  ];
        }
    }
})(); 

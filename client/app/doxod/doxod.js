(function() {
    
    var moduleId = "doxodCtrl"; 
    angular.module("comeApp").controller(moduleId, [doxodCtrl]);

    function doxodCtrl() {
        var vm = this;
        vm.doxod = [];

        init();

        function init () {
            vm.doxod = [ 	{ state: 'основная работа', family: 'папа', data: Date.parse('10.10.15'),  suma: '1500'}, 
{ state: '', family: 'мама', data: Date.parse('10.10.15'),  suma: '1500'}, 
{ state: 'подработка', family: 'папа', data: Date.parse('11.10.15'),  suma: '1800'},
{ state: 'стипендия', family: 'дочь', data: Date.parse('12.10.15'),  suma: '1300'},  ];
        }
    }
})(); 

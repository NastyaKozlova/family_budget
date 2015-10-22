(function() {
    
    var moduleId = "doxodCtrl"; 
    angular.module("comeApp").controller(moduleId, [doxodCtrl]);

    function weightingCtrl() {
        var vm = this;
        vm.doxod = [];

        init();

        function init () {
            vm.doxod = [ 	{ state: 'основная работа', family: 'папа', J: '1000',  F: '1500', M: '2100',  In: '', Il: '', Av: '', C: '',  O: '',  N: '',    D: ''}, 
{ kateg: '', family: 'мама', J: '1200',  F: '1300', M: '1000',  In: '', Il: '', Av: '', C: '',  O: '',  N: '',    D: ''}, 
{ kateg: 'подработка', family: 'папа', J: '1200',  F: '1200', M: '1300',  In: '', Il: '', Av: '', C: '',  O: '',  N: '',    D: ''},
{ kateg: 'стипендия', family: 'дочь', J: '720',  F: '800', M: '800',  In: '', Il: '', Av: '', C: '',  O: '',  N: '',    D: ''},  ];
        }
    }
})(); 

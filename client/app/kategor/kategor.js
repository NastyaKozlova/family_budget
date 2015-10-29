(function() {
    
    var moduleId = "kategorCtrl"; 
    angular.module("comeApp").controller(moduleId, [kategorCtrl]);

    function kategorCtrl() {
        var vm = this;
        vm.kategor= [];

        init();

        function init () {
            vm.kategor = [ 	
               { doxod: 'основная работа', rasxod: '', family: 'папа', cost: '1000', mounth: 'январь'}, 
	           { doxod: '', rasxod: 'комунальные расходы', family: 'мама', cost: '500', mounth: ''},
	           { doxod: 'основная работа', rasxod: '', family: 'мама', cost: '1200', mounth: 'январь'},
	           { doxod: 'подработка', rasxod: '', family: 'папа', cost: '1200', mounth: 'январь'},
	           { doxod: '', rasxod: 'бензин', family: 'папа', cost: '400', mounth: ''}];
        }
    }
})(); 

(function() {
    
    var moduleId = "tovarCtrl"; 
    angular.module("comeApp").controller(moduleId, [tovarCtrl]);

    function weightingCtrl() {
        var vm = this;
        vm.tovar= [];

        init();

        function init () {
            vm.tovar = [ 	{ tovar: 'микроволновка', servis: '', date: '21.09.15', cost: '1500'}, 
{ tovar: 'машинка', servis: '', date: '22.09.15', cost: '1300'
{ tovar: '', servis: 'стоматолог', date: '23.09.15', cost: '550' ];
        }
    }
})(); 

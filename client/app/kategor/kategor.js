/*(function() {
    
    var moduleId = "kategorCtrl"; 
    angular.module("comeApp").controller(moduleId, [kategorCtrl]);

    function kategorCtrl() {
        var vm = this;
        vm.kategor= [];

        init();

        function init () {
            vm.kategor = [ 	{ doxod: 'основная работа', rasxod: '', family: 'папа', cost: '1000', mounth: 'январь'}, 
	{ doxod: '', rasxod: 'комунальные расходы', family: 'мама', cost: '500', mounth: ''},
	{ doxod: 'основная работа', rasxod: '', family: 'мама', cost: '1200', mounth: 'январь'},
	{ doxod: 'подработка', rasxod: '', family: 'папа', cost: '1200', mounth: 'январь'},
	{ doxod: '', rasxod: 'бензин', family: 'папа', cost: '400', mounth: ''}];
        }
    }
})(); 
*/

(function () {
    var moduleId = "kategorCtrl"; 
	angular.module("comeApp").controller(moduleId, ['$uibModal',kategorCtrl]);
	
    var modalmoduleID="ModalInstanceCtrl";
    angular.module("comeApp").controller(modalmoduleID,ModalInstanceCtrl);
     function ModalInstanceCtrl($uibModalInstance,item){
    var vm=this;
     if(item.data===null){
        item.data=new Date();
     }
     function validate(item){
        if (item.state===null||item.state=='') {
            console.log("Заполните поле \"Категория\"");
         return false;
        }
        if (item.family===null||item.family=='') {
            console.log("Заполените поле \"Член Семьи\"");
             return false;
        };
        if(item.cost===null||item.cost==''){
            console.log("Заполните поле \"сумма\"");
             return false;
        }
        return true;
    }
    vm.item={
		doxod:item.doxod,
		rasxod:item.rasxod,
		family:item.family,
        cost:item.cost,
		mounth:item.mounth
    };  
    
    vm.ok=function(){
        
        if (validate(vm.item)){
        $uibModalInstance.close(vm.item);
console.log("okok") } 
  }
    vm.close=function(){
        $uibModalInstance.dismiss("cancel");
    }
     };
      function kategorCtrl($uibModal) {
        var vm = this
        vm.kategor = new Array();
      
      
        init();
   function init() {
	   
            vm.kategor = [ 	{ doxod: 'основная работа', rasxod: '', family: 'папа', cost: '1000', mounth: 'январь'}, 
	{ doxod: '', rasxod: 'комунальные расходы', family: 'мама', cost: '500', mounth: ''},
	{ doxod: 'основная работа', rasxod: '', family: 'мама', cost: '1200', mounth: 'январь'},
	{ doxod: 'подработка', rasxod: '', family: 'папа', cost: '1200', mounth: 'январь'},
	{ doxod: '', rasxod: 'бензин', family: 'папа', cost: '400', mounth: ''}
	];
			
            vm.removeItem=function(item){
              var index=vm.kategor.indexOf(item);
            if(index>-1){
                vm.kategor.splice(index,1);
            }
           
         }
            vm.newkategor={
                doxod: null,
				rasxod: null,
				family: null,
				cost: null,
				mounth: null
            };
            vm.sortBySum=function(isSorted){
            if(isSorted){
                vm.kategor.sort(function(a,b){
                    return b.cost - a.cost;
                });
            } else{
				vm.kategor.sort(function(a,b){
                    return b.cost + a.cost;
                });
            }

        };
                vm.editItem=function(EditItem){
               event.preventDefault();
            var index=vm.kategor.indexOf(EditItem);
			
             $uibModal.open({
                 animation:vm.animationsEnabled,
                 templateUrl:"/client/app/kategor/form-tmpl.html",
                 controller:'ModalInstanceCtrl',
                 controllerAs:'mi',
                 resolve:{
                     item:function(){
                        
                         return EditItem;
                     }
                 }
             }).result.then(function(item){
                 vm.kategor[index]=item;
             },function(){
                 console.log("Dissmiss");
             });
        } 
        vm.isSumSorted = false;

        vm.isFormOpened = false;
            vm.addkategor=function(){
                event.preventDefault();
                var ModalInstance= $uibModal.open({
                templateUrl:"/client/app/kategor/form-tmpl.html",
                controller: 'ModalInstanceCtrl',
                controllerAs:'mi',
                resolve:{
                    item:function(){
                        return vm.newkategor;
                    }
                }
               
                }).result.then(
                    function(result){
                        vm.kategor.push(result);
                    },function(){
                        console.log("dismiss");
                    }
                );
            }
        }
	}
})();
/*(function() {
	
	var moduleId = "rashodiCtrl"; 
	angular.module("comeApp").controller(moduleId, [rashodiCtrl]);

	function rashodiCtrl() {
		var vm = this;
		vm.rashodi = [];
		vm.openImg = openImg;
		init();

		function init () {
			vm.rashodi = [ 	
				{ state: 'комунальные расходы', cost: '500', family: 'мама'},
				{ state: 'бензин', cost: '400', family: 'папа'},
				{ state: 'бензин', cost: '400', family: 'папа'}  
			];
		}
	}
})(); */

(function () {
    var moduleId = "rashodiCtrl"; 
	angular.module("comeApp").controller(moduleId, ['$uibModal',rashodiCtrl]);
	
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
        state:item.state,
        family:item.family,
        cost:item.cost
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
      function rashodiCtrl($uibModal) {
        var vm = this
        vm.rashodi = new Array();
      
      
        init();
   function init() {
	   
            vm.rashodi = [ 	
				{ state: 'комунальные расходы', cost: '500', family: 'мама'},
				{ state: 'бензин', cost: '400', family: 'папа'},
				{ state: 'бензин', cost: '400', family: 'папа'}  
			];
			
            vm.removeItem=function(item){
              var index=vm.rashodi.indexOf(item);
            if(index>-1){
                vm.rashodi.splice(index,1);
            }
           
         }
            vm.newrashodi={
                state: null,
                family: null,
                cost: null
            };
            vm.sortBySum=function(isSorted){
            if(isSorted){
                vm.rashodi.sort(function(a,b){
                    return b.cost - a.cost;
                });
            } else{
				vm.rashodi.sort(function(a,b){
                    return b.cost + a.cost;
                });
            }

        };
                vm.editItem=function(EditItem){
               event.preventDefault();
            var index=vm.rashodi.indexOf(EditItem);
			
             $uibModal.open({
                 animation:vm.animationsEnabled,
                 templateUrl:"/client/app/rashodi/form-tmpl.html",
                 controller:'ModalInstanceCtrl',
                 controllerAs:'mi',
                 resolve:{
                     item:function(){
                        
                         return EditItem;
                     }
                 }
             }).result.then(function(item){
                 vm.rashodi[index]=item;
             },function(){
                 console.log("Dissmiss");
             });
        } 
        vm.isSumSorted = false;

        vm.isFormOpened = false;
            vm.addrashodi=function(){
                event.preventDefault();
                var ModalInstance= $uibModal.open({
                templateUrl:"/client/app/rashodi/form-tmpl.html",
                controller: 'ModalInstanceCtrl',
                controllerAs:'mi',
                resolve:{
                    item:function(){
                        return vm.newrashodi;
                    }
                }
               
                }).result.then(
                    function(result){
                        vm.rashodi.push(result);
                    },function(){
                        console.log("dismiss");
                    }
                );
            }
        }

		vm.openImg = function openImg(id) {
			display = document.getElementById(id).style.display;
			if(display=='none'){
				document.getElementById(id).style.display='block';
			}else{
				document.getElementById(id).style.display='none';
			}
		}
	}
})();



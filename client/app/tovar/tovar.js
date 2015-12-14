/*(function() {
    
    var moduleId = "tovarCtrl"; 
    angular.module("comeApp").controller(moduleId, [tovarCtrl]);

    function tovarCtrl() {
        var vm = this;
        vm.tovar= [];

        init();

        function init () {
            vm.tovar = [ 	
            { tovar: 'микроволновка', servis: '', date: '21.09.15', cost: '1500'},
            { tovar: 'машинка', servis: '', date: '22.09.15', cost: '1300' },
            { tovar: '', servis: 'стоматолог', date: '23.09.15', cost: '550'  }];
        }
    }
})(); 
*/

(function () {
    var moduleId = "tovarCtrl"; 
	angular.module("comeApp").controller(moduleId, ['$uibModal',tovarCtrl]);
	
    var modalmoduleID="ModalInstanceCtrl";
    angular.module("comeApp").controller(modalmoduleID,ModalInstanceCtrl);
     function ModalInstanceCtrl($uibModalInstance,item){
    var vm=this;
     if(item.data===null){
        item.data=new Date();
     }
     function validate(item){
        if (item.tovar===null||item.tovar=='') {
			return false;
        }
        if (item.servis===null||item.servis=='') {
             return false;
        }
        if(item.cost===null||item.cost==''){
             return false;
        }
        return true;
    }
    vm.item={
        tovar:item.tovar,
        servis:item.servis,
        data:new Date(item.date),
		cost:item.cost,
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
      function tovarCtrl($uibModal) {
        var vm = this
        vm.tovar = new Array();
      
      
        init();
   function init() {
	   
            vm.tovar = [ 	
				{ tovar: 'микроволновка', servis: '', data: Date.parse('2015-09-11'), cost: '1500'},
				{ tovar: 'машинка', servis: '', data: Date.parse('2015-09-12'), cost: '1300' },
				{ tovar: '', servis: 'стоматолог', data: Date.parse('2015-09-15'), cost: '550'  }];
			
            vm.removeItem=function(item){
              var index=vm.tovar.indexOf(item);
            if(index>-1){
                vm.tovar.splice(index,1);
            }
           
         }
            vm.newtovar={
                tovar: null,
                servis: null,
				data: null,
                cost: null
            };
            vm.sortBySum=function(isSorted){
            if(isSorted){
                vm.tovar.sort(function(a,b){
                    return b.cost - a.cost;
                });
            } else{
				vm.tovar.sort(function(a,b){
                    return b.cost + a.cost;
                });
            }

        };
		
		vm.sortByDate=function(isSorted){

            if(isSorted){
                vm.tovar.sort(function(a,b){
                    return b.data - a.data;
                });
            } else{
				vm.tovar.sort(function(a,b){
                    return a.data - b.data;
                });
            }
        }
                vm.editItem=function(EditItem){
               event.preventDefault();
            var index=vm.tovar.indexOf(EditItem);
			
             $uibModal.open({
                 animation:vm.animationsEnabled,
                 templateUrl:"/client/app/tovar/form-tmpl.html",
                 controller:'ModalInstanceCtrl',
                 controllerAs:'mi',
                 resolve:{
                     item:function(){
                        
                         return EditItem;
                     }
                 }
             }).result.then(function(item){
                 vm.tovar[index]=item;
             },function(){
                 console.log("Dissmiss");
             });
        } 
        vm.isSumSorted = false;
		vm.isDateSorted = false;

        vm.isFormOpened = false;
            vm.addtovar=function(){
                event.preventDefault();
                var ModalInstance= $uibModal.open({
                templateUrl:"/client/app/tovar/form-tmpl.html",
                controller: 'ModalInstanceCtrl',
                controllerAs:'mi',
                resolve:{
                    item:function(){
                        return vm.newtovar;
                    }
                }
               
                }).result.then(
                    function(result){
                        vm.tovar.push(result);
                    },function(){
                        console.log("dismiss");
                    }
                );
            }
        }
	}
})();
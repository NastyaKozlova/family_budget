(function () {

    var moduleId = "doxodCtrl";
    
    angular.module("comeApp").controller(moduleId, ['$uibModal',doxodCtrl]);
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
        if(item.suma===null||item.suma==''){
            console.log("Заполните поле \"сумма\"");
             return false;
        }
        return true;
    }
    vm.item={
        state:item.state,
        family:item.family,
        data:new Date(item.data),
        suma:item.suma
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
      function doxodCtrl($uibModal) {
        var vm = this
        vm.doxod = new Array();
      
      
        init();
   function init() {
            vm.doxod = [
                {state: 'основная работа', family: 'папа', data: Date.parse('2015-10-10'), suma: '1500'},
                {state: '', family: 'мама', data: Date.parse('2015-10-15'), suma: '1500'},
                {state: 'подработка', family: 'папа', data: Date.parse('2015-10-11'), suma: '1800'},
                {state: 'стипендия', family: 'дочь', data: Date.parse('2015-10-12'), suma: '1300'},
            ];
            vm.removeItem=function(item){
              var index=vm.doxod.indexOf(item);
            if(index>-1){
                vm.doxod.splice(index,1);
            }
           
         }
            vm.newDoxod={
                state: null,
                family: null,
                data: null,
                suma: null
            };
            vm.sortBySum=function(isSorted){
            if(isSorted){
                vm.doxod.sort(function(a,b){
                    return b.suma - a.suma;
                });
            } else{
				vm.doxod.sort(function(a,b){
                    return b.suma + a.suma;
                });
            }

        };
        vm.sortByDate=function(isSorted){

            if(isSorted){
                vm.doxod.sort(function(a,b){
                    return b.data - a.data;
                });
            } else{
				vm.doxod.sort(function(a,b){
                    return a.data - b.data;
                });
            }
        }
                vm.editItem=function(EditItem){
               event.preventDefault();
            var index=vm.doxod.indexOf(EditItem);
           
           
             console.log("inEdit");
             $uibModal.open({
                 animation:vm.animationsEnabled,
                 templateUrl:"/client/app/doxod/form-tmpl.html",
                 controller:'ModalInstanceCtrl',
                 controllerAs:'mi',
                 resolve:{
                     item:function(){
                        
                         return EditItem;
                     }
                 }
             }).result.then(function(item){
                 vm.doxod[index]=item;
             },function(){
                 console.log("Dissmiss");
             });
        } 
        vm.isSumSorted = false;
        vm.isDateSorted = false;

        vm.isFormOpened = false;
            vm.addDoxod=function(){
                event.preventDefault();
                var ModalInstance= $uibModal.open({
                templateUrl:"/client/app/doxod/form-tmpl.html",
                controller: 'ModalInstanceCtrl',
                controllerAs:'mi',
                resolve:{
                    item:function(){
                        return vm.newDoxod;
                    }
                }
               
                }).result.then(
                    function(result){
                        vm.doxod.push(result);
                    },function(){
                        console.log("dismiss");
                    }
                );
            }
        }


    }
   
})();
(function() {
	
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
})(); 

function openImg(id) {
  // alert("It works");
   display = document.getElementById(id).style.display;
    if(display=='none'){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }
}
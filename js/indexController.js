$(document).ready(function(){
	$("#button1").click(efectos);
	$("#button2").click(function(){
		$("miDiv").stop();
	});
	function efectos(){
		mD = $("miDiv");
		mD.hide(2000);
		mD.show(2000);
		mD.animate({"top":"500px"},1000);
		mD.animate({"top":"50px"},2000);
		mD.fadeIn(2000);
		mD.fadeOut(2000,efectos);

	}


	});
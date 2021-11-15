$(document).ready(function(){

function init(){

if(localStorage["name"]){
	$("#name").val(localStorage["name"]);
}

if(localStorage["email"]){
	$("#email").val(localStorage["email"]);
}

if(localStorage["msg"]){
	$("#msg").val(localStorage["msg"]);
}


}

init();


});

$('.store').change(function(){
	localStorage[$(this).attr('name')] = $(this).val();

});
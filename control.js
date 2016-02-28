$(document).ready(function(){
	var firebase = new Firebase('https://glaring-heat-9838.firebaseio.com/');

	$("form").on("#button".onclick,function(e){
		e.preventDefault();
		var thing = {
			"action": click
		}
		firebase.push(thing);
	});
})
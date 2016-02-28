$(document).ready(function(){
	var firebase = new Firebase('https://glaring-heat-9838.firebaseio.com/');

	$("#but").click(function(e){
		e.preventDefault();
		var thing = {
			"action": click
		}
		firebase.push(thing);
		console.log("hi");
	});
})
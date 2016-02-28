$(document).ready(function(){
	var firebase = new Firebase('https://glaring-heat-9838.firebaseio.com/');

	$("#but").click(function(e){
		var thing = {
			"username": $("#name")
		}
		firebase.push(thing);
		console.log("hi");
	});
})
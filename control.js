$(document).ready(function(){
	var firebase = new Firebase('https://glaring-heat-9838.firebaseio.com/');

	$("#but").click(function(e){
		e.preventDefault();
		var thing = {
			"username": $("#name").val()
		}
		firebase.push(thing);
		console.log("hi");
	});

	$("#clearserver").click(function(e){
		e.preventDefault();
		firebase.remove();
	})
})
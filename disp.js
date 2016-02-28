$(document).ready(function(){
	var firebase = new Firebase('https://glaring-heat-9838.firebaseio.com/');

	function update(t){
		var para = $("</p>").text("username: "+t);
		$("#placeholder").prepend(para);
	}

	firebase.on("child_added", function(snapshot){
		var input = snapshot.val().username;
		update(input);
	});

	$("#removeall").click(function(e){
		$("#placeholder").empty();
	});

	$("#x").click(function(e){
		firebase.once("value",function(snapshot){
			var thing = snapshot.val().x;
			update(thing);
		});
	});

	$("#plus").click(function(e){
		firebase.child("x").set(firebase.child("x").val().x);
	});
})
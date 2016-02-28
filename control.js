$(document).ready(function(){
	var firebase = new Firebase('https://glaring-heat-9838.firebaseio.com/');

	// $("#but").click(function(e){
	// 	e.preventDefault();
	// 	var thing = {
	// 		"username": $("#name").val()
	// 	}
	// 	firebase.push(thing);
	// 	console.log("hi");
	// });

	// $("#clearserver").click(function(e){
	// 	e.preventDefault();
	// 	firebase.remove();
	// })
	
	$("#xplus").click(function(e){
		firebase.once("value",function(snapshot){
			firebase.child("x").set(snapshot.val().x+1);
		})
	});
	$("#xminus").click(function(e){
		firebase.once("value",function(snapshot){
			firebase.child("x").set(snapshot.val().x-1);
		})
	});
	$("#yplus").click(function(e){
		firebase.once("value",function(snapshot){
			firebase.child("y").set(snapshot.val().y+1);
		})
	});
	$("#yminus").click(function(e){
		firebase.once("value",function(snapshot){
			firebase.child("y").set(snapshot.val().y-1);
		})
	});
	$("#clear").click(function(e){
		firebase.once("value",function(snapshot){
			firebase.child("clear").set(snapshot.val().clear+1);
		});
	});
})
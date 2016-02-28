$(document).ready(function(){
	var firebase = new Firebase('https://glaring-heat-9838.firebaseio.com/');

	function update(t){
		var para = $("</p>").text("username: "+t);
		$("#placeholder").prepend(para);
	}

	function drawRect(x,y,width,height,color){
		var canvas = document.getElementById("play");
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = color;
		ctx.fillRect(x-width/2,y-height/2,width,height);
	}

	function clearBoard(){
		var canvas = document.getElementById("play");
		var ctx = canvas.getContext("2d");
		ctx.clearRect(0,0,canvas.width,canvas.height);
	}

	firebase.on("value",function(snapshot){
		var x = snapshot.val().x;
		var y = snapshot.val().y;
		drawRect(x,y,4,4,"#FF0000");
		var clear = snapshot.val().clear;
		if(clear % 5 == 0){
			clearBoard();
			console.log("hishi");
			firebase.child("clear").set(snapshot.val().clear+1);
		}
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
})
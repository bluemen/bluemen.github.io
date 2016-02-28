$(document).ready(function(){
	var firebase = new Firebase('https://glaring-heat-9838.firebaseio.com/');

	function update(t){
		var para = $("</p>").text(t.action);
		$("#placeholder").prepend(para);
	}

	firebase.on("child_added", function(snapshot){
		var input = snapshot.val();
		update(input);
	});

	$("#removeall").click(function(e){
		$("#placeholder").empty();
	})

	
})
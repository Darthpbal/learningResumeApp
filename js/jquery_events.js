var test = "hello world";
$(document).ready(function()
	{
		// $('button').click(function() {	
		// 	var toAdd = $("input[name=message]").val();
		// 	$('#messages').append("<p>"+toAdd+"</p>");
		// });

	//2. $('div').hover(
	// 	function(){
	// 		$(this).addClass('active');
 //    	},
 //    	function(){
 //        	$(this).removeClass('active');
 //    	}
 //  	);
	
		$(document).keydown(function(key) {
			console.log(key.which);
			switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
			$('img').animate({left: "-=10px"}, 'fast');
			console.log('left');
			break;
			// Up Arrow Pressed
			case 38:
			$('img').animate({top: "-=10px"}, 'fast');
			console.log('up');
			break;
			// Right Arrow Pressed
			case 39:
			$('img').animate({left: "+=10px"}, 'fast');
			console.log('right');
			break;
			// Down Arrow Pressed
			case 40:
			$('img').animate({top: "+=10px"}, 'fast');
			console.log('down');
			break;
			}
		});

	});

function show()
{
	$('#link-home').show();
}
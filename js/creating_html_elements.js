$(document).ready(function()
{
    // $('#one').after('<p>Trololololo</p>');
    // $('#two').after($('p'));
    // $('p').remove();

    // $('#text').click(function()
    // 	{
    // 		$(this).toggleClass('highlighted');
    // 	});

	// $('div').css('height', 200);
	// $('div').width(200);
	// $('div').css('border-radius', 10);

	// $('p').click(function()
	// 	{
	// 		$(this).html('JQuery magic in action');
	// 	});

	// .val() returns value of a form element like if an input had a val
	// .html()


	
	$('#button').click(function()
    {
    	$('.list').sortable();

        var toAdd = $('input[name=checkListItem]').val();
	        $('.list').prepend('<div class="item">' + toAdd +'</div>');
	    	});


		$(document).on('click', '.item', function()
			{
				$(this).remove();
			});

});

//use this in the page terminal to test connection to the javascript file.
var test = "Hello World!";

function show ()
{
	$('#link-home').show();
}






/*

These two script lines are used for loading JQuery from the web and my js file

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

<script type="text/javascript" src="js/creating_html_elements.js"></script>

*/

//general event handler
/*
$(document).on('event', 'selector', function(){});
*/


/*

.val() returns value of a form element like if an input had a val
.html() reuturns the html of the target element and sets the HTML if given HTML as a string argument
.empty() 
*/
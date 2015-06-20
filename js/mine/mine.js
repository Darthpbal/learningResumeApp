$(document).ready(function()
	{
		for(var page in master.pages)
		{
			$("#sidebar").append(formatLink(master.pages[page]));
		}
	});



var master = {
	"pages" : {
		"chkTest" : {
			"name" : "Check Box Test",
			"location" : "old-index-and-experiments/chktest.html",
		},
		"crtHtmlElmnts" : {
			"name" : "Create HTML Elements",
			"location" : "old-index-and-experiments/creating_html_elements.html",
		},
		"exmplack" : {
			"name" : "Example Acknowledgement",
			"location" : "old-index-and-experiments/example_ack.html",
		},
		"oldInex" : {
			"name" : "Old Index",
			"location" : "old-index-and-experiments/index.html",
		},
		"jqueryEvents" : {
			"name" : "jQuery Events",
			"location" : "old-index-and-experiments/jquery_events.html",
		},
		"newPage" : {
			"name" : "New Page",
			"location" : "old-index-and-experiments/newpage.html",
		},
		"dadsPage" : {
			"name" : "Dads Page",
			"location" : "pages/dads_page.html",
		},
	},
	"show" : function()
	{
		console.log("Hello World.");
	}
}

    //////////////////////////////////////////////////////////////
   //////////////////               /////////////////////////////
  //////////////////   Functions   /////////////////////////////
 //////////////////               /////////////////////////////
//////////////////////////////////////////////////////////////


function formatLink(page)
{
	var formattedLink = listLinkTemplate.replace("%name%", page.name);
	formattedLink = formattedLink.replace("%loc%", page.location);
	return formattedLink;
}

    //////////////////////////////////////////////////////////////
   //////////////////               /////////////////////////////
  //////////////////   Templates   /////////////////////////////
 //////////////////               /////////////////////////////
//////////////////////////////////////////////////////////////


var listLinkTemplate = '<li><a href="%loc%">%name%</a></li>';

$(document).ready(function()
	{
		pageBuilder();
		$(page).addClass('active');	
		populateImgTable(img, page);	
	});




///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



function home()
{
	$('body').prepend('<a href="../../index.html">Home</a>');
}

function pageBuilder()
{
	$('body').prepend('<div id="navigation" role="navigation" class="col-lg-2 well"></div>');
	$('body').prepend('<div class="jumbotron"><h1>Happy Fathers Day Dad!</h1></div>');
	$('#navigation').prepend('<div id="navigation-title"><strong>Navigation</strong></div>');
	$('#navigation').append('<ul id="navigation-body" class="nav nav-pills nav-stacked"></ul>');
	for(var page in pages)
		{
			$("#navigation-body").append(formatListLink(pages[page]));
		}
}

function populateImgTable(imgObj, page)
{
	var rowCount = 0;
	var collectionName = "";
	for(var i = 0; i<page.length; i++)
	{
		if(page.charAt(i) == "#")continue;
		collectionName = collectionName.concat(page.charAt(i));
	}
	for (var i = 0; i<imgObj[collectionName].length; i++)
	{
		if((rowCount%3 == 0) || (rowCount == 0))
		{
			$('table').append(tableRow);
		}
		$('tr').last().append(formatTableImg(imgObj[collectionName][i]));
		rowCount++;
	}
}


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

function formatListLink(linkObj)
{
	var id = "";
	for(var i = 0; i<linkObj.location.length; i++)
	{
		if(linkObj.location.charAt(i) == ".")break;
		id = id.concat(linkObj.location.charAt(i));
	}
	var formattedLink = listLinkTemplate.replace("%name%", linkObj.name);
	formattedLink = formattedLink.replace("%loc%", linkObj.location);
	formattedLink = formattedLink.replace("%id%", id);
	return formattedLink;
}

function formatTableImg(imgLoc)
{
	var formattedTableImg = imgTemplate.replace("%loc%", imgLoc);
	formattedTableImg = formatTableData(formattedTableImg);
	return formattedTableImg;
}

function formatTableData(data)
{
	formattedTableData = tableDataTemplate.replace("%data%", data);
	return formattedTableData;
}

function formatLink(loc, data)
{
	var formattedLink = linkTemplate.replace("%data%", data);
	formattedLink = formattedLink.replace("%loc%", loc);
	return formattedLink;
}


var listLinkTemplate = '<li id="%id%" role="presentation"><a href="%loc%">%name%</a></li>';
var linkTemplate = '<a hrf="%loc%">%data%</a>';
var imgTemplate = '<img src="%loc%" class="img-responsive img-thumbnail" alt="Responsive image">';
var tableRow = '<tr></tr>';
var tableDataTemplate = '<td>%data%</td>';



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

var img = {
	"theboys" : [
		"img/theboys/1.jpg",
		"img/theboys/2.jpg",
		"img/theboys/3.jpg",
		"img/theboys/4.jpg",
		"img/theboys/5.jpg",
		"img/theboys/6.jpg",
		"img/theboys/7.jpg",
		"img/theboys/8.png",
		"img/theboys/9.png",
		"img/theboys/10.jpg",
		"img/theboys/11.jpg",
		"img/theboys/12.jpg",
		"img/theboys/13.jpg",
		"img/theboys/14.jpg",
		"img/theboys/15.jpg"
	],
	"thekids" : [
		"img/thekids/1.jpg",
		"img/thekids/2.jpg",
		"img/thekids/3.jpg",
		"img/thekids/4.png",
		"img/thekids/5.jpg",
		"img/thekids/6.jpg",
		"img/thekids/7.jpg",
		"img/thekids/8.jpg",
		"img/thekids/9.jpg",
		"img/thekids/10.jpg",
		"img/thekids/11.jpg",
		"img/thekids/12.jpg",
		"img/thekids/13.jpg",
		"img/thekids/14.jpg",
		"img/thekids/15.jpg"
	],
	"thedogs" : [
		"img/thedogs/1.jpg",
		"img/thedogs/2.png",
		"img/thedogs/3.jpg",
		"img/thedogs/4.jpg",
		"img/thedogs/5.jpg",
		"img/thedogs/6.jpg",
		"img/thedogs/7.jpg",
		"img/thedogs/8.jpg"
	],
	"momanddad" : [
		"img/momanddad/1.jpg",
		"img/momanddad/2.jpg",
		"img/momanddad/3.jpg",
		"img/momanddad/4.jpg",
		"img/momanddad/5.jpg",
		"img/momanddad/6.jpg",
		"img/momanddad/7.jpg",
		"img/momanddad/cliff.png"
	],
	"dads_page" : "",
}

var pages = {
	"home" : {
		"name" : "Home",
		"location" : "dads_page.html",
	},
	"theboys" : {
		"name" : "The Boys",
		"location" : "theboys.html",
	},
	"thekids" : {
		"name" : "The Kids",
		"location" : "thekids.html",
	},
	"thedogs" : {
		"name" : "The Hounds",
		"location" : "thedogs.html",
	},
	"momanddad" : {
		"name" : "The Family",
		"location" : "momanddad.html",
	},
	"theend" : {
		"name" : "The End",
		"location" : "theend.html",
	},	
}
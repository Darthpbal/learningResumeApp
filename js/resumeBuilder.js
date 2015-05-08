var bio = {
    "name" : "Paul Ronquillo",
    "role" : "Electrical Engineering Student",
    "contact" : {
        "mobile" : "6237030508",
        "email" : "Ronquillo.Paul@gmail.com",
        "home" : "8154w whyman ave"
    },
    "pic" : "http://upload.wikimedia.org/wikipedia/commons/e/ec/Silego_clock_generator.JPG",
    "welcome" : "Welcome to my resume website. Please, Make yourself at homepage...",
    "skills" : [
        "eating",
        "knowing stuff about music",
        "explaining things",
        "electronics",
        "leadership",
        "Computer literate",
        // "Code monkey",
        // "Soldering",
        // "Good with a pair of pliers",
        // "Great at smoking weed",
        // "Soldering",
        // "Good with a pair of pliers",
        // "Soldering",
        // "Good with a pair of pliers",
        // "Soldering",
        // "Good with a pair of pliers",
        // "Soldering",
        // "Good with a pair of pliers",
        // "Soldering",
        // "Good with a pair of pliers",
        // "Soldering",
        // "Good with a pair of pliers",
        // "Soldering",
        // "Good with a pair of pliers",
        // "Soldering",
        // "Good with a pair of pliers",
        // "Soldering",
        // "Good with a pair of pliers",
        // "Soldering",
        // "Good with a pair of pliers",
        // "Soldering",
        // "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers"
    ]
};

var work = {
    "jobs" : [
    {
        "employer" : "chessemp",
        "title" : "chess coach",
        "location" : "scottsdale",
        "dates" : "some time to some time",
        "description" : "I got paid to suck at chess for a while",
        "link" : "newpage.html"
    },
    {
        "employer" : "phoenix college a&R",
        "title" : "phone answereer",
        "location" : "phoenix",
        "dates" : "some time to some time",
        "description" : "I talked to stupid people on the phone",
        "link" : "images/fry.jpg"
    },
    {
        "employer" : "pc IT",
        "title" : "codemonkey",
        "location" : "phoenix",
        "dates" : "now",
        "description" : "Get paid a lot of money to suck at programming.",
        "link" : "images/fry.jpg"
    }
    ]
};

var education = {
    "school" : [
        {
            "name" : "Bioscience",
            "city" : "Phoenix",
            "major" : "Engineering",
            "degree" : "High School Diploma",
            "gradYear" : "2010"
        },
        {
            "name" : "Phoenix Community College",
            "city" : "Phoenix",
            "major" : "General",
            "degree" : "transfer",
            "gradYear" : "2015"
        },
        {
            "name" : "Estrella Mountain",
            "city" : "Phoenix",
            "major" : "General",
            "degree" : "transfer",
            "gradYear" : "2015"
        },
        {
            "name" : "Arizona State University",
            "city" : "Tempe",
            "major" : "Electrical Engineering",
            "degree" : "BA",
            "gradYear" : "2017"
        }
    ],
    "onlineCourses" : [
        "Javascript basics",
        "Udacity",
        "25",
        "udacity.com"
    ]
};

var projects = {
    "projects" : [
    {
        "title" : "Sapphire Tracker",
        "dates" : "9/20/14",
        "description" : "m for their company vehicles.",
        "images" : "http://www.sapphiretech.com/images/sapphire_corporate_logo.jpg",
    },
    {
        "title" : "Flash drive note taking & organizing app",
        "dates" : "not long ago",
        "description" : "Basicallyning your workspace.",
        "images" : "http://iblog.dearbornschools.org/harrison/wp-content/uploads/sites/670/2013/12/taking_notes.jpg"
    },
    {
        "title" : "Reel Steel Simple Arm",
        "dates" : "uggghhhh",
        "description" : "simple arm",
        "images" : "http://www.dreamworksstudios.com/files/rs_1sht_payoff-web.jpg"
    },
    {
        "title" : "Ormerod 2",
        "dates" : "kjsugh   ",
        "description" : "sgcflflkn  ",
        "images" : "https://reprappro.com/wp-content/uploads/2014/05/ORM2-complete_small.png"
    }
    ]
};

// ==================================================================================================

//Setting up functions

//Here is my displaywork function
var displayWork = function(){

    //Here my work experience is added to the page
    for (job in work.jobs) {// note that here job is the index of the array index number in the jobs array
        $("#workExperience").append(HTMLworkStartMod.replace("#",work.jobs[job].link));

        //this section handles general formatting the object data into HTML to append fluidly later
        var formattedEmployer = HTMLworkEmployerMod.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitleMod.replace("%data%",work.jobs[job].title);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].dates);

        //These line actually add the formatted data and adds it to the page element
        $(".workLink:last").append(formattedEmployer + formattedTitle);
        $(".workLink:last").append(formattedLocation);
        $(".workLink:last").append(formattedDatesWorked);
        $(".workLink:last").append(formattedWorkDescription);
    };
}

//This is my click logging function used to log click locations from the user.
function logClicks(x,y){
    console.log("x location: " + x + "; " + "y location: " + y);
}

//===================================================================================================

//Page Construction

$("#main").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#main").prepend(HTMLheaderName.replace("%data%", bio.name));

//This checks to see if I have skills, and then adds it to the page if I do.
if(bio.skills.length > 0)
{
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i<bio.skills.length; i++ ) {
        $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
    };
}


displayWork();

//this runs every time the user clicks somewhere on the page
$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});
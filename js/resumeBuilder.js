var bio = {
    "name" : "Paul Ronquillo",
    "role" : "Electrical Engineering Student",
    "contacts" : {
        "mobile" : "6237030508",
        "email" : "Ronquillo.Paul@gmail.com",
        "location" : "8154w whyman ave",
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
        "Code monkey",
        "Soldering",
        "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers",
        "Soldering",
        "Good with a pair of pliers"
    ],
    "displaySkills" : function()
    {
        for (var i = 0; i<bio.skills.length; i++ ) {
        $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
    };
    }
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
    ],
    "locationizor" : function(workObj) 
    {
        var locationArray = [];
        for(var job in workObj.jobs)
        {
            locationArray.push(workObj.jobs[job].location);
        }
        return locationArray;
    },
    "display" : function(workObj)
    {
        //Here my work experience is added to the page
        for (job in work.jobs) 
        {// note that here job is the index of the array index number in the jobs array
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
        }
    }
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
        "images" : [
            "http://www.sapphiretech.com/images/sapphire_corporate_logo.jpg",
            "http://iblog.dearbornschools.org/harrison/wp-content/uploads/sites/670/2013/12/taking_notes.jpg",
            "http://www.dreamworksstudios.com/files/rs_1sht_payoff-web.jpg",
            "https://reprappro.com/wp-content/uploads/2014/05/ORM2-complete_small.png"
        ]
    },
    {
        "title" : "Flash drive note taking & organizing app",
        "dates" : "not long ago",
        "description" : "Basicallyning your workspace.",
        "images" : [
            "http://www.sapphiretech.com/images/sapphire_corporate_logo.jpg",
            "http://iblog.dearbornschools.org/harrison/wp-content/uploads/sites/670/2013/12/taking_notes.jpg",
            "http://www.dreamworksstudios.com/files/rs_1sht_payoff-web.jpg",
            "https://reprappro.com/wp-content/uploads/2014/05/ORM2-complete_small.png"
        ]
    },
    {
        "title" : "Reel Steel Simple Arm",
        "dates" : "uggghhhh",
        "description" : "simple arm",
        "images" : [
            "http://www.sapphiretech.com/images/sapphire_corporate_logo.jpg",
            "http://iblog.dearbornschools.org/harrison/wp-content/uploads/sites/670/2013/12/taking_notes.jpg",
            "http://www.dreamworksstudios.com/files/rs_1sht_payoff-web.jpg",
            "https://reprappro.com/wp-content/uploads/2014/05/ORM2-complete_small.png"
        ]
    },
    {
        "title" : "Ormerod 2",
        "dates" : "kjsugh   ",
        "description" : "sgcflflkn  ",
        "images" : [
            "http://www.sapphiretech.com/images/sapphire_corporate_logo.jpg",
            "http://iblog.dearbornschools.org/harrison/wp-content/uploads/sites/670/2013/12/taking_notes.jpg",
            "http://www.dreamworksstudios.com/files/rs_1sht_payoff-web.jpg",
            "https://reprappro.com/wp-content/uploads/2014/05/ORM2-complete_small.png"
        ]
    }
    ],
    "display" : function()
    {
        for (var project in projects.projects)
        {
            $('#projects').append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
            $('.project-entry:last').append(formattedTitle);
            $('.project-entry:last').append(formattedDates);
            $('.project-entry:last').append(formattedDescription);
            for (var image in projects.projects[project].images)
            {
                var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
                //The following line is commented out because the random imgages I chose are way too large
                // $('.project-entry:last').append(formattedImage);
            }
        }
    }
};



// ==================================================================================================

//Setting up functions


function inName(name)
{
    var nameArray = bio.name.split(' ');  // Plit up the name into an array of first name and last name
    return nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase() + " " + nameArray[1].toUpperCase();  // return the formatted name
}


//This is my click logging function used to log click locations from the user.
function logClicks(x,y){
    console.log("x location: " + x + "; " + "y location: " + y);
}


//===================================================================================================

//Console logging

// $(document).click(function(loc){
//     var x = loc.pageX;
//     var y = loc.pageY;
//     logClicks(x,y);
// });

// $(document).click(function(loc) 
//     {
//         console.log(loc.pageX, loc.pageY);
//     }
// );

console.log(work.locationizor(work));

//====================================================================================================

//Page Construction

$("#main").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#main").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#mapDiv").append(googleMap);
// for(var location in work.locationizor(work))
// {
//     $("#map").append(location);
// }

//This checks to see if I have skills, and then adds it to the page if I do.
if(bio.skills.length > 0)
{
    $("#header").append(HTMLskillsStart);
    bio.displaySkills();
}

work.display();
projects.display();
$('#main').append(internationalizeButton);


// $("#checkkBoxId").prop('checked') ? console.log("Checked") : console.log("Unchecked");
// $('#checkkBoxId').click(function(){
//     console.log('Activated!!!');
//     if($(this).prop('checked'))
//     {
//         console.log('checked');
//     }
//     else{
//         console.log('unchecked');
//     }
// });

// $("#checker").click('checkbox', function()
// {
//     console.log('Activated');
//     console.log($(this).prop('checked'));
//     if($(this).prop('checked'))
//     {
//         $('.desc').show();
//     }
//     else{
//         $('.desc').hide();   
//     }
// } );

// $("ul.level-3").children().css('background-color', 'red');

// $(".container").click('one', function()
// {
//     console.log('Working...');
//     console.log($(this).prop('checked'));
// });

/*
<div id="checker">
  <input type="checkbox" class="checkbox">
  <div class="desc" style="display:none;">I am a description</div>
</div>
*/

$(".mainContainer").on('click', 'input[id^=other]', function()
    {
        console.log($(this).prop('checked'));
        if($(this).prop('checked'))
        {
            $(this).parent().parent().parent().parent().parent().children().last().show();
        }else{
            $(this).parent().parent().parent().parent().parent().children().last().hide();
        }
        
        // $(this).parent().parent().parent().parent().hide();
    });
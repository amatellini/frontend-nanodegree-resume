var bio = {
    "name": "Andrea Matellini",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "andrea.matellini@gmail.com",
        "github": "https://github.com/amatellini",
        "linkedin": "https://it.linkedin.com/in/andrea-matellini-3bb804b",
        //"twitter": "",
        "location": "Pavia, Italy"
    },
    "welcomeMessage": "Hi there, my name is Andrea and this is my online resume!",
    "skills": [
        "Java", "HTML/CSS/JS", "C/C++", "SQL"
    ],
    "biopic": "images/myAvatar.png"
};

var education = {
    "schools": [{
        "name": "ITIS G. Cardano",
        "location": "Pavia, Italy",
        "degree": "High School Diploma",
        "majors": [
            "Perito Informatico"
        ],
        "dates": "",
        "url": ""
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016 - in progress",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var work = {
    "jobs": [{
        "employer": "Sirio Informatica e Sistemi SPA",
        "title": "Software Developer",
        "location": "Pavia, Italy",
        "dates": "2012 - in progress",
        "description": ""
    }, {
        "employer": "Gesp Srl",
        "title": "Software Analyst",
        "location": "Milano, Italy",
        "dates": "2010 - 2012",
        "description": ""
    }, {
        "employer": "Polaris Srl",
        "title": "Software Engineer",
        "location": "Milano, Italy",
        "dates": "2007 - 2010",
        "description": ""
    }, {
        "employer": "Integra Srl",
        "title": "Software Developer",
        "location": "Pavia, Italy",
        "dates": "2004 - 2007",
        "description": ""
    }]
};


var projects = {
    "projects": [{
        "title": "PaperNG",
        "dates": "2012 - in progress",
        "description": "Progetto 123",
        "images": []
    }, {
        "title": "Continuo",
        "dates": "2010 - 2012",
        "description": "Progetto 123",
        "images": []
    }]
};


bio.display = function() {

	var gitHubName = bio.contacts.github.replace("https://github.com/", "");
	var gitHubLink = "<a href=" + bio.contacts.github + " style=\"display: inherit\">" + gitHubName + "</a>";
	var formattedGitHub = HTMLgithub.replace("%data%", gitHubLink);

    var mailTo = "<a href=mailto:" + bio.contacts.email + " style=\"display: inherit\">" + bio.contacts.email + "</a>";

	$("#header")
        .prepend(HTMLheaderRole.replace("%data%", bio.role))
        .prepend(HTMLheaderName.replace("%data%", bio.name))
        .append(HTMLbioPic.replace("%data%", bio.biopic))
        .append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	var topContacts = $("#topContacts");
    topContacts.append(HTMLmobile.replace("%data%", bio.contacts.mobile))
                .append(HTMLemail.replace("%data%", mailTo))
                .append(formattedGitHub);

    if (typeof bio.contacts.twitter !== "undefined") {
        topContacts.append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    }

    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var i = 0; i < bio.skills.length; i ++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
};

work.display = function() {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);

        $(".work-entry:last")
            .append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title))
            .append(HTMLworkLocation.replace("%data%", job.location),
                    HTMLworkDates.replace("%data%", job.dates),
                    HTMLworkDescription.replace("%data%", job.description));
    });
};

projects.display = function() {
	projects.projects.forEach(function(project){
		$("#projects").append(HTMLprojectStart);

		$(".project-entry:last")
            .append(HTMLprojectTitle.replace("%data%", project.title))
            .append(HTMLprojectDates.replace("%data%", project.dates))
            .append(HTMLprojectDescription.replace("%data%", project.description));
            // forEach image .append(HTMLprojectImage.replace("%data%", project.images))
	});
};

education.display = function() {

    $("#education").append(HTMLschoolStart);
	education.schools.forEach(function(school){
        $(".education-entry:last")
            .append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree))
            .append(HTMLschoolDates.replace("%data%", school.dates))
            .append(HTMLschoolLocation.replace("%data%", school.location));
        // forEach .append(HTMLschoolMajor.replace("%data%", school.majors));
	});

    $("#education").append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(course){
        $("#online-classes").append(HTMLschoolStart);

        $(".education-entry:last")
            .append(HTMLonlineTitle.replace("%data%", course.title + " " + HTMLonlineSchool.replace("%data%", course.school)))
            .append(HTMLonlineDates.replace("%data%", course.dates))
            .append(HTMLonlineURL.replace("%data%", course.url).replace("#", course.url));
	});
};

function displayFooter() {
    var letsConnect = $('#lets-connect');
    var mailTo = "<a href=mailto:" + bio.contacts.email + " style=\"display: inherit\">" + bio.contacts.email + "</a>";
    var linkedinLink = "<a href=" + bio.contacts.github + " style=\"display: inherit\">" + bio.contacts.linkedin + "</a>";

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", mailTo);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLinkedinLink = HTMLlinkedin.replace("%data%", linkedinLink);

    letsConnect.append(formattedMobile, formattedEmail, formattedLinkedinLink);

    if (typeof bio.contacts.twitter !== "undefined") {
        letsConnect.append(formattedTwitter);
    }
}

function displayMap() {
    $("#mapDiv").append(googleMap);
}

bio.display();
work.display();
projects.display();
education.display();
displayFooter();
displayMap();

//TODO
// 1) complete all json object
// 2) add more elemente in array object
// 3) manage twitter optional field (also on footer) --> ok
// 4) add images where required (placeholder or kittens)
// 5) bootstrap and navbar ?
// 6) add some css
// 7) lint and beautify html/css/js
// 8) enable google maps visualizing the various locations --> ok
// 9) verify project subscription rules
// 10) manage if attribute exist then ?
// 11) test empty arrays
// 12) manage link as href in footer and mail as "mail to" --> ok
// 13) check doc for display: inherit
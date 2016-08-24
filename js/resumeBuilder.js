var bio = {
    "name": "Andrea Matellini",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "andrea.matellini@gmail.com",
        "github": "https://github.com/amatellini",
        "twitter": "",
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
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": "2016 - in progress",
        "url": "www.udacity.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "Sirio Informatica e Sistemi SPA",
        "title": "Software Developer",
        "location": "Pavia, PV",
        "dates": "2012 - in progress",
        "description": ""
    }, {
        "employer": "Gesp Srl",
        "title": "Software Analyst",
        "location": "Milano, MI",
        "dates": "2010 - 2012",
        "description": ""
    }, {
        "employer": "Polaris Srl",
        "title": "Software Engineer",
        "location": "Milano, MI",
        "dates": "2007 - 2010",
        "description": ""
    }, {
        "employer": "Integra Srl",
        "title": "Software Developer",
        "location": "Pavia, PV",
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

	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role))
	            .prepend(HTMLheaderName.replace("%data%", bio.name))
                .append(HTMLbioPic.replace("%data%", bio.biopic))
                .append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile))
	                    .append(HTMLemail.replace("%data%", bio.contacts.email))
	                    .append(formattedGitHub)
                        .append(HTMLlocation.replace("%data%", bio.contacts.location));


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

        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) +
            " " +
            HTMLworkTitle.replace("%data%", job.title));

        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location) +
            " " +
            HTMLworkDates.replace("%data%", job.dates) +
            " " +
            HTMLworkDescription.replace("%data%", job.description));
    });
};

projects.display = function() {
	projects.projects.forEach(function(project){
		$("#projects").append(HTMLprojectStart);

		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title))
                                .append(HTMLprojectDates.replace("%data%", project.dates))
		                        .append(HTMLprojectDescription.replace("%data%", project.description));
	});
};

education.display = function() {
	education.schools.forEach(function(school){

	});

	education.onlineCourses.forEach(function(course){

	});
};

bio.display();
work.display();
projects.display();
education.display();
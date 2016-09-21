var bio = {
  "name": "Andrea Matellini",
  "role": "Web Developer",
  "contacts": {
    "mobile": "650-555-5555",
    "email": "andrea.matellini@gmail.com",
    "github": "https://github.com/amatellini",
    "linkedin": "https://it.linkedin.com/in/andrea-matellini-3bb804b",
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
    "dates": "1994-1999",
    "url": "http://www.cardano.pv.it"
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
    "dates": "May 2012 - in progress",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non condimentum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ornare neque eu dapibus semper."
  }, {
    "employer": "Gesp Srl",
    "title": "Software Analyst",
    "location": "Milano, Italy",
    "dates": "April 2010 - April 2012",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non condimentum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ornare neque eu dapibus semper."
  }, {
    "employer": "Polaris Srl",
    "title": "Software Engineer",
    "location": "Milano, Italy",
    "dates": "May 2007 - March 2010",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non condimentum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ornare neque eu dapibus semper."
  }, {
    "employer": "Integra Srl",
    "title": "Software Developer",
    "location": "Pavia, Italy",
    "dates": "June 2004 - April 2007",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non condimentum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ornare neque eu dapibus semper."
  }]
};


var projects = {
  "projects": [{
    "title": "PaperNG",
    "dates": "May 2012 - in progress",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non condimentum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ornare neque eu dapibus semper.",
    "images": ["images/scatole1.jpg"],
    "url": "http://www.paperng.it/en/"
  }, {
    "title": "Continuo",
    "dates": "April 2010 - April 2012",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non condimentum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ornare neque eu dapibus semper.",
    "images": ["images/galsi-gasdotto.jpg"],
    "url": "http://www.gesp.it/en/"
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

  if (bio.contacts.twitter.trim().length > 0) {
    topContacts.append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  }

  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }
};

work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);

    $(".work-entry:last")
      .append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title))
      .append(HTMLworkLocation.replace("%data%", job.location),
        HTMLworkDates.replace("%data%", job.dates),
        HTMLworkDescription.replace("%data%", job.description));
  });
};

projects.display = function() {
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);

    $(".project-entry:last")
      .append(HTMLprojectTitle.replace("%data%", project.title))
      .append(HTMLprojectDates.replace("%data%", project.dates))
      .append(HTMLprojectDescription.replace("%data%", project.description));

    project.images.forEach(function(image) {
      var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
      $(".project-entry:last").append(formattedProjectImage);
    });
  });
};

education.display = function() {

  if (education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {
      $(".education-entry:last")
        .append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree))
        .append(HTMLschoolDates.replace("%data%", school.dates))
        .append(HTMLschoolLocation.replace("%data%", school.location));
      // forEach .append(HTMLschoolMajor.replace("%data%", school.majors));
    });
  }

  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
      $("#education").append(HTMLschoolStart);

      $(".education-entry:last")
        .append(HTMLonlineTitle.replace("%data%", course.title + " " + HTMLonlineSchool.replace("%data%", course.school)))
        .append(HTMLonlineDates.replace("%data%", course.dates))
        .append(HTMLonlineURL.replace("%data%", course.url).replace("#", course.url));
    });
  }
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

  if (bio.contacts.twitter.trim().length > 0) {
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
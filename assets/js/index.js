$('[data-toggle="tooltip"]').tooltip()

var Project = function(title,problem,tech,github,liveLink){
    this.title = title,
    this.problem = problem,
    this.tech = tech,
    this.github = github,
    this.liveLink = liveLink
}

Project.prototype.changeModal = function(){
    $('.project-title').text(this.title)
    $('.project-problem').text(this.problem)
    $('.project-tech').empty();
    this.tech.forEach(function(element){
        var TechLI = $("<li>");
        TechLI.text(element);
        $('.project-tech').append(TechLI)
    });
    $('.modal-github').attr('href',this.github);

    if(this.liveLink){
        $('.modal-live').attr('href',this.liveLink)
        $('.modal-live').show();
    }
    else{
        $('.modal-live').hide();
    }
    $()
}

var burgerTime = new Project(
    "Burger Time",
    "Burger Time was created to showcase my new skills with creating a proper full-stack application",
    ["Html", "Bootstrap", "mySQL","Express","jQuery","Handlebars"],
    "https://github.com/Bburch05/burger-time",
    "https://floating-plateau-55265.herokuapp.com/"
    );

var bamazon = new Project(
    "Bamazon",
    "Bamazon was created to showcase my new skills in being able to create a server",
    ["Node","mySQL","Express"],
    "https://github.com/Bburch05/mySQLnodeStore",
    ""
)

var gifTastic = new Project(
    "GifTastic",
    "GifTastic was created to showcase my new skills using jQuery to make API calls",
    ["HTML","Bootstrap","CSS","jQuery","Giphy API"],
    "https://github.com/Bburch05/GifTastic",
    "https://bburch05.github.io/GifTastic/"
)

var aCommons = new Project(
    "Atlanta Commons",
    "Atlanta Commons is a Full-Stack Application designed to inform local communities about Events and Issues in their area. In a team of four people, I was responsible for the back-end server routing and Schema setup using a Node Express.js Server using a mySQL database and assisted with front-end Handlebars.js work in a team of four web developers. ",
    ["Express","Handlebars.js","Javascript", "MySQL"],
    "https://github.com/Bburch05/atlanta-commons",
    "https://polar-reef-55327.herokuapp.com/"
)

var memorySearch = new Project(
    "Spirit Circle Memory Match",
    "This app was created to showcase my ability to create a front-end React Application",
    ["React"],
    "https://github.com/Bburch05/ReactClickMemory",
    "https://bburch05.github.io/ReactClickMemory/"
)


var projects = [burgerTime,bamazon,gifTastic,aCommons,memorySearch];


$('.project-info').on('click',function(){
    var projectID = $(this).data('value');
    projects[projectID].changeModal();
    $("#project").modal("toggle");
})
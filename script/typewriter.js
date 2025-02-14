document.addEventListener('DOMContentLoaded', function() {
    var app = document.getElementById('typewriter');

    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 75,
    });

    typewriter
        .pauseFor(1000)
        .typeString('ML/AI Enthusiast')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Developer')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Software Engineer')
        .pauseFor(2000)
        .start();
});
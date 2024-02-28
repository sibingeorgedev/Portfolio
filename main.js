document.addEventListener('DOMContentLoaded', function () {
    var tabLabels = document.querySelectorAll('.tab_label');
    var indicator = document.querySelector('.indicator');

    function updateIndicatorPosition(index) {
        indicator.style.left = index * 130 + 2 + 'px';
    }

    tabLabels.forEach(function (label, index) {
        label.addEventListener('click', function () {
            var targetId = label.getAttribute('data-target');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                updateIndicatorPosition(index);
            }
        });
    });

    function onScroll() {
        var sections = document.querySelectorAll('section');
        var scrollPosition = window.scrollY;

        sections.forEach(function (section, index) {
            var sectionTop = section.offsetTop - 100; // Adjust the offset as needed
            var sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                updateIndicatorPosition(index);
            }
        });
    }

    window.addEventListener('scroll', onScroll);

    updateIndicatorPosition(0);
});

// document.addEventListener('DOMContentLoaded', function () {
//     var tabLabels = document.querySelectorAll('.tab_label');
//     var indicator = document.querySelector('.indicator');
//     window.addEventListener('scroll', function () {
//         var windowHeight = window.innerHeight;
//         tabLabels.forEach(function (label, index) {
//             var targetId = label.getAttribute('data-target');
//             var targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 var rect = targetElement.getBoundingClientRect();
//                 if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
//                     indicator.style.left = index * 130 + 2 + 'px';
//                 }
//             }
//         });
//     });
// });

document.getElementById("downloadButton").addEventListener("click", function () {
    const a = document.createElement("a");
    a.href = "./assests/Sibin Resume.pdf";
    a.target = "_blank";
    a.download = "Sibin_Resume.pdf";
    a.click();
});

function redirectToFacebook() {
    var facebookUrl = 'https://www.facebook.com/sibin.george.779';
    window.open(facebookUrl, '_blank');
}

function redirectToGit() {
    var githubUrl = 'https://github.com/sibingeorgedev';
    window.open(githubUrl, '_blank');
}

function redirectToLinkdln() {
    var linkdlnUrl = 'https://www.linkedin.com/in/sibin-george/';
    window.open(linkdlnUrl, '_blank');
}

function redirectToInstgram() {
    var linkdlnUrl = 'https://www.instagram.com/sibin__george/';
    window.open(linkdlnUrl, '_blank');
}

function redirectToTwitter() {
    var linkdlnUrl = 'https://www.linkedin.com/in/sibin-george/';
    window.open(linkdlnUrl, '_blank');
}
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

scrollReveal.reveal('.home_data', {});
scrollReveal.reveal('.home-section__img, .about-section__subtitle, .about-section__text, .skills-section__img, .delay', { delay: 200 });

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("textarea").value;
    if (!name || !email || !message) {
        return;
    }
    var subject = encodeURIComponent(name + " - Inquiry");
    var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
    var mailtoLink = "mailto:sibingeorge009@gmail.com?subject=" + subject + "&body=" + body;
    window.location.href = mailtoLink;
}
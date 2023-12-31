document.addEventListener('DOMContentLoaded', function () {
    var tabLabels = document.querySelectorAll('.tab_label');
    tabLabels.forEach(function (label) {
        label.addEventListener('click', function () {
            var targetId = label.getAttribute('data-target');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

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
scrollReveal.reveal('.home-section__img, .about-section__subtitle, .about-section__text, .skills-section__img', { delay: 400 });

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("textarea").value;

    var subject = encodeURIComponent(name + " - Inquiry");
    var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
    var mailtoLink = "mailto:sibingeorge009@gmail.com.com?subject=" + subject + "&body=" + body;

    window.location.href = mailtoLink;
}

function toggleNav() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function handleNavClick(event) {
    event.preventDefault();
    
    var x = document.getElementById("myNavbar");
    if (x.className.includes("responsive")) {
        x.className = "navbar";
    }
    
    var targetId = event.target.closest('a').getAttribute("href").substring(1);
    var targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        targetElement.scrollIntoView({behavior: "smooth"});
    } else {
        console.log("Navigasi ke: " + targetId);
        
    }
}

function keIg() {
  window.location.href="https://www.instagram.com/riparchivee";
}
function keGit() {
  window.location.href="https://github.com/Riparchivee";
}
function keX() {
  window.location.href="https://twitter.com/Riparchivee";
}

//navbar
const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.navbar a[href="#${id}"]`);

            if (entry.isIntersecting) {
               
                navLink.classList.add('active');
            } else {

                navLink.classList.remove('active');
            }
        });
    }, {
        threshold: 0.5 
    });


    sections.forEach(section => {
        observer.observe(section);
    });
    
    
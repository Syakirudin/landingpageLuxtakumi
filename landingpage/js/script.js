function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px; ";
});


document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");

    // Function to handle smooth scrolling
    function smoothScroll(target) {
        const offset = 60; // Adjust this value as needed
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });
    }

    // Add click event listeners to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            const targetClass = this.getAttribute("data-target"); // Get the data-target attribute

            const targetSection = document.querySelector(`.section[data-id="${targetClass}"]`);

            if (targetSection) {
                smoothScroll(targetSection);
            }
        });
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}









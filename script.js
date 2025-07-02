// dorkmode 
function darkmode() {
    let setTheme = document.body;
    setTheme.classList.toggle("darkmode");
}

document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        const elements = document.querySelectorAll(".up-reveal");
        const windowHeight = window.innerHeight;

        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100; // Adjust to change when animation triggers

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add("visible");
            } else {
                element.classList.remove("visible"); // Remove for reset effect
            }
        });
    }

    // Run the function on scroll and load
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check on page load
});


  document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal(".up-reveal", {
        distance: "50px",
        origin: "bottom",
        duration: 1400,
        interval: 100,
    });
});



// scroll top 
let scrolltop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrolltop.classList.toggle('active', window.scrollY > 0);
});



// see more btn 
const more = document.getElementById('more')
const btn_seemore = document.getElementById('seemore')
const btn_seeless = document.getElementById('seeless')

function seemore() {
    more.style.display = "grid"
    btn_seeless.style.display = 'block'
    btn_seemore.style.display = 'none'
}
function seeless() {
    more.style.display = "none"
    btn_seeless.style.display = 'none'
    btn_seemore.style.display = 'block'
}


document.querySelectorAll('.project-img').forEach(function (imgContainer) {
    const video = imgContainer.querySelector('.project-video');

    imgContainer.addEventListener('mouseover', function () {
        if (video) {
            video.play();
        }
    });

    // imgContainer.addEventListener('mouseleave', function () {
    //     if (video) {
    //         video.pause();
    //         video.currentTime = 0; // Reset to the start
    //     }
    // });
});


// JavaScript to hide the preloader and show the main content after 10 seconds
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    const words = document.querySelectorAll('.hello');
    let currentIndex = 0;
    let firstWordDelay = 320;
    let subsequentWordDelay = 210;

    function showWord(index) {
        words.forEach((word, i) => {
            word.style.display = i === index ? 'block' : 'none';
        });
    }

    function startWordCycle() {
        if (currentIndex < words.length) {
            showWord(currentIndex);
            currentIndex++;

            // Adjust the interval for the next word
            setTimeout(startWordCycle, currentIndex === 1 ? firstWordDelay : subsequentWordDelay);
        } else {
            // Once all words have been shown, hide the preloader
            preloader.style.top = '-100%';
            preloader.style.opacity = '0';

            setTimeout(function () {
                preloader.style.display = 'none';
                content.style.display = 'block';
                document.body.style.overflow = 'auto';
            }, 1000); // Match this delay with the fade-out transition duration
        }
    }

    // Start the word cycle
    startWordCycle();
});





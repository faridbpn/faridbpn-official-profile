// Array of motivational quotes
const quotes = [
    "Keep going, you're doing great!",
    "Believe in yourself and all that you are.",
    "Every step forward is progress.",
    "Success starts with a single step!",
    "You're capable of amazing things!",
    "The best time to start is now.",
    "Your hard work will pay off!",
    "Keep pushing forward, no matter what.",
    "Stay positive and work hard.",
    "You are stronger than you think."
];

// Select the button and notification div
const button = document.getElementById("quoteButton");
const notification = document.getElementById("notification");

// Add click event listener to the button
button.addEventListener("click", () => {
    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display the quote in the notification div
    notification.textContent = randomQuote;

    // Animate the notification
    notification.style.opacity = "1";
    setTimeout(() => {
        notification.style.opacity = "0";
    }, 3000); // Notification disappears after 3 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('#homeTitle', { 
        delay: 300, 
        duration: 1000, 
        origin: 'left', 
        distance: '50px', 
        reset: true
    });

    ScrollReveal().reveal('#homeSubtitle', { 
        delay: 400, 
        duration: 1000, 
        origin: 'left', 
        distance: '50px',
        reset: true 
    });

    ScrollReveal().reveal('#homeDescription', { 
        delay: 300, 
        duration: 1000, 
        origin: 'left', 
        distance: '50px',
        reset: true 
    });

    ScrollReveal().reveal('#quoteButton', { 
        delay: 300, 
        duration: 1000, 
        scale: 0.8, 
        opacity: 0,
        repeat: true 
    });

    ScrollReveal().reveal('#homeImage', { 
        delay: 700, 
        duration: 1200, 
        scale: 0.8, 
        opacity: 0,
        reset: true 
    });

    ScrollReveal().reveal('#homeInfoCard', { 
        delay: 800, 
        duration: 1200, 
        rotate: { x: 100, y: 100, z: 0 },
        reset: true 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('#achievementsTitle', { delay: 300, duration: 1000, origin: 'top', distance: '50px' });
    ScrollReveal().reveal('#achievementsDescription', { delay: 400, duration: 1000, origin: 'top', distance: '50px' });

    ScrollReveal().reveal('#achievement1', { delay: 300, duration: 1000, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('#achievement2', { delay: 300, duration: 1000, scale: 0.8, opacity: 0 });
    ScrollReveal().reveal('#achievement3', { delay: 700, duration: 1000, origin: 'right', distance: '50px' });
});

   // Initialize ScrollReveal
   ScrollReveal().reveal('#carouselSection', {
    delay: 200,
    distance: '50px',
    origin: 'left',
    opacity: 0,
    duration: 1000,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('#textSection', {
    delay: 300,
    distance: '50px',
    origin: 'right',
    opacity: 0,
    duration: 1200,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('#aboutText', {
    delay: 400,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1400,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('#buttonsSection', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1300,
    easing: 'ease-in-out'
});

  // Initialize ScrollReveal
  ScrollReveal().reveal('#projectsTitle', {
    delay: 200,
    distance: '50px',
    origin: 'top',
    opacity: 0,
    duration: 1000,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('#projectItem1', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1200,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('#projectItem2', {
    delay: 400,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1400,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('#projectItem3', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1300,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('#seeMoreButton', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1800,
    easing: 'ease-in-out'
});

  // Initialize ScrollReveal
  ScrollReveal().reveal('#journeyTitle', {
    delay: 200,
    distance: '50px',
    origin: 'top',
    opacity: 0,
    duration: 1000,
    easing: 'ease-in-out',
    reset: true,  // Allow animation to trigger again if the user scrolls back up
});

ScrollReveal().reveal('#timelineItem1', {
    delay: 300,
    distance: '50px',
    origin: 'left',
    opacity: 0,
    duration: 1200,
    easing: 'ease-in-out',
    reset: true,
});

ScrollReveal().reveal('#timelineItem2', {
    delay: 400,
    distance: '50px',
    origin: 'right',
    opacity: 0,
    duration: 1400,
    easing: 'ease-in-out',
    reset: true,
});

ScrollReveal().reveal('#timelineItem3', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1300,
    easing: 'ease-in-out',
    reset: true,
});

ScrollReveal().reveal('#blogTitle', {
    delay: 200,
    distance: '50px',
    origin: 'top',
    opacity: 0,
    duration: 1000,
    easing: 'ease-in-out',
    reset: true,  // Agar animasi dapat terulang jika pengguna scroll kembali
});

ScrollReveal().reveal('#blogCard1', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1000,
    easing: 'ease-in-out',
    reset: true,
});

ScrollReveal().reveal('#blogCard2', {
    delay: 400,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1200,
    easing: 'ease-in-out',
    reset: true,
});

ScrollReveal().reveal('#blogCard3', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1400,
    easing: 'ease-in-out',
    reset: true,
});

ScrollReveal().reveal('#seeMoreBtn', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1300,
    easing: 'ease-in-out',
    reset: true,
});

    
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the 'reveal' class
    const reveals = document.querySelectorAll('.reveal');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'active' class when the element is in view
                entry.target.classList.add('active');
                // Optional: Stop observing once it has been revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before it fully hits the bottom
    });

    // Apply the observer to all reveal elements
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});
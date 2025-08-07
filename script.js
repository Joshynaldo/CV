// Joshua Mitry Portfolio - Interactive JavaScript
// script.js

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 8000;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = Math.max(Math.ceil(target / speed), 1);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };

        // Nur starten, wenn sichtbar
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observerInstance.unobserve(entry.target);
                }
            });
        }, { threshold: 0.9 }); // 50% sichtbar

        observer.observe(counter);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    animateCounters();
});

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width') + '%';
                bar.style.width = targetWidth;
                observerInstance.unobserve(bar); // nur einmal animieren
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
});

document.addEventListener("DOMContentLoaded", () => {
    new Rellax('.rellax');
});

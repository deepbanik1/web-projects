document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
    const skillIcons = document.querySelectorAll('.skill-icon');

    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    skillIcons.forEach(icon => {
        observer.observe(icon);
    });

    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.querySelector('.nav-links').classList.toggle('active');
    });
});

function calculateAge() {
    const dob = document.getElementById("dob").value;
    const results = document.getElementById("results");
    if (!dob) {
        results.innerHTML = "<strong>Please select a date.</strong>";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    // Calculate total days, weeks, and months
    const totalDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;

    // Calculate upcoming birthday
    const nextBirthday = new Date(birthDate);
    nextBirthday.setFullYear(today.getFullYear());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
    const dayOfWeekNextBirthday = nextBirthday.toLocaleDateString('en-US', { weekday: 'long' });

    results.innerHTML = `
        <br><strong>You are ${years} years, ${months} months, and ${days} days old.</strong><br>
        <i>Total Days Lived: ${totalDays}</i><br>
        <i>Total Weeks Lived: ${totalWeeks}</i><br>
        <i>Total Months Lived: ${totalMonths}</i><br>
        <strong>Days Until Next Birthday: ${daysUntilNextBirthday}</strong><br>
        <strong>Day of the Week on Next Birthday: ${dayOfWeekNextBirthday}</strong>
    `;
}

function showAlert() {
    alert('This is for display purposes only.');
}

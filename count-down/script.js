const releaseDate = new Date("June 16, 2023 00:00:00").getTime();

setInterval(() => {

    const currentTime = new Date().getTime();
    const timeGap = releaseDate - currentTime;

    const months = new Date("June 16, 2023 00:00:00").getMonth() - new Date().getMonth() - 1;
    let days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
    days = Math.floor(days % 30);
    const hours = Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor(timeGap % (1000 * 60) / 1000);

    document.querySelector('.months h2').textContent = months;
    document.querySelector('.days h2').textContent  = days;
    document.querySelector('.hours h2').textContent  = hours;
    document.querySelector('.minutes h2').textContent  = minutes;
    document.querySelector('.seconds h2').textContent  = seconds;

}, 1000);

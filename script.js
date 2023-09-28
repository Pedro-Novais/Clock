const hr = document.querySelector('#pointer-hour');
const min = document.querySelector('#pointer-minute');
const sec = document.querySelector('#pointer-second');

setInterval(() => {
    let day = new Date();
    let hour = day.getHours();
    let minute = day.getMinutes();
    let second = day.getSeconds();

    let hrrotation = (30 * hour) + (0.5 * minute);
    let minrotation = 6 * minute;
    let secrotation = 6 * second;

    hr.style.transform =`translate(-50%,-100%) rotate(${hrrotation}deg)`
    min.style.transform =`translate(-50%,-100%) rotate(${minrotation}deg)`
    sec.style.transform =`translate(-50%,-85%) rotate(${secrotation}deg)`
})


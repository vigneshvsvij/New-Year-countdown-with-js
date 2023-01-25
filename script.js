const countdown = () => {
    const newYear = new Date("January 01, 2024 00:00:00").getTime();
    let currentDate = new Date().getTime();
    let timeDifference = newYear - currentDate;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const textDay = Math.floor(timeDifference / day);
    const textHour = Math.floor((timeDifference % day) / hour);
    const textMinute= Math.floor((timeDifference % hour) / minute);
    const textSecond = Math.floor((timeDifference % minute) / second);
    
    document.getElementById("day").innerText = textDay;
    document.getElementById("hour").innerText = textHour;
    document.getElementById("minute").innerText = textMinute;
    document.getElementById("second").innerText = textSecond;
};

setInterval(countdown, 1000);

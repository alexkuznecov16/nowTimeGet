// Variables area
const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const sec = document.getElementById('sec');

function getNowTime(){
    currentTime = new Date();

    // Date variables
    y = currentTime.getFullYear();
    mo = currentTime.getMonth() + 1;
    d = currentTime.getDate(); // Month day num
    h = currentTime.getHours();
    mi = currentTime.getMinutes();
    s = currentTime.getSeconds();
    
    // Get month name
    switch (mo){
        case 1:
            mo = 'January';
            break;

        case 2:
            mo = 'February';
            break;

        case 3:
            mo = 'March';
            break;

        case 4:
            mo = 'April';
            break;

        case 5:
            mo = 'May';
            break;

        case 6:
            mo = 'June';
            break;

        case 7:
            mo = 'July';
            break;

        case 8:
            mo = 'August';
            break;

        case 9:
            mo = 'September';
            break;

        case 10:
            mo = 'October';
            break;

        case 11:
            mo = 'November';
            break;

        case 12:
            mo = 'December';
            break;
    }

    // Add to html
    year.innerHTML = y;
    month.innerHTML = mo;
    day.innerHTML = d < 10 ? '0' + d : d;
    hour.innerHTML = h < 10 ? '0' + h : h;
    minute.innerHTML = mi < 10 ? '0' + mi : mi;
    sec.innerHTML = s < 10 ? '0' + s : s;
}
setInterval(getNowTime, 1000); // 1sec = 1000ms
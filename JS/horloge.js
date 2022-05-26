
var
    clock = document.getElementById('time'),
    clockDate = document.getElementById('date');

var date,
    hrs,
    mins,
    secs,
    millis,
    laps,
    day,
    dayOfMonth,
    mon,
    yr,
    clockFunction,
    antemeridiem = '',
    days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

// function pour obtenir Antemeridiem
function getAntemeridiem(hrs) {
    if (Math.floor(hrs / 12) == 0) return 'AM';
    return 'PM';
}

// function pour afficher heures minutes et secondes
function getTimeToDisplay() {
    date = new Date();
    hrs = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    antemeridiem = getAntemeridiem(hrs);
}

// function pour obtenir la date à afficher
function getDateToDisplay() {
    day = date.getDay();
    dayOfMonth = date.getDate();
    mon = date.getMonth() + 1;
    yr = date.getFullYear();
}

//function pour obtenir un résultat à deux chiffres
function getTwoDigitResult(num) {
    return num < 10 ? '0' + num : num;
}

// Renvoie une string contenant le format d'heure à afficher
function getTimeFormat() {
    var time = getTwoDigitResult(hrs) + ' : ' + getTwoDigitResult(mins) + ' : ' + getTwoDigitResult(secs) + ' ' + antemeridiem;
    return time;
}

// Renvoie une string    contenant le format de date à afficher
function getDateFormat() {
    var clockDate = days[day] + ', ' + getTwoDigitResult(dayOfMonth) + ' - ' + getTwoDigitResult(mon) + ' - ' + yr;
    return clockDate;
}

// Starts clock
function startClock() {

    clockFunction = setInterval(function () {
        getTimeToDisplay();
        clock.innerText = getTimeFormat();
        getDateToDisplay();
        clockDate.innerText = getDateFormat();
    }, 1000);
}

// Stops clock
function stopClock() {
    clock.innerText = '';
    clockDate.innerText = 'Date';
    clearInterval(clockFunction);
    
}

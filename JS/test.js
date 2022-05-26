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
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/* ---------------------------------- */
/*    Digital Clock Section Starts    */
/* ---------------------------------- */


function getAntemeridiem(hrs) {
    if (Math.floor(hrs / 12) == 0) return 'AM';
    return 'PM';
}

function getTimeToDisplay() {
    date = new Date();
    hrs = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    antemeridiem = getAntemeridiem(hrs);
}

function getDateToDisplay() {
    day = date.getDay();
    dayOfMonth = date.getDate();
    mon = date.getMonth() + 1;
    yr = date.getFullYear();
}

function getTwoDigitResult(num) {
    return num < 10 ? '0' + num : num;
}

// Returns string, containing time format to be displayed
function getTimeFormat() {
    var time = getTwoDigitResult(hrs) + ' : ' + getTwoDigitResult(mins) + ' : ' + getTwoDigitResult(secs) + ' ' + antemeridiem;
    return time;
}

// Returns string, containing date format to be displayed
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
    clock.innerText = 'Digital Clock';
    clockDate.innerText = 'Date';
    clearInterval(clockFunction);
    
}


/* ------------------------------- */
/*    Digital Clock Section Ends   */
/* ------------------------------- */


/* ------------------------- */
/*    Timer Section Starts   */
/* ------------------------- */


var turnDivToField = function (element) {
    element.addEventListener('click', function () {
        element.classList.add('hidden');
        element.nextElementSibling.classList.remove('hidden');
    });
}

var turnFieldToDiv = function (element) {
    element.addEventListener('blur', function () {
        var value = getTwoDigitResult(element.value);
        element.classList.add('hidden');
        element.previousElementSibling.classList.remove('hidden');
        element.previousElementSibling.innerText = value;
    });
}

var div_list = document.querySelectorAll(".input-timer-display");
div_list.forEach(turnDivToField);

var input_list = document.querySelectorAll("input[type='number']");
input_list.forEach(turnFieldToDiv);

var validateTimerValues = function () {
    return (document.getElementById('timer-hr').innerText == '')
}

var getTimeFromScreenForTimer = function () {
    hrs = parseInt(document.getElementById('timer-hr').innerText);
    mins = parseInt(document.getElementById('timer-min').innerText);
    secs = parseInt(document.getElementById('timer-sec').innerText);
}

var setText = function (fieldID, text) {
    document.getElementById(fieldID).innerText = text;
}

var toggleButtonText = function (buttonID) {
    var toggleButton = document.getElementById(buttonID);
    if (toggleButton.innerText == 'Start')
        toggleButton.innerText = 'Pause';
    else
        toggleButton.innerText = 'Start';
}

var initCountDownAndDisplay = function () {
    if (secs == 0 && mins == 0 && hrs == 0) {
        pauseTimer();
        alert('Timer Ended');
        toggleButtonText('toggleTimer');
    }

    if (secs > 0) {
        setText('timer-sec', getTwoDigitResult(--secs));
    } else {
        if (mins > 0) {
            secs = 60;
            setText('timer-sec', getTwoDigitResult(--secs));
            setText('timer-min', getTwoDigitResult(--mins));
        } else {
            if (hrs > 0) {
                secs = 60;
                setText('timer-sec', getTwoDigitResult(--secs));
                mins = 60;
                setText('timer-min', getTwoDigitResult(--mins));
                setText('timer-hr', getTwoDigitResult(--hrs));
            }
        }
    }
}

var timerFucntion;
// Function to start timer 
var startTimer = function () {
    getTimeFromScreenForTimer();
    timerFucntion = setInterval(initCountDownAndDisplay, 1000);
}

// Function to pause timer
var pauseTimer = function () {
    clearInterval(timerFucntion);
    if (!tickSound.paused)
        tickSound.pause();
}

// Function to decide either start or stop timer
var toggleTimer = function () {
    if (this.innerText == 'Start') {
        startTimer();
        toggleButtonText('toggleTimer');
    } else {
        pauseTimer();
        toggleButtonText('toggleTimer');
    }
}

// Funtion to reset timer
var resetTimer = function () {
    pauseTimer();
    if (document.getElementById('toggleTimer').innerText == 'Pause')
        toggleButtonText('toggleTimer');
    setText('timer-hr', 'HR');
    setText('timer-sec', 'SEC');
    setText('timer-min', 'MIN');
    hrs = 0, mins = 0, secs = 0;
}

// Event listners registeration
var btnTimerToggler = document.getElementById('toggleTimer');
btnTimerToggler.addEventListener('click', toggleTimer);

var btnTimerResetter = document.getElementById('resetTimer');
btnTimerResetter.addEventListener('click', resetTimer);

/* ----------------------- */
/*    Timer Section Ends   */
/* ----------------------- */

/* --------------------------------- */
/*     Screen switching code starts*/
/* --------------------------------- */

var setInitialValues = function () {
    laps = 0, millis = 0, secs = 0, mins = 0, hrs = 0;
}

var swicthToClock = function () {
    resetStopwatch();
    var clockContainer = document.getElementById('clock');
    var timerContainer = document.getElementById('timer');
    var stopwatchContiner = document.getElementById('stopwatch');
    if (clockContainer.classList.contains('hidden')) {

        if (!timerContainer.classList.contains('hidden'))
            timerContainer.classList.toggle('hidden');

        if (!stopwatchContiner.classList.contains('hidden'))
            stopwatchContiner.classList.toggle('hidden');

        clockContainer.classList.toggle('hidden');
    }
}

var btnClockView = document.getElementById('btn-clock-view');
btnClockView.addEventListener('click', swicthToClock);

var swicthToTimer = function () {
    stopClock();
    resetStopwatch();
    var clockContainer = document.getElementById('clock');
    var timerContainer = document.getElementById('timer');
    var stopwatchContiner = document.getElementById('stopwatch');
    if (timerContainer.classList.contains('hidden')) {

        if (!clockContainer.classList.contains('hidden'))
            clockContainer.classList.toggle('hidden');

        if (!stopwatchContiner.classList.contains('hidden'))
            stopwatchContiner.classList.toggle('hidden');



        timerContainer.classList.toggle('hidden');
    }
    setInitialValues();
}

var btnTimerView = document.getElementById('btn-timer-view');
btnTimerView.addEventListener('click', swicthToTimer);

var swicthToStopWatch = function () {
    stopClock();
    var clockContainer = document.getElementById('clock');
    var timerContainer = document.getElementById('timer');
    var stopwatchContiner = document.getElementById('stopwatch');
    if (stopwatchContiner.classList.contains('hidden')) {

        if (!clockContainer.classList.contains('hidden'))
            clockContainer.classList.toggle('hidden');

        if (!timerContainer.classList.contains('hidden'))
            timerContainer.classList.toggle('hidden');

        stopwatchContiner.classList.toggle('hidden');
    }
    setInitialValues();
}

var btnStopWatchView = document.getElementById('btn-stopwatch-view');
btnStopWatchView.addEventListener('click', swicthToStopWatch);

/* --------------------------------- */
/*     Screen switching code ends*/
/* --------------------------------- */

/* ----------------------- */
/*    Stopwatch Section Ends   */
/* ----------------------- */
var initStopWatch = function () {

    if (millis < 10) {
        setText('stopwatch-milli', getTwoDigitResult((++millis)));
    } else {
        if (secs < 60) {
            millis = 0;
            setText('stopwatch-milli', getTwoDigitResult(++millis));
            setText('stopwatch-sec', getTwoDigitResult(++secs));
        } else {
            if (mins < 59) {
                millis = 0;
                setText('stopwatch-milli', getTwoDigitResult(++millis));
                secs = 0;
                setText('stopwatch-sec', getTwoDigitResult(++secs));
                setText('stopwatch-min', getTwoDigitResult(++mins));
            } else {
                millis = 0;
                setText('stopwatch-milli', getTwoDigitResult(++millis));
                secs = 0;
                setText('stopwatch-sec', getTwoDigitResult(++secs));
                mins = 0;
                setText('stopwatch-min', getTwoDigitResult(++mins));
                setText('stopwatch-hr', getTwoDigitResult(++hr));
            }
        }
    }
}
// Function to setup initial screen with all zeros
var setInitialScreen = function () {
    setText('stopwatch-milli', getTwoDigitResult(0));
    setText('stopwatch-sec', getTwoDigitResult(0));
    setText('stopwatch-min', getTwoDigitResult(0));
    setText('stopwatch-hr', getTwoDigitResult(0));
}

var showLapContainer = function () {
    var lapContainer = document.getElementById('laps-list');
    if (lapContainer.classList.contains('hidden'))
        lapContainer.classList.remove('hidden');
}

var hideLapContainer = function () {
    var lapContainer = document.getElementById('laps-list');
    if (!lapContainer.classList.contains('hidden'))
        lapContainer.classList.add('hidden');

    lapContainer.innerHTML = '';
}

var stopWatchFucntion;


// Function to start stopwatch
var startStopWatch = function () {
    stopWatchFucntion = setInterval(initStopWatch, 100);


}

// Function to pause stopwatch
var pauseStopWatch = function () {
    clearInterval(stopWatchFucntion);

}

var resetStopwatch = function () {
    pauseStopWatch();
    if (document.getElementById('toggleStopWatch').innerText == 'Pause')
        toggleButtonText('toggleStopWatch');
    hideLapContainer();
    setInitialScreen();
    setInitialValues();
}


// Function to decide either start or stop stopwatch
var toggleStopWatch = function () {
    if (this.innerText == 'Start') {
        startStopWatch();
        toggleButtonText('toggleStopWatch');
    } else {
        pauseStopWatch();
        toggleButtonText('toggleStopWatch');
    }
}

// Function to capture laps
var captureLap = function () {
    return {
        milliseconds: millis,
        minutes: mins,
        seconds: secs,
        hours: hrs
    }
}

// Function to show laps in stopwatch
var showLap = function () {
    var lap = captureLap();
    showLapContainer();
    var title = document.createElement('h4');
    title.innerText = `Lap ${++laps}`;
    var text = document.createElement('p');
    text.innerText = `Elapsed ${getTwoDigitResult(lap.hours)}:${getTwoDigitResult(lap.minutes)}:${getTwoDigitResult(lap.seconds)}:${getTwoDigitResult(lap.milliseconds)}`;
    var container = document.createElement('div');
    container.classList.add('lap-list-item');
    container.appendChild(title);
    container.appendChild(text);
    var parent = document.getElementById('laps-list');
    parent.prepend(container);

}

// Event listners registeration
var btnStopWatchToggler = document.getElementById('toggleStopWatch');
btnStopWatchToggler.addEventListener('click', toggleStopWatch);

var btnStopWatchResetter = document.getElementById('resetStopWatch');
btnStopWatchResetter.addEventListener('click', resetStopwatch);

var btnStopWatchCaptureLap = document.getElementById('lapStopWatch');
btnStopWatchCaptureLap.addEventListener('click', showLap);

/* --------------------------- */
/*    Stopwatch Section Ends   */
/* --------------------------- */
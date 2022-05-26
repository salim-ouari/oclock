<?php
require 'header.php';
?>
<main>
    <div class="main-container hidden" id="stopwatch">
        <div class="functional-container">
            <h4>Chronomètre</h4>
            <div class="wrapper-horizontal">
                <div class="input-timer-display" id="stopwatch-hr">
                    00
                </div>
                <span class="ml"> : </span>
                <div id="stopwatch-min" class="ml input-timer-display">
                    00
                </div>
                <span class="ml"> : </span>
                <div id="stopwatch-sec" class="ml input-timer-display">
                    00
                </div>
                <span class="ml"> : </span>
                <div id="stopwatch-milli" class="ml input-timer-display">
                    00
                </div>
            </div>
        </div>
        <div class="buttons-container">
            <button id="toggleStopWatch" type="button" class="btn btn-success">Start</button>
            <button id="resetStopWatch" type="button" class="btn btn-danger">Reset</button>
            <button id="lapStopWatch" type="button" class="btn btn-warning">Tour</button>
        </div>
        <div class="laps-list-container hidden" id="laps-list">
        </div>

    </div>

</main>
<script type="text/javascript" src="JS/chrono.js"></script>

<?php
require 'footer.php';
?>
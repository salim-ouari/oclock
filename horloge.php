<?php
require 'header.php';
?>
<main>

    <div class="container">
        <div class="main-container" id="clock">
            <div class="functional-container">
                <h4>Horloge</h4>
                <div class="wrapper-vertical">
                    <div class="date" id="date">
                        Date
                    </div>
                    <div id="time">
                        <!-- Digital Clock -->
                    </div>
                </div>
            </div>
            <div class="buttons-container">
                <button type="button" class="btn btn-success" onclick="startClock()">Start</button>
                <button class="btn btn-danger" onclick="stopClock()">Stop</button>
            </div>
        </div>
</main>
<script type="text/javascript" src="JS/horloge.js"></script>
<?php
require 'footer.php';
?>
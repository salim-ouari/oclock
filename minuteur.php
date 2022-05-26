<?php
require 'header.php';
?>

<main>
    <section class="main-container hidden section_gen minuteur" id="timer">
        <div class="functional-container componant_gen">

            <h4>Minuteur</h4>
            <div>
                <label for="heur">Heures:</label>

                <label for="min">Minutes:</label>

                <label for="sec">Secondes:</label>
            </div>

            <div>
                <input type="number" id="heur" max="100" min="0" value="0">
                <p id="p1"></p>
                <input type="number" id="min" max="60" min="0" value="0">
                <p id="p2"></p>
                <input type="number" id="sec" max="60" min="0" value="0">
            </div>
            <div>
                <p class="fin"></p>
            </div>
            <!-- </div> -->

            <article class="buttons-container componant_control">
                <button class=" start btn-success btn "><i class="fas fa-solid fa-play"></i></button>
                <button class=" none btn  btn-danger"><i class="fa-solid fa-pause"></i></button>
                <button class=" btn-warning btn"><i class="fa-solid fa-stopwatch"></i></button>
            </article>
        </div>
    </section>
</main>
<script ype="text/javascript" src="JS/minuteur.js"></script>

<?php
require 'footer.php';
?>
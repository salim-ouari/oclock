<?php
require 'header.php';
?>

<main>

    <section class=main-container>
        <div class="row_container functional-container">
            <h4>Réveil</h4>
            <!-- HORLOGE + ALARM -->
            <div id="clock"></div>

            <div id="alarm">


                <input type="time" name="alarm" id="alarm-input">
                <input type="text" name="alarm-text" id="alarm-text" placeholder="Nom alarme ">

            </div>
            <div class="controls">
                <button class="button btn-success" id="set-alarm">Enregistrer</button>
                <button class="button btn-danger" id="clear-alarm">Arrêter</button>
            </div>

        </div>

        <div>
            <ul id="alarm-list"></ul>
        </div>
    </section>
</main>
<script type="text/javascript" src="JS/reveil.js"></script>
<?php
require 'footer.php';
?>
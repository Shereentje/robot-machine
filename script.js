<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Robot Machine</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <header>
      <h1>Rock, Paper, Scissors</h1>

      <div id="startScreen">
        <div>🤖</div>
        <h2>Hi speler!</h2>
        <p>Voer je naam in:</p>

        <input type="text" id="nameInput" placeholder="Jouw naam...">
        <button onclick="startGame()">Start</button>
      </div>
    </header>

    <div id="gameScreen" hidden>
      <h2 id="welcomeText"></h2>

      <div>
        <img src="img/rock.png" onclick="play('rock')" />
        <img src="img/paper.png" onclick="play('paper')" />
        <img src="img/scissors.png" onclick="play('scissors')" />
      </div>

      <div id="result">Maak je keuze!</div>
      <div id="score">0 - 0</div>
    </div>

    <!--bron: https://www.youtube.com/watch?v=k5BJoJ9bRBE confetti tutorial-->
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>

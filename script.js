/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
var spelStatus = SPELEN;

var spelerX = 700; // x-positie van speler
var spelerY = 600; // y-positie van speler
var health = 100;  // health van speler

var vijandX = 600;
var vijandY = 600;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
  if (keyIsDown(65)) {
spelerX = spelerX -3;
}

if (keyIsDown(68)) {
  spelerX = spelerX +3;
}

if (keyIsDown(87)) {
  spelerY = spelerY -3;
}

if (keyIsDown(83)) {
  spelerY = spelerY +3;
}
  // vijand

  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
if (spelerX - vijandX < 50 &&
  spelerX - vijandX > -50 &&
spelerY - vijandY <50 &&
spelerY - vijandY > -50) {
    aantal = aantal + 1;
    console.log("botsing" +aantal);
  }
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
fill("grey");
rect(0, 0, 3000, 2100)
  // vijand
fill("green");
rect(vijandX - 25, vijandY - 25, 50, 50);
fill("red");
ellipse(vijandX, vijandY, 10, 10);
  // kogel

  // speler
  fill("black");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("white");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health

};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

var checkGameOver = function () {
  if (spelerX - vijandX < 50 &&
    spelerX - vijandX > -50 &&
  spelerY - vijandY <50 &&
  spelerY - vijandY > -50) {
      aantal = aantal + 1;
      console.log("botsing" +aantal);
  return true;
}

return false
};
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(2100, 1500);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (health <= 0) {
      spelStatus = GAMEOVER;
    }
  }
  console.log("spelen");

  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("game over");
    textSize(100);
    fill("white");
    text("game over",  100, 100);
  }

if (spelStatus === UITLEG) {
  console.log("uitleg");
}

}
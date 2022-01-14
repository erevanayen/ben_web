var counter1 = 0;
var counter2 = 0;
var firstEnter = true;
const baseSpeed = 0.0005;
var dotSpeed1 = 0.0005;
var dotSpeed2 = 0.0005;

const dotRadius = 12;

const ns = "http://www.w3.org/2000/svg";

const dotGroup = document.getElementById("dotGroup");
const trackPath = document.getElementById("track-path");

// draw SVG elements
var dots = drawDots(2, 0, 0, dotRadius, dotGroup);
dots[0].setAttribute("fill", "#FFC90A");
dots[1].setAttribute("fill", "#FF11A7");

var trackPathLenght = trackPath.getTotalLength();

function animateDots() {
  counter1 = (counter1 + dotSpeed1) % 1;
  counter2 = (counter2 + dotSpeed2) % 1;
  // recalculate speed
  if (Math.random() <= 0.1) {
    dotSpeed1 = baseSpeed + baseSpeed * Math.random();
    dotSpeed2 = baseSpeed + baseSpeed * Math.random();
  }
  dots[0].setAttribute(
    "transform",
    "translate(" +
      trackPath.getPointAtLength(counter1 * trackPathLenght).x +
      "," +
      trackPath.getPointAtLength(counter1 * trackPathLenght).y +
      ")"
  );

  dots[1].setAttribute(
    "transform",
    "translate(" +
      trackPath.getPointAtLength(counter2 * trackPathLenght).x +
      "," +
      trackPath.getPointAtLength(counter2 * trackPathLenght).y +
      ")"
  );
  requestAnimationFrame(animateDots);
}

function beginAnimation() {
  requestAnimationFrame(animateDots);
}

function drawDots(amount, posX, posY, radius, containerElement) {
  var newDotArray = [];
  for (let i = 0; i < amount; i++) {
    newDotArray.push(drawDot(posX, posY, radius, containerElement));
  }

  return newDotArray;
}

function drawDot(posX, posY, radius, containerElement) {
  var newDot = document.createElementNS(ns, "circle");
  newDot.setAttribute("cx", posX);
  newDot.setAttribute("cy", posY);
  newDot.setAttribute("r", radius);

  containerElement.appendChild(newDot);

  return newDot;
}

//###########################################
beginAnimation();

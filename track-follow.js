var counter = 0;
var firstEnter = true;
var animSpeed = 0.0005;

const dotRadius = 12;

const ns = "http://www.w3.org/2000/svg";

const dotGroup = document.getElementById("dotGroup");
const trackPath = document.getElementById("track-path");

// draw SVG elements
var dots = drawDots(1, 0, 0, dotRadius, dotGroup);

var trackPathLenght = trackPath.getTotalLength();

function animateDots() {
  counter = (counter + animSpeed) % 1;
  dots[0].setAttribute(
    "transform",
    "translate(" +
      trackPath.getPointAtLength(counter * trackPathLenght).x +
      "," +
      trackPath.getPointAtLength(counter * trackPathLenght).y +
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

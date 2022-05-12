/* Created by: Joanne Santhosh
 * Created on: Apr 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit6-01-PWA/sw.js", {
    scope: "/ICS20-Unit6-01-PWA/",
  })
}

/**
 * This function converts the degrees from fahrenheit to celsius
 */
function convert() {
  // input
  var integer = parseInt(document.getElementById("integer").value);
  var pi;
  var number = 1;
  var positiveOrNegative = "minus";

  // process
  pi = 4 / number;
  while (integer > 1) {
    if (positiveOrNegative == "minus") {
      number = number + 2;
      pi = pi - (4 / number); 
      positiveOrNegative == "plus";
    } else if (positiveOrNegative == "plus"){
      number = number + 2;
      pi = pi + (4 / number); 
      positiveOrNegative == "minus"
    }
    integer = integer - 1;
  }
  positiveOrNegative == "minus"
  number = 1;

  // output
  document.getElementById("answer").innerHTML = "The answer is: " + pi;
}
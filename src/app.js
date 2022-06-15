/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var domain = [".net", ".com", ".es"];
  var arrayvacio = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          arrayvacio.push(pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
        document.querySelector("p").innerHTML = arrayvacio;
      }
    }
  }
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger.com,", "racoon.com,"];

  document.querySelector("p").innerHTML =
    pronoun[0] +
    adj[0] +
    noun[0] +
    " " +
    pronoun[0] +
    adj[0] +
    noun[1] +
    " " +
    pronoun[1] +
    adj[0] +
    noun[0] +
    " " +
    pronoun[1] +
    adj[0] +
    noun[1] +
    " " +
    pronoun[0] +
    adj[1] +
    noun[0] +
    " " +
    pronoun[0] +
    adj[1] +
    noun[1] +
    " " +
    pronoun[1] +
    adj[1] +
    noun[0] +
    " " +
    pronoun[1] +
    adj[1] +
    noun[1];
};

# wordle-tr-solver
 helper'la yetinemeyenler için yaptım

fetch('https://raw.githubusercontent.com/asilbalaban/wordle-tr-solver/main/solve.js')
    .then(response => response.text())
    .then(text => eval(text))
    .then(() => { /* now you can use your library */ })
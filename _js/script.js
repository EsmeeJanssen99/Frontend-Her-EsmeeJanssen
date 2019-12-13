/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var filteren = document.querySelector("#filterbutton");

function filterShow() {
    var inUitKlappen = document.querySelector("#filterblok");
    inUitKlappen.classList.toggle("show");
}

filteren.addEventListener('click', filterShow)

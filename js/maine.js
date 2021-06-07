var getUsername = prompt("who are you");

console.log("getUsername");

document.getElementById("z").innerText = getUsername;

//tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
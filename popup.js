bug = document.getElementById("bug");

function getResSt() {
  bug_text = bug.value;
  var uri = "https://stackoverflow.com/search?q=" + bug_text;
  uri = encodeURI(uri);
  openInNewTab(uri);
}

function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

document.addEventListener("DOMContentLoaded", function () {
  var supremebot = document.getElementById("stov");
  supremebot.addEventListener("click", function () {
    getResSt();
  });
});

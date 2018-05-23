function toc_trigger() {
    var x = document.getElementById("show-trigger");
    var y = document.getElementById("hide-trigger");
    var z = document.getElementById("toc-contents");
    if (z.style.display === "none") {
        x.style.display = "none";
        y.style.display = "inline-block";
        z.style.display = "block";
    } else {
      x.style.display = "inline-block";
      y.style.display = "none";
      z.style.display = "none";
    }
}

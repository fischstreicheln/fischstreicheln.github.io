function toc_trigger() {
    var x = document.getElementById("show-trigger");
    var y = document.getElementById("hide-trigger");
    var z = document.getElementById("toc-contents");
    var toc = document.getElementById("post-toc");
    if (z.style.display === "none") {
        x.style.display = "none";
        y.style.display = "inline-block";
        z.style.display = "block";
        toc.style.paddingTop = "10px";
    } else {
      x.style.display = "inline-block";
      y.style.display = "none";
      z.style.display = "none";
      toc.style.paddingTop = "0px";
    }
}

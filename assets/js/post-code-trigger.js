function code_trigger(show_id, hide_id, content_id) {
    var x = document.getElementById(show_id);
    var y = document.getElementById(hide_id);
    var z = document.getElementById(content_id);
    if (z.style.display === "block") {
      x.style.display = "inline-block";
      y.style.display = "none";
      z.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "inline-block";
      z.style.display = "block";
    }
}

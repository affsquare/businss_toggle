let toggle = false;
function busnissToggle() {
  toggle = !toggle;
  if (toggle) {
    document.getElementById("toggle1").classList.add("reduis_border");
    document.getElementById("toggle2").classList.remove("reduis_border");
  } else {
    document.getElementById("toggle2").classList.add("reduis_border");
    document.getElementById("toggle1").classList.remove("reduis_border");
  }
}

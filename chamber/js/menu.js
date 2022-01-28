function toggleMenu() {
  var para = document.getElementById("hambttn");
  para.classList.toggle("rotate-icon");
  document.getElementById("linklist").classList.toggle("open");
  document.getElementById("hambttn").classList.toggle("open");
}

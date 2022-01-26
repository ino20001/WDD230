function toggleMenu() {
    document.getElementById("linklist").classList.toggle("open");
    document.getElementById("hambttn").classList.toggle("open");
  }
  
  const x = document.getElementById('hambttn');
  x.onclick = toggleMenu;
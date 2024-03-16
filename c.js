function openClass(evt, className) {
    var i, classContent, tablinks;
    classContent = document.getElementsByClassName("class-content");
    for (i = 0; i < classContent.length; i++) {
      classContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(className).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  
  document.querySelector(".tablinks").click(); // Open the first class by default
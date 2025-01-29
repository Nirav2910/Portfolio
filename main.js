window.onload = function () {
  var typed = new Typed(".text", {
    strings: ["React Native Developer", "App Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("checkbox");
  document.body.classList.add("darkmode");
  checkbox.checked = true;
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("darkmode");
  });
});


document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("body").addEventListener("mousemove", eyeball);

  function eyeball(event) {
    var eyes = document.querySelectorAll(".eye");
    eyes.forEach(function(eye) {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = radian * (360 / Math.PI) * -1 + 280;
      eye.style.transform = "rotate(" + rot + "deg)";
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".emailjs-form")
    .addEventListener("submit", function (e) {
      e.preventDefault(); 


      const name = document.querySelector('input[name="name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const message = document.querySelector('textarea[name="message"]').value;


      const emailParams = {
        to_name: "Wenge",
        from_name: name,
        message_html: message,
      };

      emailjs
        .send("service_3dgpbj9", "template_vspzqsu", emailParams)
        .then(
          function (response) {
            console.log("Email sent successfully", response);
            alert("Your message has been sent successfully.");
            document.querySelector(".emailjs-form").reset();
          },
          function (error) {
            console.log("Email sending failed", error);
            alert("Email sending failed. Please try again.");
          }
        );
    });
});



var particles = document.getElementById("particles");
var border = ["50%","0%"];
var colors = ["#FF6B6B","#FFE66D","#4472CA"];

function createParticle(event){
    var x = event.clientX;
    var y = event.clientY;
    var color = Math.floor(Math.random() * 3);

    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.marginLeft = x+"px";
    div.style.marginTop = y+"px";
    div.style.width = "10px";
    div.style.borderTop = "5px solid transparent";
    div.style.borderRight = "5px solid transparent";
    div.style.borderLeft = "5px solid transparent";
    div.style.borderBottom = "10px solid "+colors[color];
    div.style.animation = "move 5s ease-in infinite";
    particles.appendChild(div);
    setTimeout(
        function(){
            div.remove();
        }
    , 5000);
}


function getParticles() {
  particles = document.getElementById("particles");

  if (!particles) {
      console.error("Error: particles element not found.");
      return;
  }

 
    var np = document.documentElement.clientWidth / 40;
    particles.innerHTML = "";
    for (var i = 0; i < np; i++) {
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        var rndw = Math.floor(Math.random() * w ) + 1;
        var rndh = Math.floor(Math.random() * h ) + 1;
        var widthpt = Math.floor(Math.random() * 8) + 5;
        var opty = Math.floor(Math.random() * 4) + 1;
        var anima = Math.floor(Math.random() * 12) + 8;
        var bdr = Math.floor(Math.random() * 2);
        var color = Math.floor(Math.random() * 3);

        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.marginLeft = rndw+"px";
        div.style.marginTop = rndh+"px";
        div.style.width = widthpt+"px";
        div.style.height = widthpt+"px";
        div.style.opacity = opty;
        div.style.backgroundColor = colors[color];
        div.style.borderRadius = border[bdr];
        div.style.animation = "move "+anima+"s ease-in infinite";
        particles.appendChild(div);
    }
}

function main(event){
    getParticles();
    particles.addEventListener("click", createParticle);
}

window.addEventListener("resize", main);
window.addEventListener("load", main);

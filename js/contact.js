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

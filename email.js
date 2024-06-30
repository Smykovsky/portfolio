function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  if (params.name === "" || params.email === "" || params.subject === "" || params.message === "") {
    alert('Please fill out all fields.');
    return;
  }

  if (!validateEmail(params.email)) {
    alert('Please enter a valid email address.');
    return;
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  const serviceID = "contact-service";
  const templateID = "contact-template";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!")

    })
    .catch(err => console.log(err));
}

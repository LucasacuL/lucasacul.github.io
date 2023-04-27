function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };  
    const serviceID = "service_er9kof8";
    const templateID = "template_zd583tu";
  
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "Your Name *";
        document.getElementById("email").value = "Your E-mail *";
        document.getElementById("message").value = "Your Message *";
        console.log(res);
        alert("Your message has been sent successfully. \nWe will contact you soon. \n\nThank you!");        
    })
    .catch(err=>console.log(err));  
  }
  
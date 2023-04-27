function sendMail() {
    var params = {
      name: document.getElementById("name_contact").value,
      email: document.getElementById("email_contact").value,
      message: document.getElementById("message").value,
    };  
    const serviceID = "service_er9kof8";
    const templateID = "template_zd583tu";
  
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name_contact").value = "Your Name *";
        document.getElementById("email_contact").value = "Your E-mail *";
        document.getElementById("message").value = "Your Message *";
        console.log(res);
        alert("Your message has been sent successfully. \nWe will contact you soon. \n\nThank you!");        
    })
    .catch(err=>console.log(err));  
  }
  
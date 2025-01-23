//open and close the pop-up form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

	//Get elements
    let day= document.querySelector('.days');
    let hour= document.querySelector('.hours');
    let minute= document.querySelector('.minutes');
    let second= document.querySelector('.seconds');
    
    function setCountdown(){
    //Set count down date
    
    let countdownDate = new Date('June 01, 2025 16:40:25').getTime();
    
    //update countdown every second
    let updateCount = setInterval(function(){
    
    //Get today's date and time
    let todayDate = new Date().getTime();
    
    
    //Get distance between now and countdown date
    let distance = countdownDate - todayDate;
    
    let days =  Math.floor(distance / (1000 * 60 * 60 * 24));
    
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    
    let seconds = Math.floor(distance % (1000 * 60) / 1000);
    
    //Display values
    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;
    },1000)
    }
    setCountdown()

  // Add this script to your HTML or JavaScript file
  function setCountdown() {
    let countdownDate = new Date("June 01, 2025 16:40:25").getTime();
  
    let updateCount = setInterval(function () {
      let todayDate = new Date().getTime();
      let distance = countdownDate - todayDate;
  
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      day.textContent = days;
      hour.textContent = hours;
      minute.textContent = minutes;
      second.textContent = seconds;
  
      if (distance < 0) {
        clearInterval(updateCount);
        day.textContent = "0";
        hour.textContent = "0";
        minute.textContent = "0";
        second.textContent = "0";
      }
    }, 1000);
  }
  setCountdown();
  
  function sendMail(event) {
    event.preventDefault(); 
  
    let params = {
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    emailjs
      .send("service_d379em1", "template_34xk668", params)
      .then(
        function (response) {
          console.log("Email sent successfully:", response);
          alert("Email sent successfully");
          closeForm(); // Close the form after submission
        },
        function (error) {
          console.error("Email sending failed:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  }



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
function sendMail(event) {
    // Prevent the default form submission
    event.preventDefault();
  
    // Get form elements
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    // Validate inputs
    if (!emailInput.value || !messageInput.value) {
      alert('Please fill in all fields');
      return;
    }
  
    // Prepare form data
    const formData = {
      email: emailInput.value,
      message: messageInput.value
    };
  
    // Send email using Fetch API
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Success handling
      alert('Email sent successfully!');
      
      // Clear form fields
      emailInput.value = '';
      messageInput.value = '';
    })
    .catch(error => {
      // Error handling
      console.error('Error:', error);
      alert('Failed to send email. Please try again.');
    });
  }
  
  // Add event listener to form
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-container');
    if (form) {
      form.addEventListener('submit', sendMail);
    }
  
    // Close form function
    window.closeForm = function() {
      const formContainer = document.querySelector('.form-container');
      if (formContainer) {
        formContainer.style.display = 'none';
      }
    };
  });


//   Great! Here are the step-by-step instructions to set up EmailJS for your project:

// Create an Email Service
// Go to the EmailJS Dashboard
// Click on "Email Services"
// Add a new service (e.g., Gmail, Custom SMTP)
// If using Gmail:
// You'll need to create an "App Password" in your Google Account
// Go to Google Account > Security > App Passwords
// Select "Mail" and your device
// Use the generated password in EmailJS
// Create an Email Template
// Go to "Email Templates" in the EmailJS Dashboard
// Click "Create New Template"
// Design your email template
// Use placeholders like {{from_email}} and {{message}}



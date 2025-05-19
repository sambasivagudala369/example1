document.addEventListener('DOMContentLoaded', function() {
    // Load EmailJS SDK
    const script = document.createElement('script');
    script.src = 'https://cdn.emailjs.com/sdk/2.3.2/email.min.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = function() {
        // Initialize EmailJS with your user ID (sign up at emailjs.com)
        // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
        emailjs.init("YOUR_USER_ID");
    };

    // Get form and status elements
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Get form data
            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#email').value;
            const subject = contactForm.querySelector('#subject').value;
            const message = contactForm.querySelector('#message').value;

            // Prepare template parameters (these must match your EmailJS template)
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            };

            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    // Success message
                    formStatus.className = 'success';
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.style.display = 'block';

                    // Reset form
                    contactForm.reset();

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formStatus.style.display = 'none';
                    }, 5000);
                })
                .catch(function(error) {
                    // Error message
                    formStatus.className = 'error';
                    formStatus.textContent = 'There was an error sending your message. Please try again.';
                    formStatus.style.display = 'block';

                    console.error('EmailJS error:', error);
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                });
        });
    }

    // Alternative solution using a serverless function (example)
    // If you prefer to use a serverless function instead of EmailJS
    /*
    function sendViaServerless() {
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        fetch('https://your-serverless-function.netlify.app/.netlify/functions/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                formStatus.className = 'success';
                formStatus.textContent = 'Message sent successfully!';
                contactForm.reset();
            } else {
                throw new Error(data.message || 'Error sending message');
            }
        })
        .catch(error => {
            formStatus.className = 'error';
            formStatus.textContent = 'There was an error sending your message. Please try again.';
            console.error('Error:', error);
        });
    }
    */

    // FormSubmit option (simpler alternative)
    // 1. Add this attribute to your form: action="https://formsubmit.co/your@email.com" method="POST"
    // 2. Remove the JS form handling code above
    // More info at: https://formsubmit.co/
});

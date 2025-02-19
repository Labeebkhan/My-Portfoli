document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateForm(name, email, subject, message) {
        let isValid = true;
        let errorMessage = '';

        if (name.length < 3) {
            errorMessage += 'Name must be at least 3 characters long\n';
            isValid = false;
        }

        if (!validateEmail(email)) {
            errorMessage += 'Please enter a valid email address\n';
            isValid = false;
        }

        if (subject.length < 3) {
            errorMessage += 'Subject must be at least 3 characters long\n';
            isValid = false;
        }

        if (message.length < 10) {
            errorMessage += 'Message must be at least 10 characters long\n';
            isValid = false;
        }

        return { isValid, errorMessage };
    }

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[name="subject"]').value;
        const message = this.querySelector('textarea').value;

        const validation = validateForm(name, email, subject, message);

        if (!validation.isValid) {
            alert(validation.errorMessage);
            return;
        }

        try {
            const response = await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                {
                    from_name: name,
                    from_email: email,
                    subject: subject,
                    message: message,
                    to_email: 'labeebkhan7766@gmail.com'
                }
            );

            if (response.status === 200) {
                alert('Message sent successfully!');
                contactForm.reset();
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again later.');
        }
    });
});
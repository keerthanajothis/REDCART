import React, { useState } from 'react';

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form fields
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
            isValid = false;
        }

        setFormErrors(errors);

        if (isValid) {
            // Logic to handle form submission goes here
            setShowPopup(true);
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-content">
                <h2>Get in Touch</h2>
                <p>We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to say hello, feel free to reach out to us using the contact form below.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <span className="error">{formErrors.name}</span>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                    <span className="error">{formErrors.email}</span>
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                    <span className="error">{formErrors.message}</span>
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Thank you for your message! We'll get back to you as soon as possible.</p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
            <footer className="footer">
                <p>Contact Information:</p>
                <p>Email: rohiniece@gmail.com, ragaviece@gmail.com, keerthanaece@gmail.com</p>
                <p>Phone: 9894405828, 7676957351, 9025871135</p>
            </footer>
            <style>{`
               .contact-container {
                    position: relative;
                }
                
                .contact-content {
                    padding: 50px;
                    background-color: #f8f9fa; /* Light Gray */
                    border-radius: 8px;
                    margin-top: 100px;
                }
                
                .contact-content h2 {
                    color: #007bff; /* Blue */
                }
                
                .contact-form {
                    display: flex;
                    flex-direction: column;

                }
                
                .contact-form input,
                .contact-form textarea {
                    margin-bottom: 20px;
                    padding: 10px;
                    border-radius: 4px;
                    border: 1px solid #ced4da; /* Gray */
                }
                
                .contact-form button {
                    background-color: #007bff; /* Blue */
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                
                .contact-form button:hover {
                    background-color: #0056b3; /* Darker Blue */
                }
                
                .footer {
                    margin-top: 20px;
                    padding: 10px;
                    background-color: #f8f9fa; /* Light Gray */
                    border-radius: 8px;
                    text-align: center;
                }
                
                .footer p {
                    margin: 5px 0;
                }

                /* Styles for pop-up */
                .popup {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .popup-content {
                    background-color: white;
                    padding: 20px;
                    border-radius: 8px;
                    text-align: center;
                }

                .popup button {
                    background-color: #007bff; /* Blue */
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    margin-top: 10px;
                }

                .popup button:hover {
                    background-color: #0056b3; /* Darker Blue */
                }


                .error {
                    color: red;
                    font-size: 18px;
                }
            `}</style>
        </div>
    );
}

export default Contact;

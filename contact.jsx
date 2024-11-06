import React from 'react'
import Navbar from './navbar';
import Footer from './footer';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-page">
                <h1>Contact Us</h1>
                <form action="" className='contact-form'>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contact

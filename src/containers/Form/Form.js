import React, { useState, useRef } from 'react';
import './Form.css'
import emailjs from '@emailjs/browser';

// import dotenv from 'dotenv';
// dotenv.config();

const service_key = process.env.EMAILJS_SERVICE_KEY;
const public_key = process.env.EMAILJS_PUBLIC_KEY;
const template_key = process.env.EMAILJS_TEMPLATE_KEY;


const DemoForm = () => {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        industry: '',
        role: '',
        info: ''
    });

    console.log(formData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await emailjs.send('service_4twnw32', 'template_8o4k4l8', formData, 'MPTxnylBjJB_jobZn')
            .then((result) => {
                setSubmitted(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            {!submitted &&
                <>
                    <div class="form-header">
                        <h1>Contact Us</h1>
                    </div>
                    <div class="form-body">
                        <form onSubmit={handleSubmit} ref={form}>
                            <p>
                                <label for="Name">Name*</label>
                                <input type="text" placeholder="Your full name" required
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange} />
                            </p>

                            <p>
                                <label for="Email">Email*</label>
                                <input type="email" placeholder="Email" required
                                    value={formData.email}
                                    name='email'
                                    onChange={handleChange} />
                            </p>

                            <p>
                                <label for="Company">Company*</label>
                                <input type="text"
                                    placeholder="Enter your company"
                                    required
                                    value={formData.company}
                                    name='company'
                                    onChange={handleChange} />
                            </p>

                            <p>
                                <label for="Industry">Industry</label>
                                <input type="text" placeholder="Industry"
                                    value={formData.industry}
                                    name='industry'
                                    onChange={handleChange} />
                            </p>
                            <p>
                                <label for="Role">Role</label>
                                <input type="text" placeholder="Role"
                                    value={formData.role}
                                    name='role'
                                    onChange={handleChange} />
                            </p>
                            <p>
                                <label for="Info">Any other Information</label>
                                <textarea type="text" rows={5} placeholder="Feel free to share any other information, that can help us"
                                    value={formData.info}
                                    name='info'
                                    onChange={handleChange} />
                            </p>
                            <button type="submit" id="submit">Submit</button>
                        </form>
                    </div>
                </>
            }
            {submitted &&
                <div class="form-header">
                    <h1>We got your response</h1>
                </div>
            }

        </>
    )
};

export default DemoForm
import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import './Form.css'

const DemoForm = () => {

    return (

        <div class="outer-body">
            <div class="inner-body">

                <div class="form-header">
                    <h1>Contact Us</h1>
                </div>

                <div class="form-body">
                    <form action="">
                        <p>
                            <label for="Name">Name</label>
                            <input type="text" placeholder="Name" required />
                        </p>

                        <p>
                            <label for="Email">Company</label>
                            <input type="text" placeholder="Company" required />
                        </p>

                        <p>
                            <label for="number">Industry</label>
                            <input type="text" placeholder="Industry" required />
                        </p>
                        <p>
                            <label for="password">Role</label>
                            <input type="text" placeholder="Role" required />
                        </p>

                        <p>
                            <input type="submit" id="submit" value="Submit" />
                        </p>
                    </form>
                </div>
            </div>
        </div>)

};

export default DemoForm;
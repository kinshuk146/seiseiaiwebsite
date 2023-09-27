import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import './Form.css'

const DemoForm = () => {
    const [form] = Form.useForm();

    return (
        <Form className='demoform'
            layout={'vertical'}
            form={form}
            initialValues={{
                layout: 'vertical',
            }}
            style={{
                maxWidth: 600,
            }}
        >
            <Form.Item label="Name"  >
                <Input placeholder="Enter Full Name" />
            </Form.Item>
            <Form.Item label="Company Name">
                <Input placeholder="Your Company" />
            </Form.Item>
            <Form.Item label="Role">
                <Input placeholder="Your Role" />
            </Form.Item>
            <Form.Item label="Industry">
                <Input placeholder="Your Current Industry" />
            </Form.Item>
            <Form.Item >
                <button>Submit</button>
            </Form.Item>
        </Form>
    );
};
export default DemoForm;
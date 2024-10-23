import React from 'react';
import { Button, Checkbox, Divider, Form, Input } from 'antd';

const RegisterPage = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };


    return(
        <>
            <div className="register-page" style={{padding: "50px"}}>

                <h2 style={{textAlign:"center"}}>Đăng ký người dùng</h2>
                <Divider/>
                <Form
                    name="basic"
                    labelCol={{
                        span: 5,
                    }}
                    style={{
                        maxWidth: 600,
                        margin:"0 auto"
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Full name"
                        name="fullName"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your full name!',
                            },
                        ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your email!',
                            },
                        ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                        ]}
                    >
                    <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your phone!',
                            },
                        ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 5,
                            span: 16,
                        }}
                    >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item>
                </Form>

            </div>
            
        </>
    )
}

export default RegisterPage;
import React, { useState } from 'react';
import { Button, Checkbox, Divider, Form, Input, message, notification } from 'antd';
import { registerAPI } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [ isLogin, setIsLogin ] = useState(false);
    const Navigate = useNavigate();

    const onFinish = async (values) => {
        const {email, fullName, password, phone} = values;
        setIsLogin(true);
        const res = await registerAPI(email,fullName, password, phone);
        setIsLogin(false);
        if(res && res.data){
            message.success("đăng ký thành công!");
            Navigate("/");
        } else{
            notification.error({
                message:"Error register",
                description: res.message && Array.isArray(res.message) ? res.message[0] : res.message,
            });
        }
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
                        labelCol={{span:24}}
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
                        labelCol={{span:24}}
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
                        labelCol={{span:24}}
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
                        labelCol={{span:24}}
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

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={isLogin}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </div>
            
        </>
    )
}

export default RegisterPage;
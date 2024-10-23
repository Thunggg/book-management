import React, { useState } from 'react';
import { Button, Checkbox, Divider, Form, Input, message, notification } from 'antd';
import { loginAPI, registerAPI } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';
import { configConsumerProps } from 'antd/es/config-provider';


const LoginPage = () => {
    const [ isLogin, setIsLogin ] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const {username, password} = values;
        setIsLogin(true);
        const res = await loginAPI(username, password);
        setIsLogin(false);
        if(res && res.data){
            message.success("Đăng nhập thành công!");
            navigate("/");
        } else{
            notification.error({
                message:"Login Error",
                description: res.message && Array.isArray(res.message) ? res.message[0] : res.message
            })
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
                        label="Email"
                        name="username"
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

                    <Divider/>
                    <p>Bạn chưa có tài khoản? <Link to={"/register"}>Đăng ký tại đây</Link></p>
                    
                    <Form.Item style={{textAlign:"center"}} >
                        <Button type="primary" htmlType="submit" loading={isLogin}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </div>
            
        </>
    )
}

export default LoginPage;
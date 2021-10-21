import React,{useState} from 'react';
import axios from 'axios';
import { PageHeader,Button ,Row,Col,
  message,

Result,
Form,
Input,
Checkbox,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import './Login.css';
import { Typography } from 'antd';
import { assertExpressionStatement } from '@babel/types';

const { Title } = Typography;

function Login(props) {
let [success,Setsuccess]=useState(null);
let [email,Setemail]=useState('');
let [password,Setpassword]=useState('');
    const onFinish = async  (values) => {
        console.log('Success:', values);
        try{



          const res=await axios({
            url: "https://reqres.in/api/login",
            method: "POST",
             data: {
              "email": email,
              "password": password,
             }

   })
   message.success('LoggedIn Succesfully');
   //Setsuccess(true);
   console.log(res);
        }catch(e){

           message.error('Login Failed');
        }
        
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>
        <PageHeader
    className="site-page-header"
   
    title="ATools."

    extra={[
        <Button key="3" className="headerButton1">Start Free Trial</Button>,
        <Button key="2" className="headerButton2">Login</Button>,
        ,
      ]}
  />
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {/* form container */}
      <Col xs={24} lg={10}  className="loginContainer">
      
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      wrapperCol={{ span: 24 }}
    >
      <Title level={2} style={{textAlign: 'center',}} className="formHeading"> Welcome Back</Title>
      <Title level={5} style={{textAlign: 'center',}}>Subtile Goes Here</Title>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input  placeholder="Email" size="large" onChange={(e)=>{
            Setemail(e.target.value)
        }} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
        
        size="large"
          type="password"
          placeholder="Password"
          onChange={(e)=>{
            Setpassword(e.target.value)
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button  htmlType="submit" className="login-form-button" size="large">
          Login
        </Button>
        
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>
      
      
    </Form>

    

      </Col>
      <Col xs={24} sm={24} md={24} lg={14}className="imageContainer"></Col>
    </Row>
        </>
    );
}

export default Login;
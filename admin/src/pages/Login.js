import React, { useState } from 'react'
import { Card, Input, Button, Spin } from 'antd'
import '../static/css/Login.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Login() {
  const [userName, setUserName] = useState('')
  const [pwd, setPwd] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const checkLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className='login-div'>
      <Spin tip='Loading...' spinning={isLoading} >
        <Card title='WINNSHIER Blog System' bordered={true} style={{width: 400}} >
          <Input
            id='userName'
            size='large'
            placeholder='Enter your username'
            prefix={<UserOutlined style={{ color: 'raba(0,0,0,.25)' }} />}
            onChange={(e) => {setUserName(e.target.value)}}
          />
          <br /><br />
          <Input.Password
            id='pwd'
            size='large'
            placeholder='Enter your password'
            prefix={<LockOutlined style={{ color: 'raba(0,0,0,.25)' }}/> }
            onChange={(e) => {setPwd(e.target.value)}}
          />
          <br /><br />
          <Button type='primary' size='large' block onClick={checkLogin} >Login in</Button>
        </Card>
      </Spin>
    </div>
  )
}

export default Login
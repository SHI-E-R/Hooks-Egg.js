import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { Card, Input, Button, Spin, message } from 'antd'
import Axios from 'axios'
import '../static/css/Login.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import servicePath from '../config/apiUrl';

function Login() {
  const [userName, setUserName] = useState('')
  const [pwd, setPwd] = useState('')
  const user = useRef({ userName: '', pwd: ''})
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const handleEnterKey = (e) => {
    switch (e.keyCode) {
      case 13:
        checkLogin()
        break
      default: break
    }
  }

  useEffect(() => {
    document.addEventListener("keypress", handleEnterKey)
    return () => {
      document.removeEventListener("keypress", handleEnterKey)
    }
  }, [])

  useEffect(() => {
    user.current = {
      userName,
      pwd
    }
  }, [userName, pwd])

  const checkLogin = () => {
    setIsLoading(true)

    if (!user.current.userName) {
      message.error('用户名不能为空！')
      setIsLoading(false)
      return false
    } else if (!user.current.pwd) {
      message.error('密码不能为空！')
      setIsLoading(false)
      return false
    }
    let dataProps = {
      'userName': user.current.userName,
      'password': user.current.pwd
    }
    Axios({
      method: 'post',
      url: servicePath.checkLogin,
      data: dataProps,
      withCredentials: true
    }).then(res => {
      setIsLoading(false)
      if (res.data.data === '登录成功') {
        localStorage.setItem('openId', res.data.openId)
        history.push('/index')
      } else {
        message.error('用户名或密码错误！')
      }
    }).catch(() => {
      setIsLoading(false)
    })
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
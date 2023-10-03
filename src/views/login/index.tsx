import { ChangeEvent, SetStateAction, useState } from 'react';
import style from './index.module.scss'
import { Input,Space,Button } from 'antd';

const Login = () => {
  const [usernameVal,setUsernameVal] = useState('')
  const [passwordVal,setPasswordVal] = useState('')

  const usernameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUsernameVal(e.target.value)
  }
  const passwordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPasswordVal(e.target.value)
  }
  const login = () => {
    console.log(usernameVal,passwordVal)
  }

  return(
    <div className={style.container}>
      {/* 背景 */}
      <div className={style.img}>
        {/* 表单内容 */}
        <div  className={style.form}>
          <Space  className={style.form} direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Input placeholder="用户名" style={{width: '500px',height: '45px'}} onChange={usernameChange}/>
            <Input.Password placeholder="密码" style={{width: '500px',height: '45px'}} onChange={passwordChange}/>
            <Button type="primary" style={{width: '500px',height: '40px'}} onClick={login}>登录</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default Login
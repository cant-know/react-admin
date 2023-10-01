import React from 'react'
import ReactDOM from 'react-dom/client'
// 清除默认样式
import 'reset-css'
// 全局样式
import './styles/index.scss'
import Router from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)

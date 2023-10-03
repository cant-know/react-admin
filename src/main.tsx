import React from 'react'
import ReactDOM from 'react-dom/client'
// 清除默认样式
import 'reset-css'
// 全局样式
import './styles/index.scss'
import Router from './router/index.tsx'
import { Provider } from 'react-redux'
import store from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
  </Provider>
)

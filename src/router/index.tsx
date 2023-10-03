import App from '../App.tsx'
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import Home from '../views/home/index.tsx'
import Login from '../views/login/index.tsx'
import About from '../views/about/index.tsx'
import Page1 from '../views/home/page1/index.tsx'
import Page2 from '../views/home/page2/index.tsx'

const baseRouter = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}>
        <Route path='*' element={<Navigate to='/home'></Navigate>}></Route>
        <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
        <Route path='/home' element={<Home></Home>}>
          <Route path='/home' element={<Navigate to='/home/page1'></Navigate>}></Route>
          <Route path='page1' element={<Page1></Page1>}></Route>
          <Route path='Page2' element={<Page2></Page2>}></Route>
          <Route path='Page3' element={<Page2></Page2>}>
            <Route path='1' element={<Page1></Page1>}></Route>
            <Route path='2' element={<Page1></Page1>}></Route>
            <Route path='3' element={<Page1></Page1>}></Route>
          </Route>
          <Route path='Page4' element={<Page2></Page2>}>
            <Route path='1' element={<Page1></Page1>}></Route>
            <Route path='2' element={<Page1></Page1>}></Route>
          </Route>
          <Route path='Page5' element={<Page2></Page2>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default baseRouter
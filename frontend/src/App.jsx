import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import AuthPage from "./pages/AuthPage"
import Taskpage from './pages/Taskpage'
import { getUserDetail } from './redux/actions/user';
import './App.css'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.userToken) {
      dispatch(getUserDetail())
    }

  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/tasks' element={<Taskpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

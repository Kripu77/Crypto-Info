import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Error from './components/Error';
import { useLoginContext } from './context/LoginInContext';
import Loading from './components/Loading';
import Coin from './pages/Coin';

const App = () => {
  const {loading, error} =useLoginContext()
  if(loading){
   return <Loading/>
  }
  
  
    return (
      <div>
        <Router>
          <Header />
          <Routes>
              <Route exact path="/" element={<Signin/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path='/coin/:id' element={<Coin/>}></Route>
              <Route path="*" element={<Error/>}></Route>
          </Routes>
         
        </Router>
      </div>
    );
}


//protected routes
// const ProtectedRoute=(props)=>{
// const {currentUser} = useLoginContext();
// const {path} = props
// return currentUser ? <Route {...props} />: <Redirect to={{ pathname: '/', state: {from: path}}}/>
// }
export default App

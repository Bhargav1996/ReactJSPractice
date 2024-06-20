
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/UserContextProvide'

function App() {
  

  return (
      <UserContextProvider>
      <h1> Context API</h1>
      <Login/>
      <Profile/>
      </UserContextProvider>
    
  )
}

export default App

import  {useState, useEffect} from 'react'
import {login, getUser} from './API'

import { useNavigate } from 'react-router-dom';


const Login = (setLogin) => {
  const [user, setUser] = useState({username: '', password: ''});
  const [dummyUser, setDummyUser] = useState(null)
  const [error, setError] = useState('');
  const [token, setToken] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const getDummyUser = async () => {
      const data = await getUser(1)
      setDummyUser(data)
    }
    getDummyUser()
  }, [])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const {username, password} = dummyUser
      const data = await login({username, password});
      setToken(data)
      if (token) {
        setLogin(true)
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <h4>{error}</h4>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" value={user.username} onChange={handleChange} />
        <input type="password" placeholder="password" name="password" value={user.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}



export default Login;
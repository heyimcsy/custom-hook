import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import useInput from './hooks/useInput'

function App() {
  const [name, onChangeNameHandler] = useInput()
  const [password, onChangePassHandler] = useInput()

  // const [name, setName] = useState('')
  // const [password, setPassword] = useState('')

  // const onChangeNameHandler = (e) => {
  //   setName(e.target.value)
  // }
  // const onChangePassHandler = (e) => {
  //   setPassword(e.target.value)
  // }
  return (
    <div>
      CUSTOM HOOK
      <input type="text" value={name} onChange={onChangeNameHandler} placeholder={'이름적는 곳'} />
      <input type="password" value={password} onChange={onChangePassHandler} />
    </div>
  )
}

export default App

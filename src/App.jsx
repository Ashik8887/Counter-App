import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height:'100vh'}} className='w-100 d-flex justify-content-center align-items-center'>
     <Counter/>
    </div>
  )
}

export default App

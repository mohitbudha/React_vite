import { useState } from 'react'
import './App.css'
import Top from './component/Top'
import Profilecards from './component/Profilecards'
import A from './assets/a.png'
import Profilecard from './component/Profilecard'
import Logintoggle from './component/Logintoggle'
import Themetoggle from './component/Themetoggle'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Top/> */}
    {/* <div className='flex justify-center gap-4 mt-6'>
    <div>
      <Profilecards Image={A} Name="Mohit Magar" RolNo="01" />
    </div>
    <Profilecard/>
    </div> */}
     <Logintoggle/> 
    {/* <Themetoggle/> */}
    </>
  )
}

export default App

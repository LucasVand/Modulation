

import { useState } from 'react'


import ModuleView from './ModuleView/ModuleView'

function App() {

  const numbers = [0]
  const hardReset = [false, false, false, false, false, false, false, false, false, false]
  const softReset = [false, false, false, false, false, false, false, false, false, false]
  const [isDone, setIsDone] = useState(false)

  const modules = numbers.map((num: number) => {
    return (
      <ModuleView isDone={isDone} setIsDone={setIsDone} hardReset={hardReset[num]} softReset={softReset[num]}></ModuleView>
    )
  })
  return (
    <>
      <div className='z'>
        <div className='sideBar'></div>
        <div className='moduleCont'>
          {modules}
        </div>
        <button onClick={() => {
          softReset[0] = true
        }}></button>

      </div>

    </>
  )
}

export default App

//width: 1350px;
//height: 600px;
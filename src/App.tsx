

import { useState } from 'react'


import ModuleView from './ModuleView/ModuleView'

function App() {
  const [fin, setFin] = useState(false)
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const modules = numbers.map((num: number) => {
    return (
      <ModuleView isDone={fin} setIsDone={setFin}></ModuleView>
    )
  })
  return (
    <>
      <div className='z'>
        <div className='sideBar'></div>
        <div className='moduleCont'>
          {modules}
        </div>

      </div>

    </>
  )
}

export default App

//width: 1350px;
//height: 600px;
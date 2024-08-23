import React, { useState } from 'react'
import { Crude } from '../Crude'
import ApiItems from './ApiItems'

const ApiList = () => {
    let {myapi, setmyApi}= useState(Crude)
    console.log(myapi)
  return (
    <div>
      {myapi.map((x)=> (
        <ApiItems key={x.id} tunde={x}/>
      ))}
    </div>
  )
}

export default ApiList

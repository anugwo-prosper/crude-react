import React from 'react'

const ApiItems = ({tunde}) => {
  
  return (
    <div>
      <h3>{tunde.title}</h3>
      <p>{tunde.body}</p>
    </div>
  )
}

export default ApiItems

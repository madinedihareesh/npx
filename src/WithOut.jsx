import React from 'react'

const WithOut = () => {
  return React.createElement("div",
    null,
    React.createElement("h1",null,"Welcome to React"),
    React.createElement("p",null,"This is a sample paragraph")
    
  )
}

export default WithOut
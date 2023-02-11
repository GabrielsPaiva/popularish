import React from 'react'

// components
import Home from './pages/Home/index'

//styles 
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: white;
}
body{
  background-color: rgb(20,20,20)
}
`


export default function App(){
  return(
    <>
      <GlobalStyle/>
      <Home/>
    </>
  )
}

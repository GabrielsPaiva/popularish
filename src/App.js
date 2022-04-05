import React from 'react'

//components
import Header from './components/Header'
import Main from './components/Main'

//styles 
import styled, { createGlobalStyle } from 'styled-components'
import Footer from './components/Footer'


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
      <Header/>
      <Footer/>
    </>
  )
}

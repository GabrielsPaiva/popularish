import React from "react"

// styles
import styled from "styled-components"

// components
import PopularSeries from "./popularSeries"
import PopularFilms from './popularFilms'

const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 55em;
`

export default function Main(){
    return(
        <Div>
          <PopularSeries/>
          <PopularFilms/>
        </Div>
    )
}
import React from "react"

// styles
import styled from "styled-components"
import media, { customMedia } from "styled-media-query"

// components
import PopularSeries from "./popularSeries"
import PopularFilms from './popularFilms'

const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100em;

${media.lessThan("large")`
height: 100vw;
`}
${media.lessThan("medium")`
height: 52em;
`}
${media.lessThan("small")`
height: 46em;
`}
`

export default function Main(){
    return(
        <Div>
          <PopularSeries/>
          <PopularFilms/>
        </Div>
    )
}
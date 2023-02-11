import React from "react"

// components
import PopularList from "./popularList"

// styles
import * as S from './style'

const Main = () => {
  
  return (
    <S.Div>
      <PopularList listType='movie' title='title' section='Filmes'/>
      <PopularList listType='tv' title='name' section='Séries'/>
    </S.Div>
  )
}

export default Main
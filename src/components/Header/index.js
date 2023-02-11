import React from "react";

// styles & images
import * as S from './style';
import siteName from '../../assets/site_name.png'

// libs
import { Link } from 'react-router-dom'

export default function Header() {
    return (
            <S.Container>
                <Link to='/'>
                    <S.Title src={siteName} alt="" />
                </Link>
                <S.Nav>
                    <S.UL>
                        <Link to='/'><S.Li>Inicio</S.Li></Link>
                        <Link to='series'><S.Li>Séries</S.Li></Link>
                        <Link to='filmes'><S.Li>Filmes</S.Li></Link>
                    </S.UL>
                </S.Nav>
            </S.Container>
    )
}
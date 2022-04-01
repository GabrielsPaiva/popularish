import React from "react";

// styles & images
import styled from "styled-components";
import media, { generateMedia } from "styled-media-query";
import siteName from 'C:/Users/gabri/OneDrive/Documentos/VS code/Desafios/filmflix/src/assets/site_name.png'

// libs
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
} from 'react-router-dom'

// components
import Main from "./Main";
import FilmsCatalogue from "./FilmsCatalogue";
import SeriesCatalogue from "./SeriesCatalogue";


const customMedia = generateMedia({
    Laptop: '1024px',
    mobileS: '320px'
})

const Container = styled.div`
background: black;
display: flex;
align-items: center;
width: 100%;
height: 10em;
font-family: 'Montserrat', sans-serif;

${media.lessThan('medium')`
height: 8em;
`}
${media.lessThan('small')`
height: 6em;
`}

a{
    width: 25%;
    margin-right: 3em;
}
Nav a{
    margin-right: 1em;
}
`
const Title = styled.img`
color: white;
width: 90%;
height: 90%;

${customMedia.lessThan('Laptop')`
width: 100%;
`}
${media.lessThan('small')`
width: 140%;
height: 80%;
`}
${customMedia.lessThan('mobileS')`
width: 150%;
`}
`
const Nav = styled.nav`
width: 30%;
`
const UL = styled.ul`
display: flex;
justify-content: space-between;
list-style: none;
font-size: 25px;
width: 100%;
`
const Li = styled.li`
cursor: pointer;

&:hover{
 color: gray;
}

${media.lessThan('medium')`
font-size: 14px;
`}
`

// caixa dos carrosséis

const Div = styled.div`
.gglJDZ {
    margin-top: 250px;
}
.grUxXV{
    margin-top: 10em;
}
`


export default function Header() {
    return (
        <Router>
            <Container>
                <Link to='/'>
                    <Title src={siteName} alt="" />
                </Link>
                <Nav>
                    <UL>
                        <Link to='/'><Li>Inicio</Li></Link>
                        <Link to='series'><Li>Séries</Li></Link>
                        <Link to='filmes'><Li>Filmes</Li></Link>
                    </UL>
                </Nav>
            </Container>

            <Div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="series" element={<SeriesCatalogue/>} />
                    <Route path="filmes" element={<FilmsCatalogue />} />
                </Routes>
            </Div>
        </Router>
    )
}
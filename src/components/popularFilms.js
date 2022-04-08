import React from "react";

// styles
import styled from 'styled-components'
import media, { generateMedia } from "styled-media-query";

// libs
import Carousel from "react-elastic-carousel";
import axios from "axios";


const customMedia = generateMedia({
    customMedium: '767px',
    mobileM: '375px'
})


const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Poster = styled.img`
width: 70%;

${customMedia.lessThan("customMedium")`
width: 40%;
`}
${media.lessThan('small')`
width: 50%;
`}
${customMedia.lessThan('mobileM')`
width: 60%;
`}
`

const H2 = styled.h2`
font-family: 'Montserrat', sans-serif;
text-align: center;
margin-top: 1em;

${media.lessThan("medium")`
font-size: 16px;
`}
`

const apiFilms = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=252d60063de5e2a6e49de1f14f0f68fe&language=pt-BR'
})

export default class Filmes extends React.Component {

    state = {
        filmsList: [],
        carouselShownItems: 3 
    }

    componentDidMount() {
        this.getSeries()
        this.itemsToShow()
    }

    getSeries = async () => {
        const response = await apiFilms.get()

        const films = response.data.results.map((item) => {
            return {
                ...item,
                poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }
        })
        this.setState({
            filmsList: films
        })
    }

    itemsToShow = () =>{
        if( window.innerWidth <= 767 ){
            this.setState({
                carouselShownItems: 1
            })
        }else{
            this.setState({
                carouselShownItems: 3
            })
        }
    }

    render() {
        const { carouselShownItems, filmsList } = this.state
        return (
            <Carousel itemsToShow={carouselShownItems} pagination={false}>

                {filmsList.map((item) => (
                    <Div key={item.id}>
                        <Poster src={item.poster} alt='' />
                        <H2>{item.title}</H2>
                    </Div>
                ))}

            </Carousel>
        )
    }
}
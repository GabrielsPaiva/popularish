import React from "react";

// styles
import styled from 'styled-components'

// libs
import Carousel from "react-elastic-carousel";
import axios from "axios";



const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Poster = styled.img`
width: 70%;
`
const H2 = styled.h2`
font-family: 'Montserrat', sans-serif;
text-align: center;
margin-top: 1em;
`


const apiFilms = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=252d60063de5e2a6e49de1f14f0f68fe&language=pt-BR'
})

export default class Filmes extends React.Component {

    state = {
        filmsList: []
    }

    componentDidMount() {
        this.getSeries()
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

    render() {
        return (
            <Carousel itemsToShow={3} pagination={false}>

                {this.state.filmsList.map((item) => (
                    <Div>
                        <Poster src={item.poster} alt='' />
                        <H2>{item.title}</H2>
                    </Div>
                ))}

            </Carousel>
        )
    }
}
import React from "react";

// styles
import styled from 'styled-components'

// libs
import axios from "axios";



const Div = styled.div`
display: flex;
width: 100%;
`
const MoviesBox = styled.div`
display: flex;
width: 60%;
margin: 2em 0 0 2em;
`
const Poster = styled.img`
width: 40%;
`
const Details = styled.div`
display: flex;
flex-direction: column;
margin-left: 2em;
`
const Title = styled.h2`
font-family: 'Montserrat', sans-serif;
margin-top: 1em;
`
const Overview = styled.p`
font-family: 'Montserrat', sans-serif;
width: 70%;
margin-top: 1em;
`
const Date = styled.h3`
font-family: 'Montserrat', sans-serif;
margin-top: 2em;
`
const Rate = styled.h2`
margin: 2em 0 0 12%;
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
        console.log(this.state.filmsList)
        return (
            <>
                {this.state.filmsList.map((item) => (
                    <Div>
                        <MoviesBox>
                            <Poster src={item.poster} alt='' />
                            <Details>
                                <Title>{item.title}</Title>
                                <Overview>{item.overview}</Overview>
                                <Date>Lançado em : {item.release_date}</Date>
                                <Rate>{item.vote_average}</Rate>
                            </Details>
                        </MoviesBox>
                    </Div>
                ))}
            </>
        )
    }
}
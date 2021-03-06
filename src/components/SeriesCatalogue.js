import React from "react";

// styles & images
import styled from 'styled-components'
import media, { generateMedia } from "styled-media-query";
import rateStar from 'C:/Users/gabri/OneDrive/Documentos/VS code/Desafios/filmflix/src/assets/rate_star.png'

// libs
import axios from "axios";



const Div = styled.div`
display: flex;
width: 100%;

${media.lessThan('small')`
justify-content: center;
`}
`
const InputBox = styled.div`
display: flex;
flex-direction: row-reverse;
width: 90%;

${media.lessThan('small')`
justify-content: center;
width: 100%;
`}
`
const Input = styled.input`
background-color: black;
font-size: 22px;
border: none;
width: 25%;
height: 2.5em;
margin-top: 4em;
outline-color: white;
opacity: 0.5;

&:focus{
    opacity: 0.8;
}

${media.lessThan('medium')`
width: 35%;
height: 2em;
`}
${media.lessThan('small')`
width: 60%;
height: 1.5em;
margin-top: 2em;
`}
`
const MoviesBox = styled.div`
display: flex;
width: 65%;
margin: 4em 0 1em 2em;

${media.lessThan('medium')`
width: 90%;
`}
${media.lessThan('small')`
flex-direction: column;
align-items: center;
margin-left: 0;
`}
`
const Poster = styled.img`
width: 40%;
`
const Details = styled.div`
display: flex;
flex-direction: column;
margin-left: 2em;

${media.lessThan('small')`
align-items: center;
text-align: center;
margin: 0;
border-bottom: solid 2px;
padding-bottom: 1em;
`}
`
const Title = styled.h2`
font-family: 'Montserrat', sans-serif;
margin-top: 1em;
`
const Overview = styled.p`
font-family: 'Montserrat', sans-serif;
width: 95%;
margin-top: 1em;
`
const Date = styled.h3`
font-family: 'Montserrat', sans-serif;
margin-top: 2em;
`
const RatingBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
margin-top: 2em;
`
const Star = styled.img`
width: 20%;
`
const Rate = styled.h2`
font-size: 30px;
margin-left: 0.5em;
`


const apiSeries = axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv/popular?api_key=252d60063de5e2a6e49de1f14f0f68fe&language=pt-BR'
})

export default class Series extends React.Component {

    state = {
        seriesList: [],
        searchResult: []
    }

    componentDidMount() {
        this.getSeries()
    }

    getSeries = async () => {
        const response = await apiSeries.get()

        const series = response.data.results.map((item) => {
            return {
                ...item,
                poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }
        })
        const seriesVar = series

        seriesVar.splice(10, 1)

        this.setState({
            seriesList: seriesVar,
            searchResult: seriesVar
        })
    }

    searchBox = (event) => {
        const { seriesList } = this.state;

        if (event.target.value === '') {
            this.setState({
                searchResult: seriesList
            })
            return;
        }
        const search = seriesList.filter((item) => {
            if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true;
            }
        })
        this.setState({
            searchResult: search
        })
    }

    render() {
        return (
            <>
                <InputBox>
                    <Input type="text" placeholder="Pesquise aqui" onChange={this.searchBox} />
                </InputBox>
                {this.state.searchResult.map((item) => (
                    <Div key={item.id}>
                        <MoviesBox>
                            <Poster src={item.poster} alt='' />
                            <Details>
                                <Title>{item.name}</Title>
                                <Overview>{item.overview}</Overview>
                                <Date>Lan??ado em : {item.first_air_date}</Date>
                                <RatingBox>
                                    <Star src={rateStar} alt="estrela dourada" />
                                    <Rate>{item.vote_average}</Rate>
                                </RatingBox>
                            </Details>
                        </MoviesBox>
                    </Div>
                ))}
            </>
        )
    }
}
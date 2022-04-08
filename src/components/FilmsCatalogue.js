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
height: 40%;
margin-top: 1em;
overflow-y: auto;
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
const ErrorBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 40em;
`
const NotFound = styled.h2`
margin-bottom: 10em;
`


const apiFilms = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=252d60063de5e2a6e49de1f14f0f68fe&language=pt-BR'
})

export default class Filmes extends React.Component {

    state = {
        filmsList: [],
        searchResult: [],
        errorMessage: ''
    }


    componentDidMount() {
        this.getFilms()
    }

    getFilms = async () => {
        const response = await apiFilms.get()

        const films = response.data.results.map((item) => {
            return {
                ...item,
                poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }
        })
        this.setState({
            filmsList: films,
            searchResult: films
        })
    }

    searchBox = (event) => {
        const { filmsList } = this.state

        if (event.target.value === '') {
            this.setState({
                searchResult: filmsList
            })
            return;
        }

        const search = filmsList.filter((item) => {
            if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true;
            }
            if (event.target.value !== item.title) {
                this.setState({
                    errorMessage: 'Sinto muito, não temos esse filme :/'
                })
            }else{
                this.setState({
                    errorMessage: null
                })
            }
        })

        this.setState({
            searchResult: search,
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
                                <Title>{item.title}</Title>
                                <Overview>{item.overview}</Overview>
                                <Date>Lançado em : {item.release_date}</Date>
                                <RatingBox>
                                    <Star src={rateStar} alt="estrela dourada" />
                                    <Rate>{item.vote_average}</Rate>
                                </RatingBox>
                            </Details>
                        </MoviesBox>
                    </Div>
                ))}
                <ErrorBox>
                    <NotFound>{this.state.errorMessage}</NotFound>
                </ErrorBox>
            </>
        )
    }
}
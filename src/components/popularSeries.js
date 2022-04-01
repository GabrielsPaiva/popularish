import React from "react";

// style
import styled from 'styled-components'

// series
import Carousel from "react-elastic-carousel";
import axios from "axios";

const apiSeries = axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv/popular?api_key=252d60063de5e2a6e49de1f14f0f68fe&language=pt-BR'
})


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


export default class Series extends React.Component {

    state = {
        seriesList: []
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
            seriesList: seriesVar
        })

    }


    render() {
        return (
            <Carousel itemsToShow={3} pagination={false}>
                
                {this.state.seriesList.map((item) => (
                    <Div>
                        <Poster src={item.poster} alt='' />
                        <H2>{item.name}</H2>
                    </Div>
                ))}

            </Carousel>
        )
    }
}
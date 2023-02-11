import styled from "styled-components"


export const Div = styled.div`
display: flex;
width: 100%;
`
export const InputBox = styled.div`
display: flex;
flex-direction: row-reverse;
width: 90%;
`
export const Input = styled.input`
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
`
export const MoviesBox = styled.div`
display: flex;
width: 65%;
margin: 4em 0 1em 2em;
`
export const Poster = styled.img`
width: 40%;
`
export const Details = styled.div`
display: flex;
flex-direction: column;
margin-left: 2em;
`
export const Title = styled.h2`
font-family: 'Montserrat', sans-serif;
margin-top: 1em;
`
export const Overview = styled.p`
font-family: 'Montserrat', sans-serif;
width: 95%;
height: 40%;
margin-top: 1em;
overflow-y: auto;
`
export const Date = styled.h3`
font-family: 'Montserrat', sans-serif;
margin-top: 2em;
`
export const RatingBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
margin-top: 2em;
`
export const Star = styled.img`
width: 20%;
`
export const Rate = styled.h2`
font-size: 30px;
margin-left: 0.5em;
`
export const ErrorBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 40em;
`
export const NotFound = styled.h2`
margin-bottom: 10em;
`
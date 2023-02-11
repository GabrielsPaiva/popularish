import styled from "styled-components"

export const Container = styled.div`
background: #222222;
display: flex;
align-items: center;
width: 100%;
height: 10em;
font-family: 'Montserrat', sans-serif;

a{
    width: 25%;
    margin-right: 3em;
}
Nav a{
    margin-right: 1em;
}
`
export const Title = styled.img`
color: white;
width: 90%;
height: 90%;
`
export const Nav = styled.nav`
width: 30%;
`
export const UL = styled.ul`
display: flex;
justify-content: space-between;
list-style: none;
font-size: 25px;
width: 100%;
`
export const Li = styled.li`
cursor: pointer;

&:hover{
 color: gray;
}
`
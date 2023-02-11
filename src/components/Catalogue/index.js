import React, { useEffect, useRef, useState } from "react";

// style & images
import * as S from './style'
import rateStar from '../../assets/rate_star.png'
import { getPopular } from "../../pages/api";

const Catalogue = ({ type, title }) => {

    const [list, setList] = useState([])
    const [filteredList, setFilteredList] = useState([])

    const searchInput = useRef()

    const searchBox = (e) => {
        const value = e?.target.value
        if (value === '' || undefined) {
            setFilteredList(list)
        } else {
            const searchFilter = list.filter((item) => {
                return item[title].toLowerCase().includes(e.target.value.toLowerCase())
            })
            setFilteredList(searchFilter)
        }
    }

    useEffect(() => {
        const getPopularList = async () => {
            const res = await getPopular(type)
            setList(res.data.results)
            setFilteredList(res.data.results)
        }

        searchInput.current.value = ''

        getPopularList()
    }, [type, setList])
    return (
        <>
            <S.InputBox>
                <S.Input type="text" placeholder="Pesquise aqui" onChange={(e) => searchBox(e)} ref={searchInput}/>
            </S.InputBox>
            {filteredList.length > 0 && filteredList.map((item) => (
                <S.Div key={item.id}>
                    <S.MoviesBox>
                        <S.Poster src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt='' />
                        <S.Details>
                            <S.Title>{item[title]}</S.Title>
                            <S.Overview>{item.overview}</S.Overview>
                            <S.Date>Lançado em : {item.release_date}</S.Date>
                            <S.RatingBox>
                                <S.Star src={rateStar} alt="estrela dourada" />
                                <S.Rate>{item.vote_average}</S.Rate>
                            </S.RatingBox>
                        </S.Details>
                    </S.MoviesBox>
                </S.Div>
            ))}
        </>
    )
}

export default Catalogue
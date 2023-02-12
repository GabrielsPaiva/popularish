import React, { useEffect, useState } from "react"
import { getPopular } from "../api"

// libs
import Carousel from 'react-elastic-carousel'

// styles
import * as S from './style'

const carousel_container = {
    pagingDotsStyle: {
        display: 'none'
    },
    style: {
        margin: '20px',
        width: '100%',
    }
}

const PopularList = ({ listType, title, section }) => {

    const [filmsList, setFilmsList] = useState([])
    const [seriesList, setSeriesList] = useState([])
    const [carouselShownItems, setCarouselShownItems] = useState()

    const setList = listType === 'movie' ? setFilmsList : setSeriesList
    const list = listType === 'movie' ? filmsList : seriesList

    const itemsToShow = () => {
        if (window.innerWidth <= 767) {
            setCarouselShownItems(1)
        } else {
            setCarouselShownItems(3)
        }
    }

    useEffect(() => {
        const getPopularList = async () => {
            const res = await getPopular(listType)
            return setList(res.data.results)
        }

        getPopularList()
        itemsToShow()
    }, [listType, setList])

    return (
        <S.CarouselsBox>
            <S.H2>{`${section} Populares`}</S.H2>
            <Carousel
                style={carousel_container.style}
                itemsToShow={carouselShownItems}
                pagination={false}
            >
                {list.map((item) => (
                    <S.Container key={item.id}>
                        <S.Poster
                            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                            alt={`poster comercial de ${item[title]}`}
                        />
                    </S.Container>
                ))}

            </Carousel>
        </S.CarouselsBox>
    )
}

export default PopularList
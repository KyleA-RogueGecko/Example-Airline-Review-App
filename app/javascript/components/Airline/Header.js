import React, { Component } from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.div`
    padding: 50px 100px 50px 0;
    font-size: 30px;

    img {
        height: 60px;
        width: 60px;
        border-radius: 100%;
        border: 1px solid rgba(0,0,0,0.1);
        margin-bottom: -8px;
        margin-right: 8px;
    }
`
const TotalReviews = Styled.div`
    font-size: 18px;
    padding: 10px 0;
`
const TotalOutOf = Styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
`

const Header = (props) => {
    const {name, image_url } = props.attributes
    const average = props.average
    const total = props.reviews.length

    return (
        <Wrapper>
            <h1> <img src={image_url} alt={name} /> {name} </h1>
            <div>
                <TotalReviews>{total} User Reviews</TotalReviews>
                <div className="starRating"></div>
                <TotalOutOf>{average.toFixed(1)} out of 5</TotalOutOf>
            </div>
        </Wrapper>
    )
}

export default Header
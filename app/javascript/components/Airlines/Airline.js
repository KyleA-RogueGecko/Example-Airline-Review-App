import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Styled from 'styled-components'
import Rating from '../Airline/Rating/Rating'

const Card = Styled.div`
    border: 1px solid #efefef;
    background: #fff;
    text-align: center;
`
const AirlineLogo = Styled.div`
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    img {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const AirlineName = Styled.div`
    padding: 20px 0 10px 0;
`
const LinkWrapper = Styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`

const Airline = (props) => {
    return (
        <Card>
            <AirlineLogo>
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </AirlineLogo>
            <AirlineName>{props.attributes.name}</AirlineName>
            <Rating score={props.attributes.avg_score}></Rating>
            <LinkWrapper>
                <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
            </LinkWrapper>
        </Card>
    )
}

export default Airline
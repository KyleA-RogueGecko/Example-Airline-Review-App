import React from 'react'
import Rating from './Rating/Rating'
import Styled from 'styled-components'

const Card = Styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 4px;
    padding: 20px;
    margin: 0 20px 20px 0;
    margin-right: 12px;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
`

const RatingContainer = Styled.div`
    display: flex;
    flex-direction: row; 
`

const Title = Styled.div`
    padding: 20px 0 0 0;
    font-size: 18px;
`

const Description = Styled.div`
    padding: 0 0 20px 0;
    font-size: 14px;
`

const Options = Styled.div`
position:absolute;
right :15px;
top: 15px;
display: flex;
flex-direction: columns;
`

const Icon = Styled.button`
  cursor: pointer;
  box-shadow: none;
  color: #71b406;
  border-radius: 4px;
  margin: 0 4px;
  i {
    font-size: 18px;
  }
`

const IconDelete = Styled.button`
cursor: pointer;
  box-shadow: none;
  color: red;
  border-radius: 4px;
  margin: 0 4px;
  i {
    font-size: 18px;
  }
`

const Review = (props) => {
    const {score, title, description } = props.attributes

    return(
    <Card>
        <RatingContainer>
            <Rating score={score}></Rating>
        </RatingContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Options>
            <IconDelete onClick={props.handleDestory.bind(this, props.id)}> <i className="fa fa-trash"></i></IconDelete>
            <Icon> <i className="fa fa-pencil"></i></Icon>
        </Options>
    </Card>
    )
}

export default Review
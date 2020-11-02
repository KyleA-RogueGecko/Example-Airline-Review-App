import React, {useState, useEffect, Fragment } from 'react'
import Axios from 'axios'
import Styled from 'styled-components'

import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import './Airline.css'

const Wrapper = Styled.div`
    margin-left: auto;
    margin-right: auto;
`

const Column = Styled.div`
    float: left; 
    height: 100vh;
    overflow-x: scroll;
    overflow-y: scroll; 
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    &:last-child {
        background: black;
        border-top: 1px solid rgba(255,255,255,0.5);
    }
`

const Main = Styled.div`
    padding-left: 60px;
`

const Airline = (props) => {
    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const slug = props.match.params.slug;
        const url = `/api/v1/airlines/${slug}`

        Axios.get(url)
            .then(resp => {
                setAirline(resp.data);
                setLoaded(true);
            })
            .catch(resp => console.log(resp))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()

        //setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const airline_id = airline.data.id

        Axios.post('/api/v1/reviews', {review, airline_id})
            .then(resp => {
                const included = [ ...airline.included, resp.data.data ];
                
                setAirline({ ...airline, included })
                setReview({ title: '', description: '', score: 0 })
            })
            .catch(resp => console.log(resp))
    }

    const handleDestroy = (e) => {

        Axios.delete('/api/v1/reviews/' + e)
            .then(resp => {
                let included = [...airline.included]
                let index = 0
                    for(let i of included){
                        if(e === i.id){
                            break
                        }
                        else {
                            index += 1
                        }
                    }
                    console.log(index)
                included.splice(index, 1)

                setAirline({ ...airline, included })
            })
            .catch(resp => console.log(resp))
    }

    const setRatingHandler = (score, e) => {
        e.preventDefault()
        setReview({...review, score})
    }

    let average = 0
    let reviews
    
    if (loaded && airline.included) {
        let total = 0;

        for(let r of airline.included){
            total += parseInt(r.attributes.score)
        }

        average = total > 0 ? (parseFloat(total) / parseFloat(airline.included.length)) : 0


        reviews = airline.included.map( (item, index) => {
            return (
                <Review 
                    key={index}
                    id={item.id}
                    attributes={item.attributes}
                    handleDestory={handleDestroy}
                />
            )
        })
    }  

    return (
        <Wrapper>
        { loaded &&
            <Fragment>
                <Column className="left">
                    <Main>                    
                        <Header 
                            attributes={airline.data.attributes}
                            reviews={airline.included}
                            average={average}
                        />
                        {reviews}
                    </Main>  
                </Column> 
                <Column className="middle"></Column>
                <Column className="right">
                    <ReviewForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        setRating={setRatingHandler}
                        attributes={airline.data.attributes}
                        review={review}
                    />
                </Column> 
            </Fragment>
        }
        </Wrapper>
    )
}

export default Airline
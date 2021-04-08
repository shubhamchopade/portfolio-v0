import React from 'react'
import styled from 'styled-components'
import bookPunditsImg from '././assets/projects/1.png'

export const ProjectComponent = () => {
    return (
        <Wrapper>
            <div>
                <p className='color slider-heading'>Checkout my best projects</p>
                <p className='color slider-subheading'>These projects are solely based on solving the very basic problems.</p>
            </div>
            <hr />
            <Container>
                <img src={bookPunditsImg} />
                <TextContainer>
                    <h3>The Book Pundits - Connecting Authors & Influencers</h3>
                    <p>Book Pundits are a book advertising company located in Chennai, India. Book Pundits are a book advertising company located in Chennai, India. Book Pundits are a book advertising company located in Chennai, India.</p>
                </TextContainer>

            </Container>
        </Wrapper>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem auto;

    @media ${(props) => props.theme.breakpoints.tablet} {
                display: unset;
    }


    img {
        width: 25rem;

        @media ${(props) => props.theme.breakpoints.tablet} {
                width: 100%;
        }
    }
`
const TextContainer = styled.div`
    max-width: 30rem;
    
    h3 {
        font-size: 1.6rem;
        color: ${(props) => props.theme.text.main};
    }

    p {
        font-size: 1.3rem;
        color: ${(props) => props.theme.text.secondary};
    }
`

const Wrapper = styled.section`
max-width: 60rem;
width: 95%;
margin: 2rem auto;
        .color {
            color: ${(props) => props.theme.text.secondary};
        }

      .slider-heading {
            font-size: 2rem;
            font-weight: bold;
            line-height: 0;

            @media ${(props) => props.theme.breakpoints.tablet} {
                font-size: 2rem;
            }
      }
      .slider-subheading {
            font-size: 1.2rem;
            font-weight: medium;
        }
`

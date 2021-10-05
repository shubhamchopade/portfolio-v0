import React from 'react'
import { Flex, Heading, Logo, TextBlock} from '../Common'
import tailwindGradientsImg from '../assets/projects/tailwind-gradient/cover.png'
import styled from 'styled-components'

export const TailwindGradient = () => {
    return (
        <Parent>
            <Flex justifyContent='flex-end' alignItems='center'>
                <Logo src={tailwindGradientsImg} />
                <div className='project-header'>
                    <Heading>Tailwind Gradient</Heading>
                    <TextBlock>Coming soon..</TextBlock>
                </div>
            </Flex>
        </Parent >
    )
}

const Parent = styled.main`
max-width: 70rem;
    width: 90%;
    margin: 2rem auto;

.project-header {
    margin-left: 2rem;
      @media ${props => props.theme.breakpoints.mobile}{
    margin-left: 0rem;
  }
}
.width-sm{
    max-width: 40rem;
}
`
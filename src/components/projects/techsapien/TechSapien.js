import React from 'react'
import { Cover, Flex, Heading, Logo, TextBlock, TextBlockHeading } from '../../common/Common'
import techSapienImg from './assets/cover.png'
import firstImg from './assets/1.png'
import secondImg from './assets/2.png'
import thirdImg from './assets/3.png'
import techSapienLogo from './assets/logo.svg'
import styled from 'styled-components'
import { motion } from "framer-motion"

export const TechSapien = () => {
    return (
        <Parent>
            <Flex justifyContent='flex-end' alignItems='center'>
                <Logo src={techSapienLogo} />
                <div className='project-header'>
                    <Heading>Tech Sapien</Heading>
                    <TextBlock>Techsapien is a blog built using Gatsby and TailwindCSS that aims to explain the web in a simplified manner. It is build because of the lack of live demos while explaining the concepts.</TextBlock>
                </div>
            </Flex>
            <Flex justifyContent='space-between' alignItems='flex-start'>
                <Cover src={techSapienImg} />
                <div className='project-header'>
                    <TextBlockHeading>Features</TextBlockHeading>
                    <TextBlock className='width-sm'>3 theme modes for better accessibility</TextBlock>
                    <TextBlock className='width-sm'>3 fonts for easy readability</TextBlock>
                    <TextBlock className='width-sm'>Support for MDX articles individually themed to fit the blog requirements</TextBlock>
                    <TextBlock className='width-sm'>Awesome curated lists as the ultimate resources page!</TextBlock>
                </div>
            </Flex>


            <TextBlockHeading>STATS</TextBlockHeading>
            <TextBlock>Development duration: 2 months</TextBlock>


            <TextBlockHeading>MY EXPERIENCE</TextBlockHeading>
            <TextBlock>I always wanted to build a community website so that I could contribute my part to the web dev community. Before starting with this project, I took several surveys from my close-knit community tech.sapien on instagram. It allowed me understand the real problems people were facing and I have been trying to address those with all my possible efforts.</TextBlock>

            <TextBlockHeading>Process</TextBlockHeading>
            <TextBlock>This is the third iteration of the initially planned tech sapien. I have followed standard practices to develop the UI mockups below using Figma.</TextBlock>
            <motion.img src={firstImg} />
            <TextBlock>This is another concept that I was working on for the resources page. It has a collection of all the awesome repositories that provides with the resources for all the technologies.</TextBlock>
            <motion.img src={secondImg} />
            <TextBlock>One of my previous concepts</TextBlock>
            <motion.img src={thirdImg} />

            <TextBlockHeading>Future</TextBlockHeading>
            <TextBlock>I am currently working on putting end-to-end courses for CSS and Javascript concepts.</TextBlock>
            <TextBlock>Providing tags to all the content so that they can be sorted accordingly</TextBlock>
            <TextBlock>Implementing a search functionality</TextBlock>

            <TextBlockHeading>Technologies</TextBlockHeading>
            <TextBlock>Github API

                MDX

                Gatsby

                Hosted on Netlify

                Images - open peeps</TextBlock>
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

img{
  border-radius: 0.5rem;
  margin: 0 auto;

    @media ${props => props.theme.breakpoints.tablet}{
    width: 100%;
  }
}
`
import React from 'react'
import { Cover, Flex, Heading, Logo, TextBlock, TextBlockHeading } from '../../common/Common'
import tailwindGradientsImg from './assets/cover.png'
import firstImg from './assets/tw1.png'
import secondImg from './assets/tw2.png'
import thirdImg from './assets/tw3.png'
import forthImg from './assets/tw4.png'
import styled from 'styled-components'
import { motion } from "framer-motion"

export const TailwindGradient = () => {
    return (
        <Parent>
            <Flex justifyContent='flex-end' alignItems='center'>
                <div className='project-header'>
                    <Heading>Tailwind Gradients Tool</Heading>
                    <TextBlock>This is a tool I was looking on the internet while building another hobby project. I was looking for a tool which would give me gradients in TailwindCSS for a chosen color. Then obviously I went ahead and implemented this project for the next month. I learnt to use react hooks in advanced ways. On top of that, I felt there was a need of implementing a color palette generator as well from which the tool would further generate the gradients. So this project covers two such sub-projects that actually helped me and my friends to choose tailwind color palette more conviniently. The tool also supports a backend framework Supabase which helps in implementing features like maintaining most liked colors.</TextBlock>
                </div>
            </Flex>
            <Flex justifyContent='space-between' alignItems='flex-start'>
                <Cover src={tailwindGradientsImg} />
                <div className='project-header'>
                    <TextBlockHeading>Features</TextBlockHeading>
                    <TextBlock className='width-sm'>Most liked colors</TextBlock>
                    <TextBlock className='width-sm'>Choose a brand color</TextBlock>
                    <TextBlock className='width-sm'>Get a color palette for the chosen color</TextBlock>
                    <TextBlock className='width-sm'>Get some gradients with respect to the chosen color</TextBlock>
                    <TextBlock className='width-sm'>Names all the colors</TextBlock>
                </div>
            </Flex>


            <TextBlockHeading>Initial Concept</TextBlockHeading>
            <TextBlock>The very first proof of concept was to generate a random gradient by pressing spacebar and letting the user copy the CSS class to use it in their project. The colors used were default colors in Tailwind v1.</TextBlock>
            <motion.img src={secondImg} />

            <TextBlock>Moving further, I had planned to offer a fixed number of palettes to the user to choose from and based on that, the tool would suggest some beautiful gradients. To verify this requirement, I conducted a few surveys and understood that people wanted this feature but for their own brand color. Therefore I modified the following to letting the user choose their custom brand color.</TextBlock>
            <motion.img style={{ width: "100%" }} src={firstImg} />


            <TextBlock>One of my previous concepts,</TextBlock>
            <motion.img src={thirdImg} />


            <TextBlock>Finally, I implemented this version of the tool. It has an added feature from the ones mentioned above i.e getting the tailwind.config.json file to be directly used in your project!</TextBlock>
            <motion.img src={forthImg} />
            <TextBlock>This is another concept that I was working on for the resources page. It has a collection of all the awesome repositories that provides with the resources for all the technologies.</TextBlock>


            <TextBlockHeading>Future</TextBlockHeading>





            <TextBlock>Copying the gradients CSS class to clipboard</TextBlock>
            <TextBlock>Improving the algorithms to generate the gradients and color palette</TextBlock>
            <TextBlock>Showing real life UI components to show how the color will look like</TextBlock>

            <TextBlockHeading>Technologies</TextBlockHeading>
            <TextBlock>TailwindCSS | React | Supabase</TextBlock>
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
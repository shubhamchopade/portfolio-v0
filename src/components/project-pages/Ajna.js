import React from 'react'
import { Cover, Flex, Heading, Logo, TextBlock, TextBlockHeading } from '../Common'
import tailwindGradientsImg from '../assets/projects/ajna/cover.svg'
import firstImg from '../assets/projects/ajna/ajna1.png'
import secondImg from '../assets/projects/ajna/ajna2.png'
import thirdImg from '../assets/projects/ajna/ajna3.png'
import forthImg from '../assets/projects/ajna/ajna4.png'
import sixthImg from '../assets/projects/ajna/ajna6.png'
import seventhImg from '../assets/projects/ajna/ajna7.png'
import eigthImg from '../assets/projects/ajna/ajna8.png'
import styled from 'styled-components'
import { motion } from "framer-motion"

export const Ajna = () => {
    return (
        <Parent>
            <Flex justifyContent='flex-end' alignItems='center'>
                <div className='project-header'>
                    <Heading>Ajna - A home security experience</Heading>
                    <TextBlock>n India, with a dramatic increase in burglaries in the recent years, it has become imperative to have security systems at one’s dwellings. Most of the existing security systems in the market are camera based which are found to be costly and hamper the privacy of one’s life. The user interface and user experience are not very friendly. Implementation of our system will help in reduction in burglaries as well as the mental peace among the users. Hence, it is necessary to develop and implement a very dependable home security system that can protect the user and their assets.</TextBlock>
                </div>
            </Flex>
            <TextBlock>One stop home security system which can detect the intrusion in one's house and notify the owner with a high priority notification on smartphone. Also, to provide an inexpensive solution to the presently overwhelming available products.</TextBlock>
            <Flex justifyContent='space-between' alignItems='flex-start'>
                <Cover src={tailwindGradientsImg} />
                <div className='project-header'>
                    <TextBlockHeading>Features</TextBlockHeading>
                    <TextBlock className='width-sm'>Detects unwanted entry in the house or office</TextBlock>
                    <TextBlock className='width-sm'>Notifies the family members with a high priority alarm</TextBlock>
                    <TextBlock className='width-sm'>Family members can arm and disarm the device remotely through Android app</TextBlock>
                    <TextBlock className='width-sm'>Patent Pending (Number: 201921003788 TEMP/E-1/4005/2019-MUM)</TextBlock>
                </div>
            </Flex>
            <Cover src={firstImg} />
            <Cover src={secondImg} />
            <Cover src={thirdImg} />
            <Cover src={forthImg} />
            <Cover src={sixthImg} />
            <Cover src={seventhImg} />
            <Cover src={eigthImg} />
            <TextBlockHeading>Future</TextBlockHeading>
            <TextBlock>Integration with Google Assistant</TextBlock>



            <TextBlockHeading>Technologies</TextBlockHeading>
            <TextBlock>Platform - Native Android App,  Programming Language - Java, IDE - Android Studio, Backend & Cloud - Firebase Authentication, Firebase Firestore, Architecture - MVVM</TextBlock>
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
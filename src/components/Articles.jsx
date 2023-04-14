import React from 'react'
import { Flex, Heading, Grid, Image, Text } from '@chakra-ui/react'

import MoneyImg from '../images/image-currency.jpg'
import RestaurantImg from '../images/image-restaurant.jpg'
import PlaneImg from '../images/image-plane.jpg'
import ConfettiImg from '../images/image-confetti.jpg'

const Article = ({ image, tag, title, description}) => {
    return (
        <Flex direction="column" bg="white" borderRadius="10px" alignItems="center" maxW={{ base: "80vw", lg: "400px"}}>
            <Image src={image} w="100%" maxH="400px" borderRadius="10px 10px 0 0"/>
            <Flex p="1.5em 1em" direction="column" gap="1em">
                <Text >{tag}</Text>
                <Heading fontSize="22px" fontWeight="600">{title}</Heading>
                <Text>
                    {description}
                </Text>
            </Flex>
        </Flex>
    )
}

const Articles = () => {
    return (
        <Flex direction="column" py="10em" justify="center" align="center" bg="hsl(0, 0%, 98%)" maxW="100vw" overflow="hidden">
            <Flex w="80vw" direction="column" gap="2em">

            <Heading fontSize="3em" fontWeight="400">Latest Articles</Heading>
            <Grid gridTemplateColumns="repeat(auto-fit, minmax(350px, 1fr))" gap="2em"  >
                <Article image={MoneyImg} tag={'By Claire Robinson'} title={'Receive money in any currency with no fees'} description={"The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."} />
                <Article image={RestaurantImg} tag={'By Wilson Hutton'} title={'Treat yourself without worrying about money'} description={"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."} />
                <Article image={PlaneImg} tag={'By Wilson Hutton'} title={"Take your Easybank card wherever you go"} description={"We want you to enjoy travels. This is why we don't charge any fees on purchases while you'r abroad. We'll even show you ..."} />
                <Article image={ConfettiImg} tag={'By Claire Robinson'} title={'Our invite-only Beta accounts are now live!'} description={"After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site."} />
            </Grid>
            </Flex>
        </Flex>
    )
}

export default Articles
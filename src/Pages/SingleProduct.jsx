import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiSolidOffer } from 'react-icons/bi';
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from 'react-icons/io';
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const SingleProduct = () => {
    return (


        <Box
            bgImage="url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?cs=srgb&dl=pexels-pixabay-262978.jpg&fm=jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            width="100%"
            height="350px"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
         <Box position={"absolute"} top={"4%"} left={"5%"} fontWeight={'bold'} >
            <Link to={"/"}>
            <IoChevronBackSharp size={'20px'} color='white' /></Link></Box> 
            <Box p={"0% 5%"} borderRadius={"16px 16px 0px 0px"} bg={"white"} mt={"400px"}>
                <Box >
                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                        <Box mt={"10px"}>
                            <Heading>Lazy Bear</Heading>
                            <p>Connaught Place, New Delhi</p>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <FaRegStar /> 4.5
                        </Box>
                    </Flex>

                    <Text display={'flex'} alignItems={'center'} gap={"4px"} color='#ff746a' ><BiSolidOffer /> 4 Offcers trending</Text>
                    <Text mt={'50px'}>Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache.</Text>
                </Box>
            </Box>

        </Box>
    )
}

export default SingleProduct;
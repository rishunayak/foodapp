import { Box, CSSReset, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { RiUserLocationLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import ImageSlider from '../Components/ImageSlider';


const Home = () => {

    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')))
    const nav=useNavigate()

    const [arr, setArry] = useState(['', '', '', '', '', '',])
    const [product, setProduct] = useState([])
    useEffect(() => {

        axios.get(`https://staging.fastor.in/v1/m/restaurant?city_id=${118}`, {
            headers: {
                'Authorization': `Bearer ${userInfo.token}`,
                'Content-Type': 'application/json',
            }
        }).then((r) => setProduct(r.data))
    }, [])
   
     const handleClick=()=>
     {
        nav('/resturent/1')
     }

    return (
        <>
            <Box w={"100%"} boxShadow={'2xl'} p={"10px 5%"} >
                <Box display={'flex'} alignItems={'center'} gap={"5px"}>
                    <Text fontWeight={'bold'} color={'#838BA1'}>Pre Order From  </Text>
                    <RiUserLocationLine />
                </Box>
                <Heading fontSize={"20px"}>Connaught Place</Heading>
            </Box>

            <Box display={"flex"} gap={"1px"} p={"0px 5%"} justifyContent={"space-between"} alignItems={'center'}>
                <Box bg={"#f0f0f5"} borderRadius={"0px 0px 16px 16px"} p={"30px 10px"} w={'200px'}>
                    <Heading color={'#8c9da9'}>Karan</Heading>
                    <Text fontWeight={"bold"} fontSize={"18px"}>Let's explore this evening</Text>

                </Box>
                <Box display={"flex"} gap={"15px"}>
                    <Box>
                        <Box bg={"#ff746a"} borderRadius={"16px"} p={"10px"}>
                            <BiSolidOffer size={"40px"} color='white' />
                        </Box>
                        <Text textAlign={'center'} color={'#838BA1'}>Offers</Text>
                    </Box>

                    <Box>
                        <Box bg={"#4d76c9"} borderRadius={"16px"} p={"10px"}>
                            <GiWallet size={"40px"} color='white' />
                        </Box>
                        <Text textAlign={'center'} color={'#838BA1'}>Wallet</Text>
                    </Box>

                </Box>

            </Box>


            <Box mt={'100px'} p={"5%"}>
                <Flex justifyContent={"space-between"}>
                    <Heading fontSize={"20px"}>Your Taste</Heading>
                    <Text>see all</Text>
                </Flex>
            </Box>

            <Box display={"flex"} gap={"10px"} overflowX={'auto'}
                overflowY={'hidden'} p={"0px 5%"}>
                {
                    arr.map((e) =>
                        <Box overflow={"hidden"} borderRadius={'16px'} minW={"180px"}>
                            <Image src='https://chakra-templates.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1515378791036-0648a3ef77b2%3Fixid%3DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%253D%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1350%26q%3D80&w=1080&q=75' />
                            <Box bg={"#f8d0d6"} p={"10px"}>
                                <Text fontWeight={'bold'} fontSize={'20px'}>Nike Baker's</Text>
                                <Text color={'#838BA1'} fontWeight={'600'}>Connaught Place, New Delhi</Text>
                            </Box>
                        </Box>)
                }

            </Box>


            <Box mt={"100px"}>
            <CSSReset />
                  <ImageSlider/>
            </Box>


            <Box p={"0% 5%"} mt={"100px"}>
                <Heading mb={"20px"}>Popular Ones</Heading>

               <Grid gap={'50px'} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)",'repeat(2,1fr)',,"repeat(3,1fr)"]} >

                {
                    product?.map((data) =>
                        <Flex gap={"20px"}>
                            
                            <Image w={"150px"} src={data.images[0].url} borderRadius={'16px'} onClick={handleClick}/>
                            <Box>
                                <Heading fontSize={"20px"} isTruncated>{data.restaurant_name}</Heading>
                                <Text color={'#838BA1'}>Cakes, Pastry, Pastas</Text>
                                <Text color={'#838BA1'}>Connaught Place, New Delhi</Text>
                                <Text display={'flex'} alignItems={'center'} gap={"4px"} color='#ff746a' ><BiSolidOffer /> 4 Offcers trending</Text>
                                <Flex justifyContent={"space-between"} mt={"5px"}>
                                    <Box>
                                        <Text display={"flex"} alignItems={'center'} fontWeight={'700'}><IoIosStar /> 4.5</Text>
                                        <Text fontSize={'14px'} color={'#838BA1'}>Popularity</Text>
                                    </Box>
                                    <Box>
                                        <Text fontWeight={'700'}>{data.currency.symbol}200</Text>
                                        <Text fontSize={'14px'} color={'#838BA1'}>Const for two</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    )

                }
             </Grid>

            </Box>


        </>
    )
}

export default Home







import { Box, Button, Container, HStack, Heading, PinInput, PinInputField, Text, useToast } from '@chakra-ui/react'
import { IoChevronBackOutline } from "react-icons/io5";
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const OtpPage = ({setTab}) => {
  const [otp, setOtp] = useState()
  const toast = useToast()
  const nav=useNavigate();
  const handlePinChange=(value)=>
  {
    setOtp(value)
  }
  const handleBack=()=>
  {
     setTab(null)
      nav('/login')
  }

  const handleResendOtp=()=>
  {
    toast({
      title: 'Otp Sended Successfully.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
 console.log(otp)

  const handleSubmit=()=>
  {
     if(otp.length!==6)
     {
      toast({
        title: 'Please Enter OTP',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
     }
     console.log(localStorage.getItem('phone'),"localstorage",otp,"otp")
    axios.post('https://staging.fastor.in/v1/pwa/user/login',{phone:localStorage.getItem('phone'),dial_code:'+91',otp:otp}).then(r=>{
      console.log(r)
        if(r.data.status=='Success')
        {   
           localStorage.setItem('userInfo',JSON.stringify(r.data.data));
           nav('/')
        }
    })

  }

  return (
    <Box w={"100%"}>
     <Box pl={"10px"}>
   
       <Button position={'relative'} top="40px" onClick={handleBack} bg={'none'} boxShadow={'xl'}> <IoChevronBackOutline size={"20px"} /> </Button>
     
     </Box>
      <Box h={'100vh'} display="flex" justifyContent="center" alignItems="center">

        <Container>
          <Heading fontSize={"26px"}>OTP Verification</Heading>

          <Text mb={"40px"} color={'#8391A1'}>Enter the verification code we just sent on your Mobile Number.</Text>

          <HStack justifyContent="center" >
            <PinInput size='lg' placeholder='' onChange={handlePinChange} >
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
         <Button onClick={handleSubmit} mt={"20px"} w={"100%"} bg='#FF6D6A' color={'white'} _hover={{ backgroundColor: '#FF6D6A' }}>Verify</Button>
         <Text textAlign={'center'} mt={"20px"} color={'#8391A1'}>Didn’t received code? <button onClick={handleResendOtp}> <span  style={{color:'blue'}}>Resend</span></button></Text>
    </Container>

    </Box >





  </Box>
  )
}

export default OtpPage
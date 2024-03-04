import { Box, Button, Container, HStack, Heading, Input, PinInput, PinInputField, Text, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OtpPage from '../Components/OtpPage';
import axios from 'axios';

function Login() {

  const [number, setNumber] = useState()
  const location=useLocation()
  const [tab, setTab] = useState(null)
  const nav=useNavigate()


  const toast = useToast()

  useEffect(()=>
  {
   const urlParams=new URLSearchParams(location.search)
   const tabFormUrl=urlParams.get('tab')
   if(tabFormUrl)
   {
    setTab(tabFormUrl)
   }
  },[location.search,location])


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number)
    if (number.length !== 10) {
      toast({
        title: 'Failed Sending OTP.',
        description: "Please enter 10 digit mobile number.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

    axios.post('https://staging.fastor.in/v1/pwa/user/register',{phone:number,dial_code:"+91"}).then((r)=>{
      console.log(r)
        if(r.data.status=='Success')
        {   
            localStorage.setItem('phone',number)
            setTab('otp')
            nav("/login?tab=otp")
        }
    })
    

 
    

  }

  return (
    <Box h={'100vh'} display="flex" justifyContent="center" alignItems="center">
      <Container  display={tab? "none":'block'} >
        <Heading fontSize={"26px"}>Enter Your Mobile Number</Heading>

        <Text mb={"40px"} color={'#8391A1'}>We will send you the 4 digit verfication code</Text>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input type='number' placeholder='Enter your mobile number' maxLength={10} minLength={10} onChange={(e) => setNumber(e.target.value)} />
          <Button type='submit' mt={"20px"} w={"100%"} bg='#FF6D6A' color={'white'} _hover={{ backgroundColor: '#FF6D6A' }}>Send Code</Button>
        
        </form>
      </Container>
      {tab && <OtpPage setTab={setTab}/>}
    </Box>
  );
}



export default Login;


import React, { useEffect, useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { Image, Input, InputRightElement, Select, Stack } from '@chakra-ui/react'
import Navbar from "../Components/Navbar"
import BGImage from "../Assests/ngo2-sectionbg2.png"
import { Box, Button, Flex, Heading, Link, Text,  InputGroup, InputLeftElement  } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa';
import DonationSkeleton from './DonationSkeleton';
import OfflineData from '../Components/SingleCard';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../Redux/Donation/action';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
const ResetPassword = () => {
  const dispatch = useDispatch();
  
  const [show, setShow] = React.useState(false);
 

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
   <Box fontFamily={"Poppins"}  color={"black"}      style={{
          backgroundImage: `url('${BGImage}')`,
          backgroundSize: "cover",
          height: "720px",
          backgroundPosition:"center",
          backgroundRepeat: "no-repeat",
        }}>
      <Navbar />
      <Box  m={"auto"} mt={"120px"} >
        <Box>
        <Text fontWeight={'500'} fontSize={["30","45"]} lineHeight={"60px"} textAlign={"center"}  fontFamily={'DM Serif Display'}>Reset Your Password</Text>
        </Box>
        <Stack direction="column" m="auto" textAlign="center" placeItems="center">
                <form >
                <InputGroup mt={10} variant="flushed" borderBottom="1px solid black" size="lg" type="text" required placeholder="UPI ID">
                    <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Password" 
              />
                    <InputRightElement width="4.5rem"  onClick={handleClick} >
                      {show ? <PiEyeBold size={20} /> : <PiEyeClosedBold size={20} />}
                    </InputRightElement>
                  </InputGroup>
                  <InputGroup mt={7} variant="flushed" borderBottom="1px solid black" size="lg" type="text" required placeholder="UPI ID">
                    <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Confirm Password" required 
                 
                />
                    <InputRightElement width="4.5rem"  onClick={handleClick}>
                      {show ? <PiEyeBold size={20} /> : <PiEyeClosedBold size={20} />}
                    </InputRightElement>
                  </InputGroup>
                  <Button
                    h="50px"
                    type="submit"
                    w={{ base: 130, md: 250 }}
                    mt={12}
                    letterSpacing="2px"
                    borderRadius="0"
                    fontWeight="300"
                    bg="#79ab2f"
                    _hover={{ bgColor: "#f7b70d" }}
                    color="white"
                    colorScheme="black"
                  >
                    SUBMIT
                  </Button>
                </form>
              </Stack>

      </Box>

     



      </Box>
    </>
  )
}

export default ResetPassword
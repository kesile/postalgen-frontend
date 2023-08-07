import { Box, HStack, Heading, Stack, Stat, StatLabel, StatNumber, StatHelpText, Progress, Flex }  from '@chakra-ui/react'
import React, { useState } from 'react'
import Inputs from './assets/inputs.jsx'
import Output from './assets/output.jsx'
import { SunIcon } from '@chakra-ui/icons'

function App() {
  const [responseData, setResponseData] = useState([]);
  const diction = [
    {
      id: 1,
      title: 'Post 1',
      name: 'Redpeak',
      content: 'Our NYC office is now part of the Sid Lee family! Our colleagues are excited to be part of this new creative collective and to deliver work that matters. Follow at @sidlee_official to keep up with their work. #BrandsThatBond',
    },
    {
      id: 2,
      title: 'Post 2',
      name: 'Redpeak',
      content: 'In partnership with the Taipei city government, #RedPeakAsia launched the identity that helped to transform the city into a testing ground for innovation. We’re happy to announce that #SmartTaipei just won the #iFDesignAward in the Brand Identity and Applications category #BrandsThatBond #DesignforGood',
    },
    {
      id: 3,
      title: 'Post 3',
      name: 'Redpeak',
      content: 'Want world peace? Talk to a woman. Korea Peace Now mobilizes women to end the Korean conflict. #internationalwomensday #peace #women #koreapeacetreatynow #design #korea',
    },
    {
      id: 4,
      title: 'Post 4',
      name: 'Redpeak',
      content: 'We’re hosting a Fast Track for #FCfestival w/ @moveon . Learn how brands can use their voice to mobilize constituents and the risks posed in speaking up #brandsthatbond',
    },
    {
      id: 5,
      title: 'Post 5',
      name: 'Redpeak',
      content: "We opened our doors with @Intel as our inaugural client and we're proud of we’ve done together to continually evolve this brand. Happy 50th Anniversary #Intel! #Intel50years #BrandsThatBond We opened our doors with @Intel as our inaugural client and we're proud of we’ve done together to continually evolve this brand. Happy 50th Anniversary #Intel! #Intel50years #BrandsThatBond We opened our doors with @Intel as our inaugural client and we're proud of we’ve done together to continually evolve this brand. Happy 50th Anniversary #Intel! #Intel50years #BrandsThatBond We opened our doors with @Intel as our inaugural client and we're proud of we’ve done together to continually evolve this brand. Happy 50th Anniversary #Intel! #Intel50years #BrandsThatBond",
    },
  ];  

  return (
    <Box>
      <Box h = "100vh" w = "100vw" bg = "brand.200" color = "brand.400" p = "2vh">
        <HStack spacing = {3} alignItems="flex-start">
          <Box bg = "brand.100" borderRadius = "15" p = "2%" h = "95vh" w = "100%">
            <Heading marginBottom = "2%">Input Your Information</Heading>
            <Inputs setResponseData={setResponseData}/>
          </Box>
          <Stack alignContent = "top" spacing={3}>
            <Output h = "70vh" data={responseData}/>
            <Box h = "26vh" borderRadius = "15" w = "60w" bg = "brand.100" p = "3vh">
              <HStack spacing={20}>
              <Box w="20vh" h="20vh" bg="brand.200" borderRadius="15" p="1%">
                <Flex h="100%" align="center" justifyContent="center">
                  <Stat textAlign="center">
                    <StatLabel>Campaign Post #</StatLabel>
                    <StatNumber>6</StatNumber>
                    <StatHelpText>Quantity of posts in the campaign.</StatHelpText>
                  </Stat>
                </Flex>
              </Box>
              <Box w="20vh" h="20vh" bg="brand.200" borderRadius="15" p="1%">
                <Flex h="100%" align="center" justifyContent="center">
                  <Stat textAlign="center">
                    <StatLabel>Response Time</StatLabel>
                    <StatNumber>10.27s</StatNumber>
                    <StatHelpText>How long between button press and machine response.</StatHelpText>
                  </Stat>
                </Flex>
              </Box>
              <Box w="20vh" h="20vh" bg="brand.200" borderRadius="15" p="1%">
                <Flex h="100%" align="center" justifyContent="center">
                  <Stat textAlign="center">
                    <StatLabel>Platform</StatLabel>
                    <StatNumber>LinkedIn</StatNumber>
                    <StatHelpText>Intended Social Media Platform.</StatHelpText>
                  </Stat>
                </Flex>
              </Box>
              <Box w="20vh" h="20vh" bg="brand.200" borderRadius="15" p="1%">
                <Flex h="100%" align="center" justifyContent="center">
                  <Stat textAlign="center">
                    <StatLabel>Avg Length</StatLabel>
                    <StatNumber>321 Char</StatNumber>
                    <StatHelpText>The mean average character count.</StatHelpText>
                  </Stat>
                </Flex>
              </Box>
              </HStack>
            </Box>
          </Stack>
          <Box h = "95vh" w = "20vw" bg = "brand.100" borderRadius = "15" p = " 2%">
            <Stack align = "center" justify = "center" spacing={20}>
              <SunIcon/> 
              <SunIcon/> 
              <SunIcon/> 
              <SunIcon/> 
              <SunIcon/> 
              <SunIcon/> 
              <SunIcon/> 
              <SunIcon/> 
            </Stack>
          </Box>
        </HStack>
      </Box>
      </Box>
  )
}

export default App

import React from 'react';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Flex, HStack } from '@chakra-ui/react';
import InstagramPostCard from './insta';
import LinkedInPostCard from './linkedIn';

const Output = ({ data }) => {
    return (
      <Box h="67vh" bgColor="brand.100" w="65vw" borderRadius="15" p="2%">
        {data.length > 0 ? (
          <Tabs variant="soft-rounded" colorScheme="whiteAlpha" color="brand.400">
            <TabList>
              {data.map((item, index) => (
                <Tab _selected={{ color: 'brand.100', bg: 'brand.400' }}>Post {index + 1}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {data.map((item, index) => (
                <TabPanel key={index}>
                  <Flex height="100%">
                    <HStack spacing={3} alignItems="flex-start">
                      <InstagramPostCard accountName={item.name} postDetails={item.content} />
                      <LinkedInPostCard accountName={item.name} postContent={item.content} />
                    </HStack>
                  </Flex>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        ) : (
          <Box>Waiting for response...</Box>
        )}
      </Box>
    );
  };
  
  export default Output;

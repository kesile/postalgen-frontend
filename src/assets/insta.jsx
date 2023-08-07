import React, { useState } from 'react';
import { Box, Flex, Avatar, Text, IconButton, Icon } from '@chakra-ui/react';
import { FaHeart, FaComment } from 'react-icons/fa';

const InstagramPostCard = ({
  accountName,
  postDetails,
}) => {
  const [likes, setLikes] = useState(123); // Set initial likes count here

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const words = postDetails.split(/\s+/);

  const renderWord = (word, index) => {
    const lowerCasedWord = word.toLowerCase();
    if (lowerCasedWord.startsWith('@')) {
      const username = lowerCasedWord.slice(1); // Remove the "@" symbol
      return (
        <span key={index}>
          <Text as="span" color="blue">
            <a href={`https://www.instagram.com/${username}`} target="_blank" rel="noopener noreferrer">
              {word}
            </a>
          </Text>{' '}
        </span>
      );
    } else if (lowerCasedWord.startsWith('#')) {
      const hashtag = lowerCasedWord.slice(1); // Remove the "#" symbol
      return (
        <span key={index}>
          <Text as="span" color="blue">
            <a href={`https://www.instagram.com/explore/tags/${hashtag}`} target="_blank" rel="noopener noreferrer">
              {word}
            </a>
          </Text>{' '}
        </span>
      );
    } else {
      return (
        <span key={index}>
          <Text as="span">
            {word}
          </Text>{' '}
        </span>
      );
    }
  };

  return (
    <Box width="400px" borderRadius="lg" overflow="hidden" boxShadow="md" bg="white">

      {/* User Info */}
      <Flex p="4" align="center">
        <Avatar size="sm" src="path/to/your/profile/image" />
        <Text ml="2" fontWeight="bold" color="#262626">
          {accountName}
        </Text>
      </Flex>

      {/* Scrollable Post Content */}
      <Box maxHeight="300px" overflowY="auto">
        <Text px="4" pb="4" color="gray.800">
          {words.map((word, index) => renderWord(word, index))}
        </Text>
      </Box>

      {/* Action Buttons */}
      <Flex px="4" justify="space-between" bg="gray.100" p="2">
        <Flex align="center">
          <IconButton 
            icon={<Icon as={FaHeart} color="red" boxSize={5} />}
            aria-label="Like"
            size="sm" 
            mr="2"
            onClick={handleLike}
          />
          <Text fontWeight="bold" fontSize="sm" color="black">
            {likes} {likes === 1 ? 'like' : 'likes'}
          </Text>
        </Flex>
        
        <IconButton
          icon={<Icon as={FaComment} color="#8e8e8e" boxSize={5} />}  
          aria-label="Comment"
          size="sm"
        />
      </Flex>
      
    </Box>
  );
};

export default InstagramPostCard;

import React, { useState } from 'react';
import { Box, Flex, Avatar, Text, IconButton, Icon } from '@chakra-ui/react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';

const LinkedInPostCard = ({ accountName, postContent }) => {
  const [likes, setLikes] = useState(123); // Set initial likes count here

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <Box width="400px" borderRadius="lg" overflow="hidden" boxShadow="md" bg="white" mb="4">
      {/* User Info */}
      <Flex p="4" align="center">
        <Avatar size="sm" src="path/to/your/profile/image" />
        <Box ml="2">
          <Text fontWeight="bold" color="#0A66C2" fontSize="sm">
            {accountName}
          </Text>
          <Text fontSize="sm" color="gray.500">
            LinkedIn Post
          </Text>
        </Box>
      </Flex>

      {/* Post Content */}
      <Box maxHeight="252px" overflowY="auto"> {/* Set the maxHeight and overflowY properties */}
        <Text px="4" pb="4" color="gray.800">
          {postContent}
        </Text>
      </Box>

      {/* Action Buttons */}
      <Flex px="4" justify="space-between" bg="#F3F2EF" p="2">
        <Flex align="center">
          <IconButton
            icon={<Icon as={FaThumbsUp} color="#0A66C2" boxSize={5} />}
            aria-label="Like"
            size="sm"
            mr="2"
            onClick={handleLike}
          />
          <Text fontWeight="bold" fontSize="sm" color="black">
            {likes} {likes === 1 ? 'Like' : 'Likes'}
          </Text>
        </Flex>

        <Flex align="center">
          <IconButton
            icon={<Icon as={FaComment} color="#8e8e8e" boxSize={5} />}
            aria-label="Comment"
            size="sm"
          />
          <Text fontWeight="bold" fontSize="sm" color="black">
            25 Comments
          </Text>
        </Flex>
      </Flex>

      {/* Comments */}
      <Box px="4" py="2" bg="#F3F2EF">
        <Text fontSize="sm" color="gray.500">
          2h ago
        </Text>
      </Box>
    </Box>
  );
};

export default LinkedInPostCard;

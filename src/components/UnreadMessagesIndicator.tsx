import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

interface UnreadMessagesIndicatorProps {}

const leftMotion = {
  init: {
    height: '8px',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    height: '45px',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const UnreadMessagesIndicator: React.FC<UnreadMessagesIndicatorProps> = () => {
  return (
    <Box
      position="absolute"
      left="0"
      top="42%"
      w="8px"
      h="8px"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Box
        pos="absolute"
        display="block"
        w="8px"
        h="45px"
        borderRadius="0 4px 4px 0"
        ml="-4px"
        bg="white"
        as={motion.div}
        variants={leftMotion}
      ></Box>
    </Box>
  );
};

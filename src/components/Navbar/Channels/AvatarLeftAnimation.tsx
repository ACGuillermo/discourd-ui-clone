import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const leftMotion = {
  init: {
    height: '8px',
    opacity: 0,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    opacity: 1,
    height: '30px',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
  selected: {
    opacity: 1,
    height: '45px',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const AvatarLeftAnimation: React.FC = () => {
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
        h="8px"
        borderRadius="0 4px 4px 0"
        ml="-4px"
        bg="white"
        as={motion.div}
        variants={leftMotion}
      ></Box>
    </Box>
  );
};

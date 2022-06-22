import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { leftMotion, leftMotionHiddenStart } from '../NavbarAnimations';

interface AvatarLeftAnimationProps {
  hidden?: boolean;
}

export const AvatarLeftAnimation: React.FC<AvatarLeftAnimationProps> = ({ hidden = true }) => {
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
        variants={hidden ? leftMotionHiddenStart : leftMotion}
      ></Box>
    </Box>
  );
};

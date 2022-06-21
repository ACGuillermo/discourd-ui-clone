import { Avatar, AvatarBadge, Box, Center, Tooltip, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { channel } from '../types';
import { NavbarChannels } from './NavbarChannels';
import { UnreadMessagesIndicator } from './UnreadMessagesIndicator';

interface LateralNavbarProps {
  channels: channel[];
}

export const LateralNavbar: React.FC<LateralNavbarProps> = ({ channels }) => {
  const [selectedChannel, setSelectedChannel] = useState<number | undefined>();

  const selectChannel = (channelId: number) => {
    setSelectedChannel(channelId);
  };

  return (
    <VStack paddingTop={4} spacing="4">
      {channels.map((channel, i) => {
        return (
          <Box
            key={i}
            position="relative"
            display="flex"
            w="72px"
            justifyContent="center"
            as={motion.div}
            whileHover="hover"
            initial="init"
            animate={selectedChannel === channel.id ? 'hover' : 'init'}
            onClick={() => selectChannel(channel.id)}
          >
            {channel.unreadMessages && (
              <>
                <UnreadMessagesIndicator />
              </>
            )}
            {channel.id === selectedChannel && (
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
                ></Box>
              </Box>
            )}
            <NavbarChannels channel={channel} />
          </Box>
        );
      })}
    </VStack>
  );
};

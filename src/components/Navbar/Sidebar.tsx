import { Avatar, AvatarBadge, Box, Center, Tooltip, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { channel } from '../../types';
import { ChannelAvatar } from './Channels/ChannelAvatar';
import { AvatarLeftAnimation } from './Channels/AvatarLeftAnimation';
import { AvatarUnreadMessages } from './Channels/AvatarUnreadMessages';

interface SidebarProps {
  channels: channel[];
}

export const Sidebar: React.FC<SidebarProps> = ({ channels }) => {
  const [selectedChannel, setSelectedChannel] = useState<number | undefined>();
  const [hoveredChannel, setHoveredChannel] = useState<number | undefined>();

  const setAnimation = (
    channelId: number,
    selectedChannel: number | undefined,
    hoveredChannel: number | undefined
  ) => {
    let a: string;
    if (!selectedChannel || !hoveredChannel) a = 'init';
    if (channelId === selectedChannel) a = 'selected';
    else if (channelId === hoveredChannel) a = 'hover';
    else a = 'init';
    console.log(a);
    return a;
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
            initial="init"
            animate={setAnimation(channel.id, selectedChannel, hoveredChannel)}
            onClick={() => setSelectedChannel(channel.id)}
            onHoverStart={() => setHoveredChannel(channel.id)}
            onHoverEnd={() => setHoveredChannel(undefined)}
          >
            {channel.unreadMessages && <AvatarUnreadMessages />}
            <AvatarLeftAnimation />
            <ChannelAvatar channel={channel} />
          </Box>
        );
      })}
    </VStack>
  );
};

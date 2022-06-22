import { Avatar, Box, Circle, Tooltip, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { channel } from '../../types';
import { ChannelAvatar } from './Channels/ChannelAvatar';
import { AvatarLeftAnimation } from './Channels/AvatarLeftAnimation';
import { AddIcon } from '@chakra-ui/icons';
import {
  addChannelCircleAnimation,
  addChannelPlusAnimation,
  avatarMotion,
} from './NavbarAnimations';

interface SidebarProps {
  channels: channel[];
}

export const Sidebar: React.FC<SidebarProps> = ({ channels }) => {
  const [selectedChannel, setSelectedChannel] = useState<number>(0);
  const [hoveredChannel, setHoveredChannel] = useState<number | undefined>();

  const setAnimation = (
    channelId: number,
    selectedChannel: number,
    hoveredChannel: number | undefined
  ) => {
    let animation: string;
    if (!selectedChannel || !hoveredChannel) animation = 'init';
    if (channelId === selectedChannel) animation = 'selected';
    else if (channelId === hoveredChannel) animation = 'hover';
    else animation = 'init';
    return animation;
  };

  return (
    <VStack paddingTop={4} spacing="4">
      <Box
        position="relative"
        display="flex"
        w="72px"
        justifyContent="center"
        as={motion.div}
        initial="init"
        animate={setAnimation(0, selectedChannel, hoveredChannel)}
        onClick={() => setSelectedChannel(0)}
        onHoverStart={() => setHoveredChannel(0)}
        onHoverEnd={() => setHoveredChannel(undefined)}
      >
        <AvatarLeftAnimation hidden={true} />
        <Tooltip label={'Home'} placement="right">
          <Avatar borderRadius="30px" as={motion.div} variants={avatarMotion}></Avatar>
        </Tooltip>
      </Box>

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
            {channel.unreadMessages && <AvatarLeftAnimation hidden={false} />}
            <AvatarLeftAnimation />
            <ChannelAvatar channel={channel} />
          </Box>
        );
      })}
      <Tooltip label={'Add a server'} placement="right">
        <Circle
          size="48px"
          as={motion.div}
          initial="init"
          whileHover="hover"
          variants={addChannelCircleAnimation}
          animate="init"
        >
          <motion.div variants={addChannelPlusAnimation}>
            <AddIcon w="18px" h="18px" />
          </motion.div>
        </Circle>
      </Tooltip>
    </VStack>
  );
};

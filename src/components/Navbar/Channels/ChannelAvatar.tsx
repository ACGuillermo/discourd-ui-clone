import { Tooltip, Avatar, AvatarBadge, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { channel } from '../../../types';
import { avatarMotion } from '../NavbarAnimations';

interface ChannelAvatarProps {
  channel: channel;
}

const drawNotifications = (notifications: number) => {
  if (notifications > 0) {
    return (
      <AvatarBadge boxSize="1.4em" bg="red.600" color="white" fontSize="14px">
        <Center h="100%" w="100%">
          {notifications}
        </Center>
      </AvatarBadge>
    );
  }
};

export const ChannelAvatar: React.FC<ChannelAvatarProps> = ({ channel }) => {
  return (
    <Tooltip label={channel.name} placement="right">
      <Avatar borderRadius="30px" name={channel.name} as={motion.div} variants={avatarMotion}>
        {drawNotifications(channel.notifications)}
      </Avatar>
    </Tooltip>
  );
};

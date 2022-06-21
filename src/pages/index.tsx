import { Box, Flex } from '@chakra-ui/react';
import { LateralNavbar } from '../components/LateralNavbar';

const channels = [
  { name: 'test1', unreadMessages: false, notifications: 0, id: 0 },
  { name: 'hello2', unreadMessages: true, notifications: 2, id: 1 },
  { name: 'Bye3', unreadMessages: false, notifications: 99, id: 2 },
];

const Index = () => {
  return (
    <Flex>
      <Box bg="gray.900" h="100vh" minW="72px" w="72px">
        <LateralNavbar channels={channels} />
      </Box>
      <Box bg="gray.700" h="100vh" minW="240px" w="240px"></Box>
      <Box bg="gray.600" h="100vh" w="100%"></Box>
    </Flex>
  );
};

export default Index;

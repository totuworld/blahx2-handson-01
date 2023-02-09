import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ServiceLayout } from '@/components/service_layout';

const userInfo = {
  uid: 'test',
  email: 'totuworld@gmail.com',
  displayName: 'yochang',
  photoURL: 'https://lh3.googleusercontent.com/a/AEdFTp5Gg-TfpUl3nzGHDKqf9m1UaRiJJGoc4eGrHGQV4A=s96-c',
};

const UserHomePage: NextPage = function () {
  return (
    <ServiceLayout title="user home" maxH="100vh" backgroundColor="gray.50">
      <Box maxW="md" mx="auto" pt="6">
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb="2" bg="white">
          <Flex p="6">
            <Avatar size="lg" src={userInfo.photoURL} mr="2" />
            <Flex direction="column" justify="center">
              <Text fontSize="md">{userInfo.displayName}</Text>
              <Text fontSize="xs">{userInfo.email}</Text>
            </Flex>
          </Flex>
        </Box>
        test 123
      </Box>
    </ServiceLayout>
  );
};

export default UserHomePage;

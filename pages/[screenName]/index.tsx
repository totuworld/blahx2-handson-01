import { Avatar, Box, Button, Flex, Text, Textarea } from '@chakra-ui/react';
import { NextPage } from 'next';
import ResizeTextArea from 'react-textarea-autosize';
import { useState } from 'react';
import { ServiceLayout } from '@/components/service_layout';

const userInfo = {
  uid: 'test',
  email: 'totuworld@gmail.com',
  displayName: 'yochang',
  photoURL: 'https://lh3.googleusercontent.com/a/AEdFTp5Gg-TfpUl3nzGHDKqf9m1UaRiJJGoc4eGrHGQV4A=s96-c',
};

const UserHomePage: NextPage = function () {
  const [message, setMessage] = useState('');
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
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb="2" bg="white">
          <Flex align="center" p="2">
            <Avatar size="xs" src="/user.png" mr="2" />
            <Textarea
              bg="gray.100"
              border="none"
              placeholder="무엇이 궁금한가요?"
              resize="none"
              minH="unset"
              overflow="hidden"
              fontSize="xs"
              maxRows={7}
              as={ResizeTextArea}
              value={message}
              onChange={(e) => {
                if (e.currentTarget.value) {
                  const lineCount = e.currentTarget.value.match(/[^\n]*\n[^\n]*/gi)?.length ?? 0;
                  if (lineCount > 7) {
                    return;
                  }
                }
                setMessage(e.currentTarget.value);
              }}
            />
            <Button
              disabled={message.length === 0}
              bgColor="#FFB86C"
              color="white"
              colorScheme="yellow"
              variant="solid"
              size="sm"
            >
              등록
            </Button>
          </Flex>
        </Box>
      </Box>
    </ServiceLayout>
  );
};

export default UserHomePage;

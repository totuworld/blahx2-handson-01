import { Box, Button } from '@chakra-ui/react';

export const GoogleLoginButton = function () {
  return (
    <Box>
      <Button
        width="full"
        size="lg"
        maxW="md"
        borderRadius="full"
        bgColor="#4285f4"
        color="white"
        colorScheme="blue"
        leftIcon={<img src="/google.svg" alt="google logo" style={{ backgroundColor: 'white', padding: '8px' }} />}
      >
        Google 계정으로 시작하기
      </Button>
    </Box>
  );
};

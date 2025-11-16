import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Box as="header" bg="black" py={4} px={8} boxShadow="md">
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="lg" color="purple.300">
          Intelligent Surveillance Platform
        </Heading>
        {isAuthenticated && (
          <Button onClick={logout} colorScheme="purple" variant="outline">
            Logout
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default Header;

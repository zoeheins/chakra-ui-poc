import React from 'react';
import { Box, Button, Center, SimpleGrid } from '@chakra-ui/react';

function Buttons() {
  return (
    <Center>
      <SimpleGrid
        bg="white"
        columns={2}
        margin={10}
        padding={10}
        spacingX={10}
        spacingY={5}
        >
        <Box>Error variant Button</Box>
        <Box>
          <Button variant='error'>Failure</Button>
        </Box>
        <Box>Large button with customized color</Box>
        <Box>
          <Button size='lg'>Large button</Button>
        </Box>
        <Box>New "xl" size button</Box>
        <Box>
          <Button size='xl'>Extra large button</Button>
        </Box>
      </SimpleGrid>
    </Center>
  );
}

export default Buttons;

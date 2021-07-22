import React from 'react';
import {
  UnorderedList,
  ListItem,
  Box,
  Button,
  Center,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';

function Buttons() {
  return (
    <>
      <Flex flexDirection='column' alignItems='center'>
        Accessibility:
        <UnorderedList>
          <ListItem>Button has role of button</ListItem>
          <ListItem>
            When Button has focus, Space or Enter activates it.
          </ListItem>
        </UnorderedList>
        <SimpleGrid
          bg='white'
          columns={2}
          margin={10}
          padding={10}
          spacingX={10}
          spacingY={5}>
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
      </Flex>
    </>
  );
}

export default Buttons;

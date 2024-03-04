import React from 'react'
import Posts from './components/Posts'
import Navbar from './components/Navbar'
import { Flex } from '@chakra-ui/react'
function App() {
  return (
    <div>
      <Navbar/>
      <Flex flexDirection="column" gap="4" justifyContent="center" margin="auto">
        <Posts/>
      </Flex>
    </div>
  )
}

export default App
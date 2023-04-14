import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Articles from './components/Articles'
import Footer from './components/Footer'

import ThemeContainer from './components/ThemeContainer'
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <ThemeContainer>
      <Flex direction="column" >
        <Nav />
        <Hero />
        <Features />
        <Articles />
        <Footer />
      </Flex>
    </ThemeContainer>
  );
}

export default App;

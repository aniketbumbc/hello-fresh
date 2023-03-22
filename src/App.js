import React from 'react';
import Recipes from './pages/Recipes';
import ThemeProvider from './components/ThemeProvider';
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';

const App = () => (
  <ThemeProvider>
    <Header />
    <Body>
      <Recipes />
    </Body>
    <Footer />
  </ThemeProvider>
);

export default App;

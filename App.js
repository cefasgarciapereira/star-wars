import React from 'react';
import Routes from './src/routes/index';
import { NavigationContainer } from '@react-navigation/native';
import {SwapiProvider} from './src/contexts/swapi';

export default function App() {
  
  return (
    <NavigationContainer>
      <SwapiProvider>
        <Routes/>
      </SwapiProvider>
    </NavigationContainer>

  );
}



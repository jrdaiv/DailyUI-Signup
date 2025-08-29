import SignupScreen from 'screens/SignupScreen';
import './global.css';
import React from 'react';
import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <>
    <ImageBackground className='flex-1 justify-center ' source={require('./assets/astro in space in 4k wall.png') }>
      <SignupScreen />
    </ImageBackground>
    </>
  );
}

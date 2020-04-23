import React from 'react';
import { SafeAreaView, Button, Animated } from 'react-native';

import Header from '../components/Header';

import { styles } from '../styles/Home.styled';

const Home = () => {
  // create variable with animated value and set it to 0
  const opacityValue = new Animated.Value(0);

  // Change animated value to 1 in 1.5 seconds
  const showText = () => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  // Change animated value to 0 in 1.5 seconds
  const hideText = () => {
    Animated.timing(opacityValue, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Home Page' />
      <Animated.Text style={[ styles.text, { opacity: opacityValue } ]}>
        This is the Home Page
      </Animated.Text>

      <Button title='Fade in' onPress={showText} />
      <Button title='Fade out' onPress={hideText} />
    </SafeAreaView>
  );
};

export default Home;

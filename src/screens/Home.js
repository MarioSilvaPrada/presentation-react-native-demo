import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { styles } from '../styles/Home.styled';

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>This is the Home Page</Text>
  </SafeAreaView>
);

export default Home;

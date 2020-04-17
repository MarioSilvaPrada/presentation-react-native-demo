import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { styles } from '../styles/Profile.styled';

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>This is the Profile Page</Text>
  </SafeAreaView>
);

export default Home;

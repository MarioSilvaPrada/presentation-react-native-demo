import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import Header from '../components/Header';

import { styles } from '../styles/Home.styled';

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Header title="Home Page" />
    <Text style={styles.text}>This is the Home Page</Text>
  </SafeAreaView>
);

export default Home;

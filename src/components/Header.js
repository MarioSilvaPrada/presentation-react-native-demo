import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { styles } from '../styles/components/Header.styled';

const Header = ({title}) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </SafeAreaView>
);

export default Header;

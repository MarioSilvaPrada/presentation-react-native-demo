import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/components/Header.styled';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

export default Header;

import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { styles } from '../styles/Settings.styled';


const Settings = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Settings Page</Text>
  </SafeAreaView>
);

export default Settings;
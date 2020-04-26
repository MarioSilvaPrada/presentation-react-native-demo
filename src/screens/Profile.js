import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';

import { styles } from '../styles/Profile.styled';

// props navigation is passed (from AppNavigator.js) so we can navigate to Settings page
const Profile = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>This is the Profile Page</Text>
    <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Settings')}>
      <Text>Go to Settings page</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default Profile;

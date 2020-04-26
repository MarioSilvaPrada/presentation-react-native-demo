import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

import { styles } from '../styles/Profile.styled';

// props navigation is passed (from AppNavigator.js) so we can navigate to Settings page
const Profile = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>This is the Profile Page</Text>
    <Button 
      title='Go to Settings Page'
      color='orangered' 
      onPress={() => navigation.navigate('Settings')} 
    />
  </SafeAreaView>
);

export default Profile;

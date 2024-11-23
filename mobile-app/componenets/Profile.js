import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/auth';

const Profile = ({ navigation }) => {
const userData = useSelector((state)=>state.auth.me);
const dispatch = useDispatch();
  if (!userData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Name: {userData.name}</Text>
      <Text>Email: {userData.email}</Text>
      {/* Add more user data fields as needed */}
      <Button title="logout" onPress={()=>dispatch(logout())}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Profile;
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Maps from './Maps';

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text>Notificationshh</Text>
      <Maps />

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
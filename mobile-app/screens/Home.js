import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from 'react-redux';
import { logout } from "../store/auth";
import Onboarding from "../componenets/Onboarding";
import Menu from "../componenets/Menu";

export default function Home({ navigation }) {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.container}>

      <Button title="logout" onPress={()=>dispatch(logout())}/>
      <Menu/>
      <Button title="Go to details" onPress={()=>navigation.navigate('details')}/>
   
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({});

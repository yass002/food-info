import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { login } from "../store/auth";
const logo = require("../assets/logo.png");
const facebook = require("../assets/facebook.png");
const instagram = require("../assets/instagram.png");
const youtube = require("../assets/youtube.png");

export default function Login({ navigation }) {
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="EMAIL OR USERNAME"
            value={email}
            onChangeText={setEmail}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.rememberView}>
          <View style={styles.switch}>
            <Switch
              value={click}
              onValueChange={setClick}
              trackColor={{ true: "green", false: "gray" }}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          <View>
            <Pressable onPress={() => Alert.alert("Forget Password!")}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonView}>
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
          <Text style={styles.optionsText}>OR LOGIN WITH</Text>
        </View>

        <View style={styles.mediaIcons}>
          <Image source={facebook} style={styles.icons} />
          <Image source={youtube} style={styles.icons} />
          <Image source={instagram} style={styles.icons} />
        </View>

        <TouchableOpacity
          style={{ flexDirection: "row", gap: 5 }}
          onPress={() => navigation.navigate("sign-up")}
        >
          <Text style={styles.footerText}>Don't Have Account?</Text>
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
  },
  image: {
    height: 160,
    width: 170,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "#F4338F",
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#F4338F",
    borderWidth: 1,
    borderRadius: 7,
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 13,
  },
  forgetText: {
    fontSize: 11,
    color: "#F4338F",
  },
  button: {
    backgroundColor: "#F4338F",
    height: 45,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6,
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23,
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: "center",
    color: "gray",
  },
  signup: {
    color: "#F4338F",
    fontSize: 13,
  },
});

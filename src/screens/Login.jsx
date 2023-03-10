import { useState } from "react";
import { supabase } from "../config/supabaseConfig";
import React from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
    setEmail("");
    setPassword("");
  }

  return (
    <View style={styles.content}>
      <View style={styles.card}>
        <Text style={styles.headline}>Tip Out</Text>
        <Text style={styles.textLeft}>Sign in to your account</Text>
        <View style={styles.container}>
          <TouchableOpacity style={styles.solidButton} underlayColor="#fff">
            <Text style={styles.text}>Connect with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.borderButton} underlayColor="#fff">
            <Text style={styles.text}>Connect with Apple</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.line}>
          <Text style={styles.or}>or</Text>
        </Text>
        <View style={styles.container}>
          <Text style={styles.textLeft}>Email</Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={styles.item}
            placeholder="you@example.com"
            placeholderTextColor="#484848"
            keyboardType="email-address"
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text}>Password</Text>
            <Text style={styles.textDark}>Forgot Password?</Text>
          </View>
          <TextInput
            label="Password"
            value={password}
            onChangeText={(pw) => setPassword(pw)}
            style={styles.item}
            secureTextEntry={true}
            placeholder="password"
            placeholderTextColor="#484848"
            keyboardType="default"
          />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          underlayColor="#fff"
          disabled={loading}
          onPress={() => signInWithEmail()}
        >
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.forgotPassword}>
          <Text style={styles.textDark}>
            Don't have an account?
            <Text
              style={styles.text}
              onPress={() => navigation.navigate("SignUp")}
            >
              {" "}
              Sign Up Now
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: "stretch",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1C1C1C",
  },
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    margin: 40,
  },
  text: {
    color: "#EDEDED",
    textAlign: "center",
  },
  textLeft: {
    color: "#EDEDED",
  },
  textDark: {
    color: "#707070",
  },
  headline: {
    fontSize: 80,
    color: "#EDEDED",
  },
  line: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    margin: 10,
  },
  or: {
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  item: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#222222",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3c3c3c",
    color: "white",
  },
  submitButton: {
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#2b825b",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#2E2E2E",
    fontSize: 16,
  },
  borderButton: {
    marginTop: 10,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3c3c3c",
  },
  solidButton: {
    marginTop: 10,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#2E2E2E",
    borderRadius: 5,
    borderWidth: 1,
  },
  forgotPassword: {
    margin: 38,
  },
});

export default Login;

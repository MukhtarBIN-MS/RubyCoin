import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [inviteCode, setInviteCode] = useState("");

  const handleSubmit = () => {
    // Handle submission logic here
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/ruby.png")} style={styles.logo} />
      <Text style={styles.title}>
        Enter your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.title}>
      Invite code:
    </Text>
      <TextInput
        style={styles.input}
        placeholder="Invite code"
        value={inviteCode}
        onChangeText={setInviteCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    alignItems:'center',
    justifyContent:'center',
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    textAlign:'left',
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#E0115F",
    borderRadius: 5,
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

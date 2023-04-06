import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

const copyToClipboard = async (text) => {
  await Clipboard.setStringAsync(text);
  alert("Copied");
};

const chars = "0123456789abcdef";
let address = "0x";
for (let i = 0; i < 40; i++) {
  const randomIndex = Math.floor(Math.random() * chars.length);
  address += chars[randomIndex];
}

const randomNum = Math.floor(Math.random() * 900000) + 100000;

const invite_code = "RUBY" + randomNum;

const Profile = ({ name, walletBalance, inviteCode }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../assets/ruby.png")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{name}</Text>
          <View style={styles.walletInfo}>
            <Text style={styles.walletLabel}>Wallet Balance:</Text>
              <Text style={styles.walletValue}>{walletBalance}</Text>
          </View>
          <View style={styles.inviteInfo}>
            <Text style={styles.inviteLabel}>Invite Code:</Text>
            <Text style={styles.inviteValue}>{invite_code}</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            flex: 1,
            flexDirection: "row",
            margin: 5,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Ionicons name="arrow-up-outline" size={24} color="white" />
          <Text style={{ color: "white", textAlign: "center" }}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            flex: 1,
            flexDirection: "row",
            margin: 5,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Ionicons name="arrow-down-outline" size={24} color="white" />
          <Text style={{ color: "white", textAlign: "center" }}>Withdraw</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <View style={styles.column}>
          <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>myl772ng@gmail.com</Text>
        </View>
          <View style={styles.row}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.label}>Wallet Address:</Text>
          <TouchableOpacity onPress={() => copyToClipboard(address)}>
          <Ionicons name="copy-outline" size={24} color="black" />
          </TouchableOpacity>
          </View>
            <Text style={styles.value}>{address}</Text> 
          </View>
          <View style={styles.row}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.label}>Invite Code:</Text>
          <TouchableOpacity onPress={() => copyToClipboard(invite_code)}>
          <Ionicons name="copy-outline" size={24} color="black" />
          </TouchableOpacity>
          </View>
            <Text style={styles.value}>{invite_code}</Text> 
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    marginRight: 20,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  walletInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  walletLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  walletValue: {
    fontSize: 16,
  },
  inviteInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  inviteLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  inviteValue: {
    fontSize: 16,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  activity: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  container2: {
    marginTop: 30,
    flex: 1,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  row: {
    flexDirection: "column",
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 10,
    minWidth: 100,
  },
  value: {
    fontSize: 15,
    marginTop: 10,
  },
});

export default Profile;

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SideMenu({ toggleMenu , navigation }) {
  let inviteCode = '445GCDJJ2';
  return (
    <SafeAreaView style={styles.sideMenu}>
      <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
        <Ionicons name="close-outline" size={32} color="#fff" />
      </TouchableOpacity>
      <View style={styles.profileSection}>
        <Image
          source={require("../assets/ruby.png")}
          style={styles.profileIcon}
        />
        <View>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.inviteCode}>Invite Code: {inviteCode}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Refferal Program')}  style={styles.menuItem}>
        <Ionicons name="people-outline" size={24} color="#fff" />
        <Text style={styles.menuText}>Referral Program</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('leaderboard')}  style={styles.menuItem}>
        <Ionicons name="trophy-outline" size={24} color="#fff" />
        <Text style={styles.menuText}>Leaderboard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('My Wallet')} style={styles.menuItem}>
        <Ionicons name="person-outline" size={24} color="#fff" />
        <Text style={styles.menuText}>My Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('White Paper')} style={styles.menuItem}>
      <Ionicons name="md-document" size={24} color="#fff" />
      <Text style={styles.menuText}>White Paper</Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="md-person" size={24} color="#fff" />
        <Text style={styles.menuText}>KYC</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
      <Ionicons name="settings-outline" size={24} color="#fff" />
      <Text style={styles.menuText}>Settings</Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem2}>
        <Ionicons name="log-out-outline" size={24} color="#fff" />
        <Text style={styles.menuText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2c3e50",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuButton: {
    marginRight: 10,
  },
  rubyBalance: {
    flexDirection: "row",
    alignItems: "center",
  },
  rubyIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 5,
  },
  balanceLabel: {
    fontSize: 16,
    color: "#fff",
  },
  notificationsButton: {
    marginLeft: 10,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  globeIcon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  miningText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
  },
  miningButton: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: "#fff",
    elevation: 5,
  },
  activeButton: {
    backgroundColor: "#27ae60",
  },
  miningIcon: {
    width: 50,
    height: 50,
  },
  sideMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "70%",
    backgroundColor: "#2c3e50",
    padding: 20,
    paddingTop: 50,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 10,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  profileIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  inviteCode: {
    fontSize: 16,
    color: "#fff",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  menuItem2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 270,
  },
  menuText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
  },
});

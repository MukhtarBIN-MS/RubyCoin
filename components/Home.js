import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SideMenu from "./SideMenu";
import PumpingHeartText from "./Pump";
import RubyCoinView from "./Info";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  const [rubyCount, setRubyCount] = useState(0);
  const [miningActive, setMiningActive] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  let currentTime;

  useEffect(() => {
    let intervalId = null;
    let startTime = new Date().getTime();

    if (miningActive) {
      intervalId = setInterval(() => {
        currentTime = new Date().getTime();
        let elapsedTime = (currentTime - startTime) / 1000; // in seconds
        if (elapsedTime >= 24 * 60 * 60) {
          setMiningActive(false);
          clearInterval(intervalId);
        } else {
          setRubyCount((prevCount) => Number((prevCount + 0.0001).toFixed(4)));
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [miningActive]);

  const startMining = () => {
    setMiningActive(true);
  };

  const stopMining = () => {
    alert(`Actively Mining`);
    setRubyCount(rubyCount);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Ionicons name="menu-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.rubyBalance}>
          <Image
            source={require("../assets/ruby.png")}
            style={styles.rubyIcon}
          />
          {miningActive ? (
            <PumpingHeartText text={rubyCount} style={styles.balanceText} />
          ) : (
            <Text style={styles.balanceText}>{rubyCount}</Text>
          )}
          <Text style={styles.balanceLabel}>RUBY</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Notifications")}
          style={styles.notificationsButton}
        >
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Main content */}

      <View style={styles.content}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Image
              source={require("../assets/ruby.png")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View style={{ alignItems:'flex-end', justifyContent:'flex-end'}}>
            <TouchableOpacity
              style={[styles.miningButton, miningActive && styles.activeButton]}
              onPress={miningActive ? stopMining : startMining}
            >
              <Image
                source={require("../assets/ruby.png")}
                style={styles.miningIcon}
              />
            </TouchableOpacity>
            <Text style={styles.miningText}>
              {miningActive ? "MINING RUBY..." : "START MINING"}
            </Text>
          </View>
        </View>
      </View>
      <RubyCoinView navigation={navigation} />

      {/* Side menu */}
      {menuVisible && (
        <SideMenu toggleMenu={toggleMenu} navigation={navigation} />
      )}
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
    alignItems: "flex-end",
    justifyContent: "flex-end",
    margin: 10,
  },
  globeIcon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  miningText: {
    marginTop: 10,
    fontSize: 14,
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
    top: 10,
    right: 10,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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
    marginBottom: 10,
  },
  menuText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
  },
});

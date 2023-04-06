import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ReferralProgram = ({ referralCode, }) => {
const referredUsers = [];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Referral Program</Text>
      <Text style={styles.subtitle}>Share your referral code with others and earn rewards!</Text>
      
      <View style={styles.referralCodeContainer}>
        <Text style={styles.referralCodeTitle}>Your Referral Code:</Text>
        <TouchableOpacity onPress={() => Clipboard.setString(referralCode)}>
          <View style={styles.referralCodeWrapper}>
            <Text style={styles.referralCodeText}>{referralCode}</Text>
            <Image source={require('../assets/ruby.png')} style={styles.copyIcon} />
          </View>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.rewardText}>You will earn 2 Rubies for each new user that signs up with your referral code. The new user will also receive 1 Ruby as a reward.</Text>
      
      <View style={styles.referredUsersContainer}>
        <Text style={styles.referredUsersTitle}>Referred Users:</Text>
        {referredUsers.length > 0 ? (
          referredUsers.map((user, index) => (
            <View key={index} style={styles.referredUserWrapper}>
              <Image source={require('../assets/ruby.png')} style={styles.rubyIcon} />
              <Text style={styles.referredUserName}>{user.name}</Text>
              <Text style={styles.referredUserReward}>{user.reward} Rubies</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noReferredUsersText}>You haven't referred any users yet.</Text>
        )}
      </View>
    </View>
  );
};

export default ReferralProgram;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  referralCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  referralCodeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  referralCodeWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  referralCodeText: {
    fontSize: 16,
    color: "#333",
    marginRight: 5,
  },
  copyIcon: {
    width: 20,
    height: 20,
  },
  rewardText: {
    fontSize: 16,
    marginBottom: 20,
  },
  referredUsersContainer: {
    marginBottom: 20,
  },
  referredUsersTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  referredUserWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  rubyIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  referredUserName: {
    fontSize: 16,
    marginRight: 10,
 
  }
});
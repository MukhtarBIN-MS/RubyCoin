import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RubyCoinView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to RubyCoin!</Text>
      <Text style={styles.description}>Ruby coin is a decentralized cryptocurrency built on top of the Ethereum blockchain. It uses a Proof-of-Stake consensus mechanism to enable secure and fast transactions. Our white paper provides detailed information on the Ruby coin, its features, and its migration from the testnet to the mainnet..</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('White Paper')} style={styles.button}>
          <Text style={styles.buttonText}>White Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('My Wallet')} style={styles.button}>
          <Text style={styles.buttonText}>My Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor:'#E0115F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RubyCoinView;

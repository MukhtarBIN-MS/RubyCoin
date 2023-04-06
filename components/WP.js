import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

export default function WhitePaperPage() {
    return (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Introduction</Text>
          <Text style={styles.paragraph}>Ruby coin is a decentralized cryptocurrency built on top of the Ethereum blockchain. It uses a Proof-of-Stake consensus mechanism to enable secure and fast transactions. This white paper provides detailed information on the Ruby coin, its features, and its migration from the testnet to the mainnet.</Text>
    
          <Text style={styles.title}>Features of Ruby Coin</Text>
          <Text style={styles.paragraph}>Fast and Secure Transactions: Ruby coin uses the Ethereum blockchain to ensure that transactions are processed quickly and securely.</Text>
          <Text style={styles.paragraph}>Proof-of-Stake Consensus Mechanism: Ruby coin uses a PoS consensus mechanism that eliminates the need for miners to validate transactions. This ensures that transactions are processed quickly and securely.</Text>
          <Text style={styles.paragraph}>Low Transaction Fees: The transaction fees on the Ruby coin network are significantly lower than those on traditional payment systems.</Text>
          <Text style={styles.paragraph}>Decentralized Governance: Ruby coin is governed by its community of users, who have a say in the decision-making process.</Text>
    
          <Text style={styles.title}>Testnet and Mainnet Migration</Text>
          <Text style={styles.paragraph}>The Ruby coin will initially be launched on the Ethereum testnet to allow for testing and development. The testnet launch will take place on May 1, 2023, and will run for a period of three months.</Text>
          <Text style={styles.paragraph}>After successful testing, Ruby coin will be migrated from the testnet to the mainnet. The mainnet launch will take place on August 1, 2023.</Text>
          <Text style={styles.paragraph}>During the migration process, users will be required to swap their testnet coins for mainnet coins. The swap ratio will be 1:1, meaning that users will receive one mainnet coin for each testnet coin they swap.</Text>
          <Text style={styles.paragraph}>The migration process will be communicated to users through the official Ruby coin channels, including the website, social media, and email.</Text>
    
          <Text style={styles.title}>Conclusion</Text>
          <Text style={styles.paragraph_end}>Ruby coin is a decentralized cryptocurrency that provides fast, secure, and low-cost transactions. With the upcoming launch on the Ethereum testnet, we look forward to working with our community to create a valuable ecosystem for the Ruby coin. Thank you for your interest in our project.</Text>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        marginBottom:10,
        backgroundColor:'#fff'
      },
      title: {
        fontWeight: 'bold',
        fontSize: 24,
        color:'#E0115F',
        marginBottom: 5,
      },
      paragraph: {
        fontSize: 16,
        marginBottom: 20,
      },
      paragraph_end: {
        fontSize: 16,
        marginBottom: 50,
      },
    });
    

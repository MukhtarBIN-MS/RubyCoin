import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Leaderboard = () => {
  const users = [
    { name: 'Alice', rubies: 1000 },
    { name: 'Bob', rubies: 850 },
    { name: 'Charlie', rubies: 500 },
    { name: 'Dave', rubies: 300 },
    { name: 'Eve', rubies: 100 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Leaderboard</Text>
      </View>
      <View style={styles.list}>
        {users.map((user, index) => (
          <View style={styles.listItem} key={index}>
            <Text style={styles.listItemText}>{user.name}</Text>
            <View style={styles.rubiesContainer}>
              <Image
                source={require('../assets/ruby.png')}
                style={styles.rubyIcon}
              />
              <Text style={styles.rubiesText}>{user.rubies}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
  },
  list: {
    flex: 1,
    padding: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  listItemText: {
    fontSize: 16,
  },
  rubiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rubyIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  rubiesText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Leaderboard;

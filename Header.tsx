import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Expo Ts APP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 5,
    paddingVertical: 20,
    backgroundColor: 'cyan',
    textAlign: 'center',
    width: '100%',
  },
});

export default Header;

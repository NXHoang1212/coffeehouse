import {CircleFade} from 'react-native-animated-spinkit';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const ActivityIndicator = () => {
  return (
    <View style={styles.container}>
      <CircleFade size={30} color="#000" />
    </View>
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

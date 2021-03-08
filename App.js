import * as React from 'react';

// MODULE
import { View, StyleSheet } from 'react-native';

// COMPONENT
import Header from './components/Header/index'
import Body from './components/Body/index'

function App () {
  return (
    <View style={styles.container}>
      <Header/>
      <Body/>
    </View>
  );
}

// STYLING
const styles = StyleSheet.create({
  container: {
    alignItems : "center",
  },
})

export default App;
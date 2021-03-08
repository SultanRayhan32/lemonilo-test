import React from 'react'

// MODULE
import { View, StyleSheet   } from 'react-native';

// COMPONENT
import BodyItem from "../BodyItem/index"
import Footer from '../Footer/index'

function Body () {

  return (
    <View style={styles.container}>

      <View style={styles.line}>
      </View>

      <Footer/>
      
      <BodyItem/>
      
    </View>
  )

}

// STYLING
const styles = StyleSheet.create({

  container : {
    width : "100%",
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30,
    height : "auto",
    paddingTop : 10,
    paddingBottom : 10,
    backgroundColor : "#ffffff",
    marginTop : -25,
    zIndex : 99,
    alignItems : "center",
    position : "relative"
  },

  line : {
    width : 30,
    height : 1.8,
    borderRadius : 10,
    backgroundColor : "#BBBBBB"
  },
  
});


export default Body
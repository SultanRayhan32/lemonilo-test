import React from 'react'

// MODULE
import { View, Text , StyleSheet } from 'react-native'

function Item (props) {

  const { textP , selected } = props

  return (
    <View
      style={ selected ? styles.containerSelected : styles.container}
    >
      <Text style={ selected ?  styles.textSelected : styles.textStyle}>
        {textP}
      </Text>
    </View>
  )

}

// STYLING
const styles = StyleSheet.create({
  container : {
    // width : 100,
    padding : 13,
    height : 30,
    borderColor : "#d4d4d4",
    borderWidth : 0.7,
    marginRight : 10,
    borderRadius : 40,
    alignItems : "center",
    justifyContent : "center"
  },
  containerSelected : {
    padding : 13,
    height : 30,
    marginRight : 10,
    borderRadius : 40,
    alignItems : "center",
    justifyContent : "center",
    backgroundColor : "#33b056"
  },
  textStyle : {
    color : "#8f8f8f",
    fontSize : 14,
  },
  textSelected : {
    color : "#ffffff",
    fontSize : 14,
  }
})

export default Item;
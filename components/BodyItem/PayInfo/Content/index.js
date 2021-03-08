import React from 'react'

// MODULE
import { View , Text , Image , StyleSheet } from 'react-native'

function Content (props) {

  const { text , image , stylePr } = props

  return (
    <View style={[stylePr,styles.container]}>
      <View style={styles.content}>
        <Image source={image} style={styles.imageStyle}/>
      </View>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  )

}

// STYLING
const styles = StyleSheet.create({
  container : {
    alignItems : "center" 
  },
  content : {
      backgroundColor : "#ffffff",
      width : 20,
      height : 20,
      borderRadius : 30,
      justifyContent : "center",
      alignItems : "center"
  },
  imageStyle : {
    width : 13,
    height : 13
  },
  textStyle : {
    color : "#ffffff",
    fontSize : 12.5,
    marginTop : 3
  }
})

export default Content;
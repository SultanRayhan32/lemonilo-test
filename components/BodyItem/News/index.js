import React from 'react'

// MODULE
import { View, Text , StyleSheet , Image } from 'react-native'

function News (props) {

  const { image, title, desc } = props

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.imageStyle}
      />
      <View
        style={styles.content}
      >
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.desc}>
         It is a long established fact that a reader will be distracted by the readable content of page when.
        </Text>
      </View>
    </View>
  )

}

// STYLING
const styles = StyleSheet.create({
  container : {
    width : "88%",
    // height : "auto",
    height : 330,
    borderRadius : 16,
    borderColor : "#f1f1f1",
    borderWidth : 1.5,
    marginTop : 20
  },
  imageStyle : {
    width : "100%",
    height : 185,
    borderTopLeftRadius : 16,
    borderTopRightRadius : 16,
  },
  content : {
      width : "100%",
      padding : 15,
      height : 170
  },
  title : {
    fontSize : 17,
    fontWeight : "bold",
    // marginTop : 10,
  },
  desc : {
   fontSize : 16.4,
   marginTop : 7 
  }
})

export default News;
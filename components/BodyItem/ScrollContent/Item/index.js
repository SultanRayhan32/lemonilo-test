import React from 'react'

// MODULE
import { View , StyleSheet , Text , Image } from 'react-native'

function Item (props) {

  const { imgC , textC } = props

  return (
    <View style={styles.container}>
        <Image
          style={styles.image}
          source={imgC}
        />
        <Text style={styles.title}>{textC}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container : {
    width : 130,
    // height : "auto",
    height : 180,
    borderRadius : 10,
    borderColor : "#f1f1f1",
    borderWidth : 1.5,
    marginTop : 10,
    marginRight : 10,    
    // backgroundColor : "pink"
  },
  image : {
    width : "100%",
    height : 125,
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10
  },
  title : {
    fontSize : 14,
    fontWeight : "bold",
    marginTop : 10,
    marginLeft : 7
  }
})

export default Item;
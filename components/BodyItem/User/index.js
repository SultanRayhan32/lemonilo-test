import React from 'react'

// MODULE
import { View , StyleSheet , Image } from 'react-native'

// IMAGE
import image from '../../../assets/User/user-f.png'

function User () {
  
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.imageStyle}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container : {
    height : 38,
    width : 38,
    borderRadius : 100,
    backgroundColor : "#00870d",
    justifyContent : "center",
    alignItems : "center"    
  },
  imageStyle : {
    width : 18,
    height : 18
  }
})

export default User;
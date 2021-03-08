import React from 'react'

// MODULE
import { Text , View, StyleSheet , Image } from 'react-native'

import img1 from '../../../assets/Adv/pizza.jpg'

function AdvContent () {

  return (
    <View style={styles.container}>

      <View style={styles.firstContent}>
        <Text style={styles.firstText}>
          gofood
        </Text>
        <Text style={styles.secondText}>
          Banyak resto dekatmu lagi promo
        </Text>
        <Text style={styles.thirdContent}>
         Yuk, lihat apa aja pilihan nya
        </Text>
      </View>
      
      <Image
        source={img1}
        style={styles.imageStyle}
      />

    </View>
  )

}

// STYLING
const styles = StyleSheet.create({
  container : {
    backgroundColor : "#f5949d",
    width : "88%",
    height : 200,
    marginTop : 20,
    borderRadius : 17,
    flexDirection : "row",
    justifyContent :  "space-between",
    padding : 15
  },
  firstContent : {
    justifyContent : "space-between",
    width : "40%"
  },
  firstText : {
    fontSize : 15,
    color : "#ffffff",
    fontWeight : "600"
  },
  secondText : {
    fontSize : 16,
    fontWeight : "bold",
    color : "#ffffff",
    width : 120
  },
  thirdContent : {
    fontSize : 15,
    color : "#ffffff",
    fontWeight : "300"
  },
  imageStyle : {
    height : 170,
    width : "44%",
    // marginRight : 90
    borderTopLeftRadius : 60,
    borderTopRightRadius : 60
  }
})

export default AdvContent
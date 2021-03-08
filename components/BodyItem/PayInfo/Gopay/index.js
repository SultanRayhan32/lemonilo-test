import React from 'react'

// MODULE
import { View, StyleSheet , Text , Image } from 'react-native'

// IMAGES 
import payImg from '../../../../assets/PayInfo/walllet2.png'

function Gopay () {

  return (
    <View style={styles.container}>
      <View style={{flexDirection : "row",alignItems : "center"}}>
        <Image 
          source={payImg}
          style={styles.imageStyle}
        />
        <Text style={styles.gopayText}>gopay</Text>
      </View>
      <Text style={styles.priceText}>Rp50.000</Text>
      <Text style={styles.clickText}>
        Klik & cek Riwayat
      </Text>
    </View>
  )

}

// STYLING
const styles = StyleSheet.create({
  container : {
    width : 145,
    height : 78,
    backgroundColor : "#ffffff",
    marginLeft : 15,
    borderRadius : 10,
    padding : 5
  },
  gopayText : {
    fontSize : 15,
    fontWeight : "bold",
    marginLeft : 4
  },
  priceText : {
    fontSize : 16,
    fontWeight : "bold",
    marginTop : 2
  },
  clickText : {
    color : "#2c8a33",
    fontSize : 14.8,
    fontWeight : "bold",
    marginTop : 2
  },
  imageStyle : {
    width : 14.5,
    height : 14.5,
    marginTop : 3.5
  }
})

export default Gopay
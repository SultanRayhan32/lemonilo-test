import React from 'react'

// MODULE 
import { View , StyleSheet , Dimensions , Image , Text  } from 'react-native'

// WINDOWS HEIGHT
const windowHeight = Dimensions.get('window').height;

// IMAGES
import motor from '../../assets/Footer/motor.png'
import car from '../../assets/Footer/car.png'
import basket from '../../assets/Footer/shopBag.png'
import spoon from '../../assets/Food/spoon.png'

function Footer () {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
      </View>
      <View style={styles.containerNext}>
        <View style={[styles.item,{marginLeft : 22}]}>
          <View style={styles.itemCircle}>
            <Image
              style={styles.imageStyle}
              source={motor}
            />
          </View>
          <Text style={styles.textStyle}>
          GoRide
          </Text>
        </View>

        <View style={styles.item}>
          <View style={styles.itemCircle}>
            <Image
              style={styles.imageStyle}
              source={car}
            />
          </View>
          <Text style={styles.textStyle}>
          GoCar
          </Text>
        </View>

        <View style={styles.item}>
          <View style={[styles.itemCircle,{backgroundColor : "#ef2938"}]}>
            <Image
              style={styles.imageStyle}
              source={spoon}
            />
          </View>
          <Text style={styles.textStyle}>
          GoFood
          </Text>
        </View>

        <View style={[styles.item,{marginRight : 22}]}>
          <View style={[styles.itemCircle,{backgroundColor : "#ef2938"}]}>
            <Image
              style={{width : 26,height : 26}}
              source={basket}
            />
          </View>
          <Text style={styles.textStyle}>
          GoMart
          </Text>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    position : "absolute",
    top : Dimensions.get('window').height - 240  ,
    left : "auto",
    // right : 0,
    width : "87%",
    height : 100,
    borderRadius : 50,
    backgroundColor : "#ffffff",
    zIndex : 99,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems : "center",
    // justifyContent : "space-between",
    // flexDirection : 'row'
  },
  line : {
    width : 30,
    height : 2.5,
    borderRadius : 20,
    backgroundColor : "#BBBBBB",
    marginTop : 7
  },
  containerNext : {
    justifyContent : "space-between",
    flexDirection : 'row',
    width : "100%",
    height : "100%"
  },
  item : {
    height : 48,
    alignItems : "center",
    marginTop : 13,
    // alignItems : "center"
    // justifyContent : "space-between",
    // alignItems : "space-between"
  },
  textStyle : {
    color : "#6a6a6a",
    fontSize : 13,
    marginTop : 5
  },
  itemCircle : {
    width : 44,
    height : 44,
    backgroundColor : "#01a916",
    justifyContent : "center",
    alignItems : "center",
    borderRadius : 100
  },
  imageStyle : {
    width : 30,
    height : 30
  }
})

export default Footer
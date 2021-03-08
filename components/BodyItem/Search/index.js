import React from 'react'

// MODULE
import { View , StyleSheet , Text , Image } from 'react-native'

function Search () {

  return (
    <View
      style={styles.container}
    >
      <Image
        style={styles.imageStyle}
        source={require('../../../assets/Search/icon-1.png')}
      />
      <Text style={styles.textStyle}>
        Mau Kemana Hari ini?
      </Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container : {
    width : "85%",
    height : 38,
    backgroundColor : "#FAFAFA",
    borderRadius : 16,
    flexDirection : "row",
    borderColor : "#ECECEC",
    borderWidth : 1,
    alignItems : "center"
  },
  imageStyle : {
    width : 19,
    height : 19,
    marginRight : 8,
    marginLeft : 11,
  },
  textStyle : {
    color : "#858585",
    fontSize : 14,
    marginLeft : 5
  }
})


export default Search;
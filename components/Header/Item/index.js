import React from 'react'

// MODULE
import { Text, View, StyleSheet , Image , TouchableWithoutFeedback  } from 'react-native';

function Item (props) {

  const { 
          imgP, 
          textP , 
          style , 
          isActive 
        } = props

  return (
    <TouchableWithoutFeedback
      // onPress={e=>}
    >
      <View style={[style, isActive? styles.contentSelected : styles.content]}>
        <Image
          style={styles.imageStyle}
          source={imgP}
        />
        <Text style={styles.text}>
          {textP}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )

}

const styles = StyleSheet.create({
  content : {
    height : 45,
    flexDirection : "row",
    alignItems : "center",
    marginBottom : 25
  },
  contentSelected : {
    height : 45,
    flexDirection : "row",
    alignItems : "center",
    backgroundColor : "#77B0F0",
    borderRadius : 18,
    padding : 8,
    marginBottom : 25
  },
  imageStyle : {
    width : 17,
    height : 17,
    marginRight : 8
  },
  text : {
    fontSize : 17,
    color : "#ffffff",
    // fontFamily: "Roboto",
    fontWeight : "bold"
  }
})

export default Item